import { FC, ReactElement } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { IProps } from '../interfaces/interfaces';

export const DatePicker: FC<IProps> = ({ formData, pageStep, handleChange }): ReactElement => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
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
