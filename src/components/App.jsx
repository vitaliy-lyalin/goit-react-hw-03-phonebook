import { Component } from 'react';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { Container, TitleContacts, TitleForm } from './App.styled';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const localContacts = localStorage.getItem('contacts');
    if (localContacts) {
      this.setState({ contacts: JSON.parse(localContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contact !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const existingContact = contacts.find(contact => contact.name === name);
    if (existingContact) {
      Notify.warning(`${name} is already in contacts.`, { timeout: 1500 });
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
      filter: '',
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
