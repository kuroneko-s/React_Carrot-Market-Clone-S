import { cls } from "@libs/server/utils";

interface ButtonWithProps {
  buttonContext: string;
  subBtnPath: string;
  clickHandler?: any;
  isLiked: boolean | undefined;
}

const ButtonWith = ({
  buttonContext,
  subBtnPath,
  clickHandler,
  isLiked = false,
}: ButtonWithProps) => {
  return (
    <div className="flex justify-between items-center pt-3 space-x-2">
      <button className="flex-1 py-3 rounded-md text-white shadow-sm bg-orange-400 hover:bg-orange-500 focus:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors">
        {buttonContext}
      </button>
      <button
        onClick={clickHandler ? clickHandler : null}
        className={cls(
          "p-3 rounded-md transition-colors hover:bg-slate-100",
          isLiked ? "text-red-500" : "text-gray-500"
        )}
      >
        <svg
          className="h-6 w-6 "
          xmlns="http://www.w3.org/2000/svg"
          fill={isLiked ? "currentColor" : "none"}
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={subBtnPath}
          />
        </svg>
      </button>
    </div>
  );
};

export default ButtonWith;
