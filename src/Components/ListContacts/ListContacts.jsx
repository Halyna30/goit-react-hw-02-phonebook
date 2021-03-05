import React from 'react';
import ContactItem from '../ContactItem/ContactItem';
import useStyles from './stylesListContacts';
import PropTypes from 'prop-types';

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

ListContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ListContacts;
