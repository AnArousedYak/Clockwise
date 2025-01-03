import { styled } from '@mui/system';


export const FormStyled = styled('form')`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  margin: 50px auto;
`;

export const LabelStyled = styled('label')`
  margin-bottom: 8px;
  font-size: 1rem;
  font-weight: 500;
  text-align: left;
  width: 100%;
`;

export const InputStyled = styled('input')`
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #555;
  border-radius: 4px;
  background-color: #3e3e3e; // Slightly lighter dark grey for the input field
  color: white;
  width: 100%;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: #777; // Highlight border when focused
  }
`;

// Styled button
export const ButtonStyled = styled('button')`
  background-color: #444;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  width: 100%;
  
  &:hover {
    background-color: #666; // Lighter grey when hovering
  }
  
  &:focus {
    outline: none;
    background-color: #555; // Slightly darker when focused
  }
`;
