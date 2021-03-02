import { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { checkPropTypes } from 'prop-types';

const useStyles = createUseStyles({
  start: {
    color: 'green',
  },
  form: {
    width: 200,
    height: 200,
    margin: 20,
  },
});

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
    const contact = { id: Date.now(), name: name, number: number };

    onSubmit(contact);
    setName('');
    setNumber('');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={classes.form}>
        <label htmlFor="">
          Name
          <input type="text" name={name} onChange={handleInput} />
          <input type="number" number={number} onChange={handleInput} />
        </label>

        <button type="submit">Add contact</button>
      </form>
    </>
  );
};

export default FormContacts;
