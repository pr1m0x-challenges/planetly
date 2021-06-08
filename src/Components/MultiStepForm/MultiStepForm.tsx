import { useState, ReactElement } from 'react';
import { Grid, Paper, Stepper, Step, StepLabel, Button } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { FormStyles } from '../../styles/FormStyles';
import { FormStepPage } from './FormStepPage';
import { IFormData, IFormDataIndex, IErrorObject, ErrorHandler } from '../../interfaces/interfaces';
import { MultiStepFormValidations } from '../../services/validations/MultiStepFormValidations';
import { FormSuccessPage } from './FormSuccessPage';

const useStyles = FormStyles();
const steps = ['Day 1', 'Day 2', 'Day 3'];

const getStepContent = (
  pageStep: number,
  formData: any,
  setFormData: Function,
  { errors, setErrors }: ErrorHandler
): ReactElement => {
  return (
    <FormStepPage
      pageStep={pageStep}
      formData={formData}
      setFormData={setFormData}
      errorHandler={{ errors, setErrors }}
    />
  );
};

export default function MultiStepForm() {
  const classes = useStyles();

  const [activeStep, setActiveStep] = useState<number>(0);
  const [formData, setFormData] = useState<IFormDataIndex>({});
  const [errors, setErrors] = useState<object>({});
  const [emissionData, setEmissionData] = useState<object[]>();

  const handleNext = async () => {
    const currentFormPageData: IFormData = formData[activeStep];

    const formErrors = await MultiStepFormValidations(currentFormPageData);

    if (formErrors) {
      let errorObject: IErrorObject = {};
      for (let error of formErrors) {
        errorObject[error.path] = error.message;
      }
      return setErrors(errorObject);
    }
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <>
      <CssBaseline />

      <main className={classes.layout}>
        <Grid container direction="row" spacing={6} style={{ justifyContent: 'center' }}>
          {activeStep !== steps.length ? (
            <>
              <Grid item md={12} lg={2}>
                <Paper className={classes.paper}>
                  <Stepper activeStep={activeStep} className={classes.stepper} orientation="vertical">
                    {steps.map((label) => (
                      <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                </Paper>
              </Grid>
              <Grid item md={12} lg={8}>
                {getStepContent(activeStep, formData, setFormData, { errors, setErrors })}

                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.backButton}>
                      Back
                    </Button>
                  )}
                  <Button variant="contained" color="secondary" onClick={handleNext} className={classes.nextButton}>
                    {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                  </Button>
                </div>
              </Grid>
            </>
          ) : (
            <FormSuccessPage />
          )}
        </Grid>
      </main>
    </>
  );
}
