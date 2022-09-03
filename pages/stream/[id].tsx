import { NextPage } from "next";
import ChatComponent from "@components/chat_component";
import InputMessage from "@components/input_message";
import Layout from "@components/layout";
import useSWR from "swr";
import { useRouter } from "next/router";
import { Stream } from "@prisma/client";
import { useForm } from "react-hook-form";
import useMutation from "@libs/client/useMutation";
import useUser from "@libs/client/useUser";

interface StreamMessage {
  id: number;
  message: string;
  user: {
    avatar?: string;
    id: number;
  };
}

interface StreamWithMessage extends Stream {
  messages: StreamMessage[];
}

interface StreamResponse {
  ok: true;
  stream: StreamWithMessage;
}

interface MessageForm {
  message: string;
}

const LiveDetail: NextPage = () => {
  const { user } = useUser();
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm<MessageForm>();
  const { data, mutate } = useSWR<StreamResponse>(
    router.query.id ? `/api/stream/${router.query.id}` : null,
    {
      refreshInterval: 1000,
    }
  );
  const [sendMessage, { loading, data: sendMessageData }] = useMutation(
    `/api/stream/${router.query.id}/message`
  );
  const onValid = (data: MessageForm) => {
    if (loading) return;
    reset();
    mutate(
      (prev) =>
        prev &&
        ({
          ...prev,
          stream: {
            ...prev.stream,
            messages: [
              ...prev.stream.messages,
              {
                id: Date.now(),
                message: data.message,
                user: {
                  ...user,
                },
              },
            ],
          },
        } as any),
      false
    );
    // sendMessage(data);
  };

  /* useEffect(() => {
    if (sendMessageData && sendMessageData.ok) {
      mutate();
    }
  }, [sendMessageData, mutate]); */

  return (
    <Layout canGoBack>
      <div className="space-y-6">
        <div className="pb-12">
          <iframe
            className="w-full aspect-video shadow-sm rounded-sm"
            src={`https://customer-l1cj5o0rluzitqwm.cloudflarestream.com/${data?.stream.cloudflareId}/iframe`}
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
            allowFullScreen={true}
          ></iframe>
          <div className="mt-2 space-y-2">
            <h1 className="text-3xl font-bold text-gray-900">
              {data?.stream?.name}
            </h1>
            <p className="text-2xl">{data?.stream?.price}</p>
            <p className="text-base text-gray-700">
              {data?.stream?.description}
            </p>
            <div className="bg-orange-300 rounded-md space-y-2 py-2 px-2 font-semibold">
              <p>
                <span className="text-lg">cloudflareId : </span>
                <span className="text-sm">{data?.stream.cloudflareId}</span>
              </p>
              <p>
                <span className="text-lg">cloudflareKey : </span>
                <span className="text-sm">{data?.stream.cloudflareKey}</span>
              </p>
              <p>
                <span className="text-lg">cloudflareUrl : </span>
                <span className="text-sm">{data?.stream.cloudflareUrl}</span>
              </p>
            </div>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-gray-900">Live Chat</h1>
        <div className="pt-5 pb-16 h-[50vh] px-4 overflow-y-scroll space-y-5">
          {data?.stream.messages.map((message) => (
            <ChatComponent
              key={message.id}
              message={message.message}
              isLeft={user?.id !== message.user.id}
            />
          ))}
          <form onSubmit={handleSubmit(onValid)}>
            <InputMessage register={register("message", { required: true })} />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default LiveDetail;
