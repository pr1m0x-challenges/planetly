import * as yup from 'yup';
import { IFormData } from '../../interfaces/interfaces';

let schema = yup.object().shape({
  mwh: yup.string().required('Please enter your mwh'),
  location: yup.string().required('Please enter a location'),
  date: yup.string().required('Please enter a date'),
});

export const MultiStepFormValidations = (v: IFormData) => {
  try {
    schema.validateSync(v, { abortEarly: false });
    return false;
  } catch (err) {
    return err.inner;
  }
};
