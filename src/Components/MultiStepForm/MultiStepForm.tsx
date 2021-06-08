import { useState } from 'react';
import { Grid, Paper, Stepper, Step, StepLabel, Button } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { FormStyles } from '../../styles/FormStyles';

const useStyles = FormStyles();
const steps = ['Day 1', 'Day 2', 'Day 3'];

function getStepContent(step: number) {
  return <h1>Page{step}</h1>;
}

export default function MultiStepForm() {
  const classes = useStyles();

  const [activeStep, setActiveStep] = useState<number>(0);
  const [formData, setFormData] = useState<object>({});
  const [errors, setErrors] = useState<object>({});
  const [emissionData, setEmissionData] = useState<object[]>();

  const handleNext = () => {
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
                {getStepContent(activeStep)}

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
