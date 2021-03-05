import React from 'react';
import useStyles from './stylesContactItem';
import PropTypes from 'prop-types';

const ContactItem = ({ contact, onDelete }) => {
  const classes = useStyles();
  const { id, number, name } = contact;

  const handleDelete = id => onDelete(id);

  return (
    <li key={id} id={id} className={classes.contactItem}>
      <p className={classes.pContactName}>
        {name}: {number}
      </p>
      <button
        type="button"
        className={classes.btnDelete}
        onClick={() => handleDelete(id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
