import { cls } from "@libs/server/utils";

interface SubElementsProps {
  questionCount?: number;
  answerCount?: number;
  details?: boolean;
  wonderClickHandler?: any;
  isWondering?: boolean;
}

const SubElements = ({
  questionCount = 0,
  answerCount = 0,
  wonderClickHandler,
  details,
  isWondering = false,
}: SubElementsProps) => {
  return (
    <div
      className={cls(
        "w-full py-3 border-b-2 border-t-2 flex justify-start text-sm space-x-4",
        details ? "px-4" : ""
      )}
    >
      <button
        onClick={wonderClickHandler}
        className={cls(
          "flex justify-center items-center space-x-1",
          isWondering ? "text-green-700" : ""
        )}
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span>궁금해요 {questionCount}</span>
      </button>
      <span className="flex justify-center items-center space-x-1">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          ></path>
        </svg>
        <span>답변 {answerCount}</span>
      </span>
    </div>
  );
};
export default SubElements;
