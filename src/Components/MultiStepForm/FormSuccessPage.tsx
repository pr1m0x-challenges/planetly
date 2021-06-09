import { FC, ReactElement, useState, useEffect } from 'react';
import { Paper, Typography, Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PolarChart from '../Charts/PolarChart';
import { createGraphData } from '../../services/helpers/createGraphData';

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
  const [weeklyEmissons, setWeeklyEmissons] = useState<number>(0);
  const [labels, setLabels] = useState<any>([]);
  const [series, setSeries] = useState<any>([]);

  const [render, setRender] = useState<boolean>(false);

  useEffect(() => {
    if (data) {
      const getData = async () => {
        const res: any = await createGraphData(data);
        setSeries(res.series);
        setLabels(res.labels);

        if (res) {
          setWeeklyEmissons(
            res.series.reduce((acc: number, t: number) => {
              return acc + t;
            }, 0)
          );
          setRender(true);
        }
      };
      getData();
    }
  }, []);

  if (!render) {
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
                <Typography color="primary" variant="body1" gutterBottom>
                  Here you can see what your total weekly emissions of <strong>{weeklyEmissons} kg</strong> CO 2. Find
                  more insights in the chart below.
                </Typography>
                <Box marginTop={5}>
                  <PolarChart data={data} labels={labels} series={series} setWeeklyEmissons={setWeeklyEmissons} />
                </Box>
              </Box>
              <Box style={{ backgroundColor: '#f5f7fa' }} marginTop={5}>
                <Box className={classes.boxSpacing}>
                  <Typography
                    style={{ fontWeight: 'bold', textAlign: 'center' }}
                    color="primary"
                    variant="h5"
                    gutterBottom
                  >
                    Carbon Management Made Simple
                  </Typography>
                  <img
                    src="./planetly.svg"
                    alt="Planetly"
                    style={{ width: '100px', display: 'flex', marginTop: '35px', margin: '0 auto' }}
                  />
                </Box>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
