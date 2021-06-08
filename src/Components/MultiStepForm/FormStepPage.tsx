import { FC, ReactElement, useEffect } from 'react';
import { Typography, Grid } from '@material-ui/core';
import { IProps, IFormDataIndex, IErrorObject } from '../../interfaces/interfaces';
import { TextInput } from '../TextInput';
import { LocationSelect } from '../LocationSelect';
import { DatePicker } from '../DatePicker';

export const FormStepPage: FC<IProps> = (props): ReactElement => {
  const { pageStep, formData, setFormData, errorHandler } = props;

  useEffect(() => {
    const formDataHC: IFormDataIndex = { ...formData };
    if (formDataHC[pageStep]) return;
    formDataHC[pageStep] = { mwh: '', location: '', date: new Date() };

    if (setFormData) {
      setFormData(formDataHC);
    }
  }, [pageStep]);

  const handleChange = (value: string, name?: string) => {
    const errorsHC: IErrorObject = { ...errorHandler.errors };
    if (name) {
      delete errorsHC[name];
    }

    errorHandler.setErrors(errorsHC);

    const formDataHC: IFormDataIndex = { ...formData };
    if (name) {
      formDataHC[pageStep][name] = value;
    }

    if (setFormData) {
      setFormData(formDataHC);
    }
  };

  return (
    <>
      <Typography color="secondary" variant="body1" gutterBottom style={{ fontWeight: 'bold', marginBottom: '35px' }}>
        Weekly Report - Day {pageStep + 1}
      </Typography>
      <Grid container spacing={4}>
        <Grid item>
          <Typography style={{ color: 'white' }} variant="h4" gutterBottom>
            Weekly Report - Day
            <TextInput
              pageStep={pageStep}
              formData={formData}
              handleChange={handleChange}
              errorHandler={errorHandler}
            />
            Weekly Report
          </Typography>
        </Grid>
        <Grid item>
          <Typography style={{ color: 'white' }} variant="h4" gutterBottom>
            Weekly Report - Day
            <LocationSelect
              formData={formData}
              pageStep={pageStep}
              handleChange={handleChange}
              errorHandler={errorHandler}
            />
            Weekly Report
          </Typography>
        </Grid>

        <Grid item>
          <Typography style={{ color: 'white' }} variant="h4" gutterBottom>
            Weekly Report - Day
            <DatePicker
              formData={formData}
              pageStep={pageStep}
              handleChange={handleChange}
              errorHandler={errorHandler}
            />
            Weekly Report
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
