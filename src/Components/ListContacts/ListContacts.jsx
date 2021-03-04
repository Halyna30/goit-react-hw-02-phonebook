import React from 'react';
import ContactItem from '../ContactItem/ContactItem';
import useStyles from './stylesListContacts';

const ListContacts = ({ contacts, onDelete }) => {
  const classes = useStyles();
  return (
    <ul className={classes.list}>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default ListContacts;
