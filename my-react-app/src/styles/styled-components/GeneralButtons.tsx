import { styled } from '@mui/system';

const GeneralButtons = styled('button')`
  padding: 1vh;
  margin: 2vh;
  font-size: 1rem;
  background-color: #333;
  color: var('text-white');
  border: none;
  border-radius: .5vh;
  cursor: pointer;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: #555;
  }

  &:focus {
    outline: none;
  }

  &:active {
    background-color: #444;
  }
`;

export default GeneralButtons;
