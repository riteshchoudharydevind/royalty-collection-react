export const signupInputs = [
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
];

export const signupHeader = {
  title: "Get started with Franchain",
  description: "Create an account in 5 minutes.",
};
