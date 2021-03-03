import useStyles from './stylesFilter';

const Filter = ({ value, onChange }) => {
  const classes = useStyles();

  return (
    <label htmlFor="" className={classes.label}>
      Find contacts by name
      <input
        type="text"
        className={classes.findInput}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default Filter;
