import styled from "styled-components";
import { theme } from "./theme";
import LogoImage from "../../assets/images/logo.svg";
import ChevronRightIcon from "../../assets//images/Arrow.svg";

const FormWrapper = styled.div`
  width: 650px;
  height: 1117px;
  padding: 60px;
  border: 1px solid red;
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
`;
const TextInput = styled.input`
  width: 530px;
  height: 56px;
  border: 1px solid ${theme.colors.purple.veryLight};
  border-radius: 10px;
`;
const ButtonWrapper = styled.div`
  height: 93px;
  padding: 20px 0px 20px 0px;
`;
const Button = styled.button`
  height: 53px;
  padding: 15px 40px 15px 40px;
  border-radius: 60px;
  background: ${theme.colors.purple.light};
  border: none;
  font-size: 18px;
  font-weight: 700;
  color: ${theme.colors.white.normal};
`;

const HelperText = styled.small`
  color: ${theme.colors.red.normal};
`;

const FormContainer = styled.div``;

const Title = styled.p`
  font-size: 35px;
  font-weight: 500;
  text-align: left;
  margin: unset;
`;

const Description = styled.p`
  font-size: 20px;
  font-weight: 400;
  text-align: left;
  margin: 12px 0px 40px 0px;
`;
const FormFooter = styled.p`
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  line-height: 18.23px;
  margin-top: 10px;
`;
const LinkText = styled.a`
  color: ${theme.colors.black.normal};
`;
const Navbar = styled.div`
  height: 110.92px;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  position: sticky;
  align-items: center;
  top: 0;
`;
const Logo = styled.div`
  background-image: url(${LogoImage});
  width: 35.46px;
  height: 70.92px;
`;

const NavText = styled.div`
  width: 76px;
  height: 21px;
`;
const ChevronRight = styled.div`
  background-image: url(${ChevronRightIcon});
  width: 76px;
  height: 21px;
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
  ChevronRight,
};
