import styled from 'styled-components';

export const ContactListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const ContactListIntem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 3px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

  &: hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }
`;

export const DeleteContactButton = styled.button`
  padding: 5px;
  font-size: 14px;
  font-weight: 600;
  background-color: #f44336;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #d32f2f;
  }
`;
