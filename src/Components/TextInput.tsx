import { FC, ReactElement } from 'react';
import { TextField } from '@material-ui/core';
import { IProps } from '../interfaces/interfaces';
import { NumberInputValidation } from '../services/validations/NumberInputValidation';

export const TextInput: FC<IProps> = (props): ReactElement => {
  const { formData, pageStep, handleChange } = props;

  return (
    <TextField
      id="textinput"
      inputProps={{ 'aria-label': 'Without label' }}
      required
      fullWidth
      value={formData[pageStep]?.mwh || ''}
      autoComplete="off"
      onKeyDown={(key: any) => {
        const mwh = NumberInputValidation(formData[pageStep].mwh, key);
        if (handleChange) {
          handleChange(mwh, 'mwh');
        }
      }}
    />
  );
};
