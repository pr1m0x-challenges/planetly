import { FC, ReactElement } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { IProps } from '../interfaces/interfaces';
import { DatePickerStyles } from '../styles/DatePickerStyles';

const useStyles = DatePickerStyles();

export const DatePicker: FC<IProps> = ({ formData, pageStep, handleChange }): ReactElement => {
  const classes = useStyles();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        InputProps={{ 'aria-label': 'Without label', className: classes.datePicker }}
        disableToolbar
        variant="inline"
        format="dd.MM.yyyy"
        margin="normal"
        id="date-picker-inline"
        value={formData[pageStep]?.date || null}
        onChange={(picktedDate: any) => {
          if (handleChange) {
            handleChange(picktedDate, 'date');
          }
        }}
      />
    </MuiPickersUtilsProvider>
  );
};
