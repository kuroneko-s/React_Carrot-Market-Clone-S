import type { UseFormRegisterReturn } from "react-hook-form";
import ButtonComponent from "./button_component";

interface TextBoxProps {
  buttonContext: string;
  placeholder: string;
  hasLabel?: boolean;
  labelName?: string;
  id?: string;
  register: UseFormRegisterReturn;
}

const TextBox = ({
  buttonContext,
  placeholder,
  hasLabel,
  labelName,
  id,
  register,
}: TextBoxProps) => {
  return (
    <div className="flex flex-col">
      {hasLabel ? (
        <label htmlFor={id} className="text-sm font-medium">
          {labelName}
        </label>
      ) : null}

      {id ? (
        <textarea
          id={id}
          className="mt-1 resize-none appearance-none w-full px-3 border-transparent border-gray-300 shadow-sm placeholder-gray-400 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          placeholder={placeholder}
          rows={4}
          {...register}
        />
      ) : (
        <textarea
          className="mt-1 resize-none appearance-none w-full px-3 border-transparent border-gray-300 shadow-sm placeholder-gray-400 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          placeholder={placeholder}
          rows={4}
          {...register}
        />
      )}

      <ButtonComponent context={buttonContext} />
    </div>
  );
};
export default TextBox;
