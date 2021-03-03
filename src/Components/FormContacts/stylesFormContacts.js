import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  start: {
    color: 'green',
  },
  form: {
    width: 200,
    height: 200,
    margin: 20,
    padding: 5,
  },
  btnAddContact: {
    width: '100%',
    backgroundColor: 'green',
    color: 'white',
    borderRadius: 5,
  },
  input: {
    marginBottom: 15,
    '&:focus': {
      borderColor: 'green',
    },
  },
});
export default useStyles;
