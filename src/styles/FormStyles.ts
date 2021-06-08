import { makeStyles } from '@material-ui/core/styles';

export const FormStyles = () => {
  return makeStyles((theme) => ({
    layout: {
      width: '100%',
      display: 'flex',
    },
    paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      boxShadow: 'none',
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
      },
    },
    stepper: {
      padding: theme.spacing(3, 0, 5),
    },
    buttons: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    nextButton: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(1),
    },
    backButton: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(1),
      backgroundColor: '#fff',
      '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.7)' },
    },
    noShadow: {
      boxShadow: 'none',
      border: 'none',
    },
  }));
};
