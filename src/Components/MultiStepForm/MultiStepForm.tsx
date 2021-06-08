import { useState } from 'react';
import { Grid, Paper, Stepper, Step, StepLabel, Button } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

const steps = ['Day 1', 'Day 2', 'Day 3'];

export default function MultiStepForm() {
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

      <main>
        <Grid container direction="row" spacing={6} style={{ justifyContent: 'center' }}>
          {activeStep !== steps.length ? (
            <>
              <Paper>
                <Stepper activeStep={activeStep} orientation="vertical">
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Paper>
              <div>
                {activeStep !== 0 && <Button onClick={handleBack}>Back</Button>}
                <Button variant="contained" color="secondary" onClick={handleNext}>
                  {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                </Button>
              </div>
            </>
          ) : (
            <h1>Hide Stepper</h1>
          )}
        </Grid>
      </main>
    </>
  );
}
