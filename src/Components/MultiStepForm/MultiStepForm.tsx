import { useState, ReactElement } from 'react';
import { Grid, Paper, Stepper, Step, StepLabel, Button } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { FormStyles } from '../../styles/FormStyles';
import { FormStepPage } from './FormStepPage';
import { IFormData, IFormDataIndex } from '../../interfaces/interfaces';
import { FormValidation } from '../../services/validations/MultiStepFormValidations';

const useStyles = FormStyles();
const steps = ['Day 1', 'Day 2', 'Day 3'];

const getStepContent = (pageStep: number, formData: any, setFormData: Function): ReactElement => {
  return <FormStepPage pageStep={pageStep} formData={formData} setFormData={setFormData} />;
};

export default function MultiStepForm() {
  const classes = useStyles();

  const [activeStep, setActiveStep] = useState<number>(0);
  const [formData, setFormData] = useState<IFormDataIndex>({});
  const [errors, setErrors] = useState<object>({});
  const [emissionData, setEmissionData] = useState<object[]>();

  const handleNext = async () => {
    const currentFormPageData: IFormData = formData[activeStep];

    const formErrors = await FormValidation(currentFormPageData);

    if (formErrors) {
      return;
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
                {getStepContent(activeStep, formData, setFormData)}

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
            <h1>Hide Stepper + Finish Page</h1>
          )}
        </Grid>
      </main>
    </>
  );
}
