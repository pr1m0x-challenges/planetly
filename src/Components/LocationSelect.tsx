import { FC, ReactElement } from 'react';
import { Select, MenuItem, FormControl } from '@material-ui/core';
import { IProps } from '../interfaces/interfaces';

export const LocationSelect: FC<IProps> = ({ formData, pageStep, handleChange }: any): ReactElement => {
  return (
    <FormControl>
      <Select
        value={formData[pageStep]?.location || ''}
        onChange={(event) => {
          handleChange(event.target.value, 'location');
        }}
        displayEmpty
      >
        <MenuItem value="Germany">Germany</MenuItem>
        <MenuItem value="Austria">Austria</MenuItem>
        <MenuItem value="France">France</MenuItem>
        <MenuItem value="UK">UK</MenuItem>
        <MenuItem value="Spain">Spain</MenuItem>
      </Select>
    </FormControl>
  );
};
