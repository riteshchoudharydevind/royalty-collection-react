import React from "react";
import { signupHeader, signupInputs } from "../utils/input_fields/signupInputs";
import DynamicForm from "../components/FormView";

const Signup = () => {
  return (
    <DynamicForm
      config={signupInputs}
      title={signupHeader.title}
      description={signupHeader.description}
    />
  );
};

export default Signup;
