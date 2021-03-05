import useStyles from './stylesFilter';
import PropTypes from 'prop-types';

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

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
