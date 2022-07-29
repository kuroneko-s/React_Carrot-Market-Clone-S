import { NextPage } from "next";
import React from "react";
import { useForm } from "react-hook-form";

const FormTest: NextPage = () => {
  const { register } = useForm();
  console.log(register);

  return (
    <form>
      <input type="text" placeholder="username" />
      <input type="email" placeholder="email" />
      <input type="password" placeholder="password" />
    </form>
  );
};

export default FormTest;
