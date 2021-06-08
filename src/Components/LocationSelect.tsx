import { FC, ReactElement } from 'react';
import { Select, MenuItem, FormControl, FormHelperText } from '@material-ui/core';
import { IProps } from '../interfaces/interfaces';
import { LocationSelectStyles } from '../styles/LocationSelectStyles';

const useStyles = LocationSelectStyles();

export const LocationSelect: FC<IProps> = ({ formData, pageStep, handleChange, errorHandler }: any): ReactElement => {
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
      <Select
        className={classes.select}
        value={formData[pageStep]?.location || ''}
        error={!!errorHandler.errors.location}
        onChange={(event) => {
          handleChange(event.target.value, 'location');
        }}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label', classes: { icon: classes.icon } }}
      >
        <MenuItem value="Germany">Germany</MenuItem>
        <MenuItem value="Austria">Austria</MenuItem>
        <MenuItem value="France">France</MenuItem>
        <MenuItem value="UK">UK</MenuItem>
        <MenuItem value="Spain">Spain</MenuItem>
      </Select>
      <FormHelperText className={classes.textField}>{errorHandler.errors.location}</FormHelperText>
    </FormControl>
  );
};
