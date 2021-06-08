import { FC, ReactElement } from 'react';
import { Typography, Grid } from '@material-ui/core';
import { IProps } from '../../interfaces/interfaces';

export const FormStepPage: FC<IProps> = (props): ReactElement => {
  const { pageStep, formData } = props;

  return (
    <>
      <Typography color="secondary" variant="body1" gutterBottom style={{ fontWeight: 'bold', marginBottom: '35px' }}>
        Weekly Report - Day {pageStep + 1}
      </Typography>
      <Grid container spacing={4}>
        <Grid item>
          <Typography style={{ color: 'white' }} variant="h4" gutterBottom>
            Weekly Report - Day
            <input type="text" />
            Weekly Report
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
