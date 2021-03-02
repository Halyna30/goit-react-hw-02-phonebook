import React from 'react';
import { useState } from 'react';
import { createUseStyles } from 'react-jss';

const ContactItem = ({ contact, onDelete }) => {
  const { id, number, name } = contact;

  const handleDelete = id => onDelete(id);

  return (
    <li key={number} id={id}>
      <p>
        {name}: {number}
      </p>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
