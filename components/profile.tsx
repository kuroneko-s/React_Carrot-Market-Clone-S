import Link from "next/link";
import { cls } from "@libs/server/utils";

interface ProfileProps {
  context: string | undefined;
  subContext: string;
  isSmall?: boolean;
  noneText?: boolean;
  url?: string;
  id: string;
  score?: number;
}

const Profile = ({
  context,
  subContext = "",
  isSmall,
  noneText,
  url = "",
  id,
  score = 0,
}: ProfileProps) => {
  return (
    <div className="flex items-center  py-3 space-x-3">
      <div
        className={cls(
          "bg-slate-300 rounded-full h-12 w-12",
          isSmall ? "h-10 w-10" : ""
        )}
      />
      <div className="flex flex-col justify-start">
        <p
          className={cls(
            "font-bold text-gray-900 cursor-pointer text-lg",
            isSmall ? "text-base" : ""
          )}
        >
          {context}
        </p>
        {subContext ? (
          <Link href={url}>
            <a
              className={cls(
                "text-gray-600 cursor-pointer",
                isSmall ? "text-sm" : ""
              )}
            >
              {subContext}
            </a>
          </Link>
        ) : null}

        {noneText ? (
          <div className="flex">
            {[1, 2, 3, 4, 5].map((v, i) => {
              return (
                <svg
                  key={i}
                  className={cls(
                    "h-4 w-4",
                    score >= v ? "text-yellow-400" : "text-gray-400"
                  )}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Profile;
