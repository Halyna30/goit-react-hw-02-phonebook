import React from 'react';
import { useState } from 'react';
import useStyles from './stylesContactItem';

const ContactItem = ({ contact, onDelete }) => {
  const classes = useStyles();
  const { id, number, name } = contact;

  const handleDelete = id => onDelete(id);

  return (
    <li key={id} id={id}>
      <p>
        {name}: {number}
      </p>
      <button type="button" onClick={() => handleDelete(id)}>
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
