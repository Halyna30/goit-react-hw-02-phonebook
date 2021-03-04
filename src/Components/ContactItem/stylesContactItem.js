import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  start: {
    color: 'green',
    margin: 15,
  },
  contactItem: {
    display: 'flex',
  },
  pContactName: {
    fontSize: 14,
    marginRight: 10,
  },
  btnDelete: {
    width: 70,
    height: 30,
    background: 'green',
    color: 'white',
    borderRadius: 5,
  },
});

export default useStyles;
