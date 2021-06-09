import { FC, ReactElement } from 'react';
import { Paper, Typography, Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PolarChartTwo from '../Charts/PolarChartTwo';

const useStyles = makeStyles((theme) => ({
  paper: {
    boxShadow: 'none',
    borderRadius: '1rem',
  },
  boxSpacing: {
    padding: theme.spacing(6),
  },
}));

export const FormSuccessPage: FC<any> = ({ data }): ReactElement => {
  const classes = useStyles();

  if (data.length === 0) {
    return <></>;
  }

  return (
    <div>
      <Grid container spacing={4}>
        <Grid item>
          <Paper className={classes.paper}>
            <Box flexDirection="column">
              <Box className={classes.boxSpacing}>
                <Typography color="primary" style={{ fontWeight: 'lighter' }} variant="h4" gutterBottom>
                  Analysis results
                </Typography>
                <Typography style={{ fontWeight: 'bold' }} color="primary" variant="h5" gutterBottom>
                  Weekly Emission Breakdown
                </Typography>
                <Typography color="primary" style={{ fontWeight: 'lighter' }} variant="body1" gutterBottom>
                  You have a total weekly emissions of <strong>105 kg</strong> CO 2. In see chart below you can see
                  graphical presention.
                </Typography>
                <Box marginTop={5}>
                  <PolarChartTwo data={data} />
                </Box>
              </Box>
              <Box style={{ backgroundColor: '#f5f7fa' }} marginTop={5}>
                <Box className={classes.boxSpacing}>
                  <Typography color="primary" variant="h5" gutterBottom>
                    Weekly Emission Breakdown
                  </Typography>
                  <Typography color="primary" style={{ fontWeight: 'lighter' }} variant="body1" gutterBottom>
                    Here you can see what your total yearly emissions of <strong>105 kg</strong> CO 2 consist of. Scroll
                    down to see more details.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item>
          <Typography style={{ color: 'white' }} variant="h5">
            Thanks for the challenge!
          </Typography>
          <Typography style={{ color: 'white' }} variant="body1" gutterBottom>
            More about me you can find here:{' '}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};
