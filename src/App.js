import React from 'react';
import { useState } from 'react';
import { createUseStyles } from 'react-jss';

import FormContacts from './Components/FormContacts/FormContacts';
import ListContacts from './Components/ListContacts/ListContacts';
import Filter from './Components/Filter/Filter';

const useStyles = createUseStyles({
  start: {
    color: 'green',
    margin: 15,
  },
});

function App() {
  const classes = useStyles();

  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  const handleSubmit = contact => {
    const isInContacts = contacts.find(
      item => item.name.toLowerCase() === contact.name.toLowerCase(),
    );

    if (isInContacts) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    setContacts(prevState => [contact, ...prevState]);
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const getFilterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
    return filteredContacts;
  };

  const handlerDelete = id => {
    setContacts([...contacts.filter(contact => contact.id !== id)]);
  };

  return (
    <>
      <h1 className={classes.start}>Phonebook</h1>
      <FormContacts onSubmit={handleSubmit} />

      <h1 className={classes.start}>Contacts</h1>
      <Filter value={filter} onChange={changeFilter} />

      <ListContacts contacts={getFilterContacts()} onDelete={handlerDelete} />
    </>
  );
}

export default App;
