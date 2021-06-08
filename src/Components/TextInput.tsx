import { FC, ReactElement } from 'react';
import { TextField } from '@material-ui/core';
import { IProps } from '../interfaces/interfaces';
import { NumberInputValidation } from '../services/validations/NumberInputValidation';
import { TextInputStyles } from '../styles/TextInputStyles';

const useStyles = TextInputStyles();

export const TextInput: FC<IProps> = (props): ReactElement => {
  const classes = useStyles();

  const { formData, pageStep, handleChange, errorHandler } = props;

  return (
    <TextField
      id="textinput"
      inputProps={{ 'aria-label': 'Without label' }}
      className={classes.textInput}
      required
      fullWidth
      value={formData[pageStep]?.mwh || ''}
      autoComplete="off"
      error={!!errorHandler.errors?.mwh}
      onKeyDown={(key: any) => {
        const mwh = NumberInputValidation(formData[pageStep].mwh, key);
        if (handleChange) {
          handleChange(mwh, 'mwh');
        }
      }}
    />
  );
};
