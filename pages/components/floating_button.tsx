interface FloatingButtonProps {
  pathData: string;
}

const FloatingButton = ({ pathData }: FloatingButtonProps) => {
  return (
    <button className="fixed bottom-28 right-8 p-3 bg-orange-400 hover:bg-orange-500 transition-colors rounded-full text-white cursor-pointer">
      <svg
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d={pathData}
        />
      </svg>
    </button>
  );
};

export default FloatingButton;
