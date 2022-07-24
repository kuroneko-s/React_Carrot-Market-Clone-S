interface CommentProps {
  context: string;
  subContext: string;
  comment: string;
}

const Comment = ({ context, subContext, comment }: CommentProps) => {
  return (
    <div className="flex items-start pt-3 space-x-3 px-4">
      <div className="bg-slate-300 rounded-full h-8 w-8" />
      <div className="flex flex-col justify-start">
        <p className="font-bold text-gray-900 cursor-pointer text-sm">
          {context}
        </p>
        <p className="text-gray-600 text-xs">{subContext}</p>
        <p className="pt-3">{comment}</p>
      </div>
    </div>
  );
};

export default Comment;
