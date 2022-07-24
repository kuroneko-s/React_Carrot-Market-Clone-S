interface DivistionItemProps {
  context: string;
}

const DivistionItem = ({ context }: DivistionItemProps) => {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 bg-gray-200 rounded-xl text-xs">
      {context}
    </span>
  );
};

export default DivistionItem;
