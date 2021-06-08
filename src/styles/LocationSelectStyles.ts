import { makeStyles } from '@material-ui/core/styles';

export const LocationSelectStyles = () => {
  return makeStyles(() => ({
    select: {
      width: '250px',
      marginLeft: '15px',
      marginRight: '15px',
      color: 'white',
    },
    icon: {
      fill: 'white',
      fontSize: '32px',
    },
    MuiMenuItem: {
      color: 'white',
    },
    formControl: {
      marginTop: '15px',
    },
    textField: {
      color: 'red',
      marginLeft: '15px',
    },
  }));
};
