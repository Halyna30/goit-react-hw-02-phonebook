import React from 'react';
import { createUseStyles } from 'react-jss';
import ContactItem from './ContactItem';

const ListContacts = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactItem key={Date.now()} contact={contact} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default ListContacts;
