import Link from "next/link";

interface RoundButtonProps {
  pathData: string;
  title: string;
  url: string;
}

const RoundButton = ({ pathData, title, url }: RoundButtonProps) => {
  return (
    <div className="flex flex-col space-y-2">
      <Link href={url}>
        <a className="flex items-center justify-center w-14 h-14 rounded-full relative text-white bg-orange-400 cursor-pointer hover:bg-orange-500 transition-colors">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={pathData}
            ></path>
          </svg>
        </a>
      </Link>
      <span className="text-sm font-medium">{title}</span>
    </div>
  );
};

export default RoundButton;
