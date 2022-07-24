import { cls } from "../libs/utils";

interface ChatComponentProps {
  message: string;
  isLeft: boolean;
}

const ChatComponent = ({ message, isLeft }: ChatComponentProps) => {
  return (
    <div
      className={cls(
        "flex items-start space-x-2",
        !isLeft ? "space-x-reverse flex-row-reverse" : ""
      )}
    >
      <div className="w-8 h-8 rounded-full bg-slate-400" />
      <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
        {message}
      </div>
    </div>
  );
};

export default ChatComponent;
