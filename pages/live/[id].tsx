import { NextPage } from "next";
import ChatComponent from "../components/chat_component";
import InputMessage from "../components/input_message";
import Layout from "./../components/layout";

const LiveDetail: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="space-y-4">
        <div>
          <div className="w-full bg-slate-300 aspect-video rounded-md shadow-sm" />
          <h3 className="text-gray-800 font-semibold text-2xl mt-2 text-center">
            Let&rsquo;s try potatoes
          </h3>
        </div>

        <div className="pt-10 pb-16 h-[50vh] px-4 overflow-y-scroll space-y-5">
          <ChatComponent
            message="Hi how much are you selling them for?"
            isLeft
          />
          <ChatComponent message="I want \20,000" isLeft={false} />
          <ChatComponent message="헐?" isLeft />
          <ChatComponent
            message="Hi how much are you selling them for?"
            isLeft
          />
          <ChatComponent message="I want \20,000" isLeft={false} />
          <ChatComponent message="헐?" isLeft />
          <ChatComponent
            message="Hi how much are you selling them for?"
            isLeft
          />
          <ChatComponent message="I want \20,000" isLeft={false} />
          <ChatComponent message="헐?" isLeft />
          <ChatComponent
            message="Hi how much are you selling them for?"
            isLeft
          />
          <ChatComponent message="I want \20,000" isLeft={false} />
          <ChatComponent message="헐?" isLeft />
          <ChatComponent
            message="Hi how much are you selling them for?"
            isLeft
          />
          <ChatComponent message="I want \20,000" isLeft={false} />
          <ChatComponent message="헐?" isLeft />
          <ChatComponent
            message="Hi how much are you selling them for?"
            isLeft
          />
          <ChatComponent message="I want \20,000" isLeft={false} />
          <ChatComponent message="헐?" isLeft />
          <ChatComponent
            message="Hi how much are you selling them for?"
            isLeft
          />
          <ChatComponent message="I want \20,000" isLeft={false} />
          <ChatComponent message="헐?" isLeft />
          <ChatComponent
            message="Hi how much are you selling them for?"
            isLeft
          />
          <ChatComponent message="I want \20,000" isLeft={false} />
          <ChatComponent message="헐?" isLeft />
          <ChatComponent
            message="Hi how much are you selling them for?"
            isLeft
          />
          <ChatComponent message="I want \20,000" isLeft={false} />
          <ChatComponent message="헐?" isLeft />

          <InputMessage />
        </div>
      </div>
    </Layout>
  );
};

export default LiveDetail;
