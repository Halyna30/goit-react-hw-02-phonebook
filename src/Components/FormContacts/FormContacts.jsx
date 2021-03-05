import { useState } from 'react';
import useStyles from './stylesFormContacts';
import shortid from 'shortid';
import PropTypes from 'prop-types';

const FormContacts = ({ onSubmit }) => {
  const classes = useStyles();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInput = e => {
    if (e.target.type === 'text') {
      setName(e.target.value);
    } else {
      setNumber(e.target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (name === '' || number === '') return;
    const contact = { id: shortid.generate(), name: name, number: number };

    onSubmit(contact);
    setName('');
    setNumber('');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={classes.form}>
        <label htmlFor="">
          name
          <input
            type="text"
            name={name}
            value={name}
            className={classes.input}
            onChange={handleInput}
          />
        </label>
        <label htmlFor="">
          number
          <input
            type="number"
            number={number}
            value={number}
            className={classes.input}
            onChange={handleInput}
          />
        </label>

        <button
          type="submit"
          className={classes.btnAddContact}
          disabled={name === '' ? true : false}
        >
          Add contact
        </button>
      </form>
    </>
  );
};

FormContacts.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default FormContacts;
