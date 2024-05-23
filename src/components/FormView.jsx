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
  Label,
} from "./styled-components/common";
import PageHeader from "./PageHeader";

const DynamicForm = ({ config }) => {
  const [formData, setFormData] = useState(
    config.inputs.reduce((acc, field) => {
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
    config.inputs.forEach((field) => {
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
    return config.inputs.every((field) => {
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
      <PageHeader title={config.title} description={config.description} />
      <form onSubmit={handleSubmit}>
        {config.inputs.map((field, index) => (
          <FormContainer key={index}>
            <InputWrapper key={index}>
              <Label htmlFor={field.name}>{field.label}</Label>
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
            {config.submitButton.text}
          </Button>
        </ButtonWrapper>
      </form>
      {config.footerContent && <FormFooter>{config.footerContent}</FormFooter>}
    </FormWrapper>
  );
};

export default DynamicForm;
