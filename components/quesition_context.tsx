import { cls } from "@libs/server/utils";

interface QuesitionContext {
  context?: string;
  details?: boolean;
}

const QuesitionContext = ({ context, details }: QuesitionContext) => {
  return (
    <span
      className={cls("font-medium cursor-pointer block", details ? "px-4" : "")}
    >
      <span className="text-orange-500 font-bold">Q. </span>
      {context}
    </span>
  );
};

export default QuesitionContext;
