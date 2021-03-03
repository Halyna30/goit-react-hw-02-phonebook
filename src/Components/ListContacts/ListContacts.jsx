import React from 'react';
import ContactItem from '../ContactItem/ContactItem';

const ListContacts = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default ListContacts;
