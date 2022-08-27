import type { UseFormRegisterReturn } from "react-hook-form";

interface InputComponentProps {
  labelContext: string;
  placeholder: string;
  id: string;
  type?: "text" | "price" | "phone";
  currency?: string;
  currencySymbol?: string;
  countryCode?: string;
  register: UseFormRegisterReturn;
}

const InputComponent = ({
  labelContext,
  placeholder,
  id,
  type = "text",
  currency,
  currencySymbol,
  countryCode,
  register,
}: InputComponentProps) => {
  return (
    <div className="flex flex-col justify-start">
      <label htmlFor={id} className="text-sm font-medium">
        {labelContext}
      </label>

      {type === "price" ? (
        <div className="flex relative mt-1">
          <div className="absolute flex justify-center items-center left-3 h-full pointer-events-none text-sm text-gray-500">
            <span>{currencySymbol}</span>
          </div>
          <input
            id={id}
            type="text"
            className="pl-7 pr-12 appearance-none w-full px-3 border-transparent border-gray-300 shadow-sm placeholder-gray-400 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            placeholder={placeholder}
            {...register}
          />
          <div className="absolute flex justify-center items-center right-3 h-full pointer-events-none text-gray-700">
            <span>{currency}</span>
          </div>
        </div>
      ) : null}

      {type === "text" ? (
        <input
          id={id}
          type="text"
          className="mt-1 appearance-none w-full px-3 border-transparent border-gray-300 shadow-sm placeholder-gray-400 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          placeholder={placeholder}
          {...register}
        />
      ) : null}

      {type === "phone" ? (
        <div className="flex rounded-md shadow-sm mt-1">
          <span className="flex items-center justify-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-sm text-gray-500 select-none">
            {countryCode}
          </span>
          <input
            id={id}
            type="number"
            className="py-2 px-4 appearance-none w-full border-transparent border-gray-300 shadow-sm placeholder-gray-400 rounded-md rounded-l-none focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            {...register}
          />
        </div>
      ) : null}
    </div>
  );
};

export default InputComponent;
