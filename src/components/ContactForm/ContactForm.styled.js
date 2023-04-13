import styled from 'styled-components';

export const ContactFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

export const LabelContactForm = styled.label`
  margin-bottom: 5px;
`;
export const InputContactForm = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 10px;
`;

export const AddContactButton = styled.button`
  padding: 5px;
  font-size: 18px;
  font-weight: 600;
  border: 1px solid #3acdcd;
  border-radius: 4px;
  cursor: pointer;
  background-color: #6cc853;
  transition: 300ms;

  &: hover {
    scale: 1, 03;
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
      rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
  }
`;
