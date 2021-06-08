import { makeStyles } from '@material-ui/core/styles';

export const TextInputStyles = () => {
  return makeStyles(() => ({
    textInput: {
      marginTop: '5px',
      width: '80px',
      marginLeft: '15px',
      marginRight: '15px',
      borderColor: 'white',
      '&:before': {
        borderColor: 'red',
      },
      '&:after': {
        borderColor: 'white',
      },
    },
  }));
};
