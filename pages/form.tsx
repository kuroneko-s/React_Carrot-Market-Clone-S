import type { NextPage } from "next";

const Form: NextPage = () => {
  return (
    <form className="flex flex-col space-y-2 p-6">
      <input
        type={"text"}
        required
        placeholder="Username"
        className="placeholder-shown:bg-teal-400 peer"
      />
      <span className="hidden peer-invalid:block peer-invalid:text-red-500">
        THis input is invalid
      </span>
      <input type={"submit"} value="login" className="bg-white" />
    </form>
  );
};

export default Form;
