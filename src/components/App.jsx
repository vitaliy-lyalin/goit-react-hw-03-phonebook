import { Component } from 'react';

import { Container, TitleContacts, TitleForm } from './App.styled';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const existingContact = contacts.find(contact => contact.name === name);
    if (existingContact) {
      alert(`${name} is already in contacts.`);
      return;
    }
    const newContact = { id: nanoid(), name, number };
    this.setState({
      contacts: [...contacts, newContact],
    });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <Container>
        <TitleForm>Phonebook</TitleForm>
        <ContactForm onSubmit={this.addContact} />
        <TitleContacts>Contacts</TitleContacts>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}
