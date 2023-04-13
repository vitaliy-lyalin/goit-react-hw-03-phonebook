import React from 'react';
import PropTypes from 'prop-types';

import {
  ContactListIntem,
  ContactListWrapper,
  DeleteContactButton,
} from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  //   console.log(contacts);
  return (
    <ContactListWrapper>
      {contacts.map(({ id, name, number }) => (
        <ContactListIntem key={id}>
          <span>{name}: </span>
          <span>{number}</span>
          <DeleteContactButton
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </DeleteContactButton>
        </ContactListIntem>
      ))}
    </ContactListWrapper>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
