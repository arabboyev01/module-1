import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

export const SearchInput = styled(TextField)`
  flex: 1;
  margin-right: 10px;
`;

export const SearchButton = styled(Button)`
  background-color: #1976d2;
  color: white;
  height: 50px;

  &:hover {
    background-color: #115293;
  }
`;
