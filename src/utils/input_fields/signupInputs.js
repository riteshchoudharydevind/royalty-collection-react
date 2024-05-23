import { LinkText } from "../../components/styled-components/common";

export const FormContent = {
  title: "Get started with Franchain",
  description: "Create an account in 5 minutes.",
  inputs: [
    {
      name: "first-name",
      label: "First Name",
      type: "text",
      required: true,
    },
    {
      name: "last-name",
      label: "Last Name",
      type: "text",
      required: true,
    },
    {
      name: "business-name",
      label: "Business name and HQ location",
      type: "text",
      required: true,
    },
    {
      name: "email",
      label: "Work email",
      type: "text",
      required: true,
      errorMessage: "Invalid email",
      regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    {
      name: "password",
      label: "Password",
      type: "text",
      required: true,
      helperText: "Password must be atleast 12 characters",
      regex: /^.{12,}$/,
    },
  ],
  submitButton: {
    text: "Sign up",
  },
  footerContent: (
    <>
      By clicking “Start Application“, I agree to Mercury’sx
      <LinkText href="">Terms of Use</LinkText>,
      <LinkText href="">Privacy Policy</LinkText>and to receive electronic
      communication about my accounts and services per
      <LinkText href="">Mercury’s Electronic Communications Agreement</LinkText>
      , and acknowledge receipt of
      <LinkText href="">Mercury’s USA PATRIOT Act disclosure.</LinkText>
    </>
  ),
};
