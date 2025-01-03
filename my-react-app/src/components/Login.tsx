import React from 'react';
import { FormStyled, LabelStyled, InputStyled, ButtonStyled } from '../styles/styled-components/LoginStyled'; // Import styled components

const Login = () => {
  return (
    <FormStyled>
      <LabelStyled htmlFor="Username">Username:</LabelStyled>
      <InputStyled type="text" id="Username" name="Username" required />

      <LabelStyled htmlFor="Password">Password:</LabelStyled>
      <InputStyled type="password" id="Password" name="Password" required />

      <ButtonStyled type="submit">Login</ButtonStyled>
    </FormStyled>
  );
}

export default Login;
