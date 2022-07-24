interface ButtonProps {
  context: string;
}

const ButtonComponent = ({ context }: ButtonProps) => {
  return (
    <button className="mt-3 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none">
      {context}
    </button>
  );
};

export default ButtonComponent;
