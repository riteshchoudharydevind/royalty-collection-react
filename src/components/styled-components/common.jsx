import styled from "styled-components";
import { theme } from "./theme";
import LogoImage from "../../assets/images/logo.svg";
import LeftContainerBg from "../../assets/images/background.svg";

const FormWrapper = styled.div`
  width: 50%;
  height: 1117px;
  padding: 60px;
  background: #f8f8fb;

  @media (max-width: 1024px) {
    width: 100%;
    height: 1366px;
    padding: 60px 200px;
  }
  @media (max-width: 800px) {
    width: 100%;
    height: 675.36px;
    padding: 40px 20px;
  }
  @media (max-width: 393px) {
    width: 100%;
    height: 736px;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 18px;

  @media (max-width: 1024px) {
    width: 100%;
  }
  @media (max-width: 393px) {
    width: 100%;
    min-height: 65.04px;
    gap: 6px;
    margin-bottom: 5px;
  }
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 400;

  @media (max-width: 393px) {
    font-size: 12px;
  }
`;
const TextInput = styled.input`
  width: 100%;
  height: 56px;
  border: 1px solid ${theme.colors.purple.veryLight};
  border-radius: 10px;
  padding: 0px 20px;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 0px 20px;
  }
  @media (max-width: 393px) {
    width: 100%;
    height: 33.86px;
    border-radius: 6.05px;
    border: 0.6px solid ${theme.colors.purple.veryLight};
    padding: 0px 5px;
  }
`;
const ButtonWrapper = styled.div`
  height: 93px;
  padding: 20px 0px 20px 0px;

  @media (max-width: 393px) {
    width: 91.37px;
    height: 58.32px;
    padding: 12.09px 0px;
  }
`;
const Button = styled.button`
  height: 53px;
  padding: 15px 40px 15px 40px;
  border-radius: 60px;
  background: ${(props) =>
    props.disabled ? theme.colors.purple.light : theme.colors.purple.normal};
  border: none;
  font-size: 18px;
  font-weight: 700;
  color: ${theme.colors.white.normal};

  @media (max-width: 393px) {
    height: 34px;
    width: 94px;
    font-size: 12px;
    border-radius: 36px;
    padding: 9.07px 24.18px;
    border-radius: 36.28px;
  }
`;

const HelperText = styled.small`
  color: ${theme.colors.red.normal};
  font-size: 16px;

  @media (max-width: 393px) {
    font-size: 12px;
  }
`;

const FormContainer = styled.div``;

const Title = styled.p`
  font-size: 35px;
  font-weight: 500;
  text-align: left;
  margin: unset;
  margin-top: 70px;

  @media (max-width: 393px) {
    font-size: 22px;
    font-weight: 500;
    line-height: 28.64px;
    text-align: left;
    margin-top: 50px;
  }
`;

const Description = styled.p`
  font-size: 20px;
  font-weight: 400;
  margin: 12px 0px 40px 0px;

  @media (max-width: 393px) {
    font-size: 16px;
    font-weight: 400;
    line-height: 20.83px;
    margin: 6px 0px 15px 0px;
  }
`;
const FormFooter = styled.p`
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  line-height: 18.23px;
  margin-top: 10px;

  @media (max-width: 393px) {
    font-size: 10px;
    font-weight: 400;
    line-height: 13.02px;
    text-align: left;
  }
`;
const LinkText = styled.a`
  color: ${theme.colors.black.normal};
`;
const Navbar = styled.div`
  height: 110.92px;
  width: 100%;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  align-items: center;
  background: transparent;
  top: 0;

  @media (max-width: 1024px) {
    width: 100%;
  }
  @media (max-width: 393px) {
    width: 100%;
    height: 61px;
  }
`;
const Logo = styled.div`
  background-image: url(${LogoImage});
  width: 35.46px;
  height: 70.92px;

  @media (max-width: 393px) {
    width: 17.5px;
    height: 35px;
    background-size: cover;
  }
`;

const NavText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 76px;
  height: 21px;
  cursor: pointer;
`;

const MainContainer = styled.div`
  width: 50%;
  height: 1116px;
  padding: 290px 48px;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${LeftContainerBg});

  @media (max-width: 1024px) {
    display: none;
  }
`;

export {
  TextInput,
  ButtonWrapper,
  Button,
  HelperText,
  FormContainer,
  FormWrapper,
  Title,
  Description,
  InputWrapper,
  FormFooter,
  LinkText,
  Navbar,
  Logo,
  NavText,
  MainContainer,
  Label,
};
