import { Component } from 'react';
import PropTypes from 'prop-types';

import {
  AddContactButton,
  ContactFormWrapper,
  InputContactForm,
  LabelContactForm,
} from './ContactForm.styled';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { name, number } = this.state;
    const newContact = { id: nanoid(), name, number };
    this.setState({
      contacts: [newContact],
      name: '',
      number: '',
    });
    this.props.onSubmit(newContact);
  };

  render() {
    return (
      <ContactFormWrapper onSubmit={this.handleSubmit}>
        <LabelContactForm htmlFor="name">Name</LabelContactForm>
        <InputContactForm
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.handleChange}
          value={this.state.name}
        />
        <LabelContactForm htmlFor="number">Number</LabelContactForm>
        <InputContactForm
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.handleChange}
          value={this.state.number}
        />
        <AddContactButton type="submit">Add contact</AddContactButton>
      </ContactFormWrapper>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
