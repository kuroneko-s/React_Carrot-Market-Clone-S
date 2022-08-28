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
import { useEffect } from "react";

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
          <div className="w-full bg-slate-300 aspect-video rounded-md shadow-sm" />
          <div className="mt-2 space-y-2">
            <h1 className="text-3xl font-bold text-gray-900">
              {data?.stream?.name}
            </h1>
            <p className="text-2xl">{data?.stream?.price}</p>
            <p className="text-base text-gray-700">
              {data?.stream?.description}
            </p>
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
