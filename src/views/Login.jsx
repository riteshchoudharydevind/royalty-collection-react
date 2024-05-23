import React from "react";
import DynamicForm from "../components/FormView";
import { loginInputs } from "../utils/input_fields/loginInputs";

const Login = () => {
  return <DynamicForm config={loginInputs} />;
};

export default Login;
