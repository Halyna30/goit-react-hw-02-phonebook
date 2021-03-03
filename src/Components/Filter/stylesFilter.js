import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  findInput: {
    display: 'block',
    margin: 15,
    '&:focus': {
      borderColor: 'green',
    },
  },
  label: {
    color: 'green',
    margin: 15,
    fontSize: 16,
  },
});

export default useStyles;
