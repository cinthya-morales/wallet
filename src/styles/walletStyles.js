import styled, { createGlobalStyle } from 'styled-components';
import { Delete } from '@styled-icons/material';
import { Edit } from '@styled-icons/feather/Edit';
import { AttachMoney } from '@styled-icons/material/AttachMoney';

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Segoe UI', Verdana;
    background-color: #fcfef5;
  }
`;
export const FormStyle = styled.form`
  color: #3d0604;
  text-align: center;
  border-radius: 3px;
  padding: 10px;
  padding-top: 20px;
  background-color: #e9ffe1;
`;

export const DeleteW = styled(Delete)`
  color: #3d0604;
  width: 20px;
  height: 20px;
  padding: 12px;
`;

export const EditW = styled(Edit)`
  color: #3d0604;
  width: 20px;
  height: 20px;
  padding: 12px;
`;

export const Td = styled.td`
  font-size: 1rem;
  padding: 3px;
  background: #fafbe3;
  border: 1px solid #607848;
  border-radius: 3px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  ::placeholder {
    color: #89b399;
  }
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`;

export const Th = styled.th`
  font-size: 1rem;
  padding: 3px;
  background: #607848;
  color: #fafbe3;
  margin-left: 10px;
  border-radius: 3px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  ::placeholder {
    color: #89b399;
  }
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`;

export const ButtonAdd = styled.button`
  color: #fafbe3;
  background: #3d0604;
  border-radius: 5px;
  font-size: 1em;
  width: 120px;
  padding: 12px;
  margin-left: 10px;
`;

export const HeaderW = styled.span`
  font-size: 1em;
  color: #3d0604;
  display: inline-flex;
  padding: 12px;
  margin-left: 10px;
`;

export const MoneyIcon = styled(AttachMoney)`
  color: #607848;
  width: 30px;
  height: 30px;
  padding: 12px;
`;
