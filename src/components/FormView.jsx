import React, { useState } from "react";
import {
  TextInput,
  Button,
  HelperText,
  FormContainer,
  FormWrapper,
  InputWrapper,
  ButtonWrapper,
  FormFooter,
  LinkText,
  Header,
} from "./styled-components/common";
import PageHeader from "./PageHeader";

const DynamicForm = ({ config, title, description }) => {
  const [formData, setFormData] = useState(
    config.reduce((acc, field) => {
      acc[field.name] = "";
      return acc;
    }, {})
  );

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};
    config.forEach((field) => {
      if (field.required && !formData[field.name]) {
        valid = false;
        newErrors[field.name] = `${field.label} is required`;
      } else if (
        field.regex &&
        !new RegExp(field.regex).test(formData[field.name])
      ) {
        valid = false;
        newErrors[field.name] =
          field.errorMessage || `${field.label} is not valid`;
      }
    });
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted", formData);
    }
  };

  const isFormValid = () => {
    return config.every((field) => {
      if (
        field.required &&
        (!formData[field.name] || formData[field.name] === "")
      ) {
        return false;
      }
      if (field.regex && !new RegExp(field.regex).test(formData[field.name]))
        return false;
      return true;
    });
  };

  return (
    <FormWrapper>
      <PageHeader title={title} description={description} />
      <form onSubmit={handleSubmit}>
        {config.map((field, index) => (
          <FormContainer key={index}>
            <InputWrapper key={index}>
              <label htmlFor={field.name}>{field.label}</label>
              <TextInput
                id={field.name}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
              />
              {field.helperText && (
                <HelperText id={`${field.name}-${index}`}>
                  {field.helperText}
                </HelperText>
              )}
              {errors[field.name] && (
                <p style={{ color: "red" }}>{errors[field.name]}</p>
              )}
            </InputWrapper>
          </FormContainer>
        ))}
        <ButtonWrapper>
          <Button type="submit" disabled={!isFormValid()}>
            Sign Up
          </Button>
        </ButtonWrapper>
      </form>
      <FormFooter>
        By clicking “Start Application“, I agree to Mercury’sx
        <LinkText href="">Terms of Use</LinkText>,
        <LinkText href="">Privacy Policy</LinkText>and to receive electronic
        communication about my accounts and services per
        <LinkText href="">
          Mercury’s Electronic Communications Agreement
        </LinkText>
        , and acknowledge receipt of
        <LinkText href="">Mercury’s USA PATRIOT Act disclosure.</LinkText>
      </FormFooter>
    </FormWrapper>
  );
};

export default DynamicForm;
