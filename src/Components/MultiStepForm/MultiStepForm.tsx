import { useState } from 'react';
import { Grid } from '@material-ui/core';
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
        <Grid container direction="row" spacing={6} style={{ justifyContent: 'center' }}></Grid>
      </main>
    </>
  );
}
