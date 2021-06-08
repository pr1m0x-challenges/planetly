import { makeStyles } from '@material-ui/core/styles';

export const DatePickerStyles = () => {
  return makeStyles(() => ({
    datePicker: {
      marginTop: '-10px',
      width: '225px',
      marginLeft: '15px',
      marginRight: '15px',
      '&:before': {
        borderColor: 'white',
      },
      '&:after': {
        borderColor: 'white',
      },
    },
    icon: {
      color: 'white',
      fontSize: '32px',
    },
  }));
};
