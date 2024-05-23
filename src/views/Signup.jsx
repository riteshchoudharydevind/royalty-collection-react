import React from "react";
import { FormContent } from "../utils/input_fields/signupInputs";
import DynamicForm from "../components/FormView";

const Signup = () => {
  return <DynamicForm config={FormContent} />;
};

export default Signup;
