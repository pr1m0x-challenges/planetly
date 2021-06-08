import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { IProps } from '../interfaces/interfaces';

const DatePicker = ({ formData, pageStep, handleChange }: IProps) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="dd.MM.yyyy"
        margin="normal"
        id="date-picker-inline"
        value={formData[pageStep]?.date || null}
        onChange={(picktedDate: Date) => {
          handleChange(picktedDate, 'date');
        }}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
