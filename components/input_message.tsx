import { UseFormRegisterReturn } from "react-hook-form";

interface MessageInputParameter {
  register?: UseFormRegisterReturn;
}

const InputMessage = ({ register }: MessageInputParameter) => {
  return (
    <div className="fixed w-full mx-auto max-w-md bottom-2 inset-x-0">
      <div className="flex items-center relative">
        <input
          type="text"
          className="shadow-sm rounded-full w-full pr-12 border-gray-400 focus:ring-orange-400 focus:outline-none focus:border-orange-400"
          {...register}
        />
        <button className="absolute inset-y-0 py-1 pr-1.5 right-0 ">
          <span className="flex items-center justify-center bg-orange-400 rounded-full px-3 py-1 text-sm text-white cursor-pointer hover:bg-orange-500 transition-colors select-none hover:ring-2 hover:ring-offset-2 hover:ring-orange-400">
            &rarr;
          </span>
        </button>
      </div>
    </div>
  );
};

export default InputMessage;
