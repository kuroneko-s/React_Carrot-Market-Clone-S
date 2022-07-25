import Link from "next/link";

interface FloatingButtonProps {
  pathData: string;
  url: string;
}

const FloatingButton = ({ pathData, url }: FloatingButtonProps) => {
  return (
    <Link href={url}>
      <a className="fixed bottom-28 right-8 p-3 bg-orange-400 hover:bg-orange-500 transition-colors rounded-full text-white cursor-pointer">
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
      </a>
    </Link>
  );
};

export default FloatingButton;
