import { styled } from '@mui/system';

export const NavbarStyled = styled('nav')`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1vh;
  background-color: #333;
  color: white;
  z-index: 1000;
`;

export const ClockwiseStyled = styled('h1')`
  color: #f5f5f5;
  font-size: 2rem;
  background-color: transparent;
  margin: 0;
`;