import { FC, ReactElement } from 'react';
import { TextField } from '@material-ui/core';
import { IProps } from '../interfaces/interfaces';

export const TextInput: FC<IProps> = (props): ReactElement => {
  const { formData, pageStep } = props;

  return (
    <TextField
      id="textinput"
      inputProps={{ 'aria-label': 'Without label' }}
      required
      fullWidth
      autoComplete="off"
      onKeyDown={(key: any) => {
        console.log('hello');
      }}
    />
  );
};
