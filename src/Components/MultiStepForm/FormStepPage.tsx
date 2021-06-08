import { FC, ReactElement } from 'react';
import Typography from '@material-ui/core/Typography';

interface IProps {
  pageStep: number;
}

export const FormStepPage: FC<IProps> = (props): ReactElement => {
  const { pageStep } = props;

  return (
    <>
      <Typography color="secondary" variant="body1" gutterBottom style={{ fontWeight: 'bold', marginBottom: '35px' }}>
        Weekly Report - Day {pageStep + 1}
      </Typography>
    </>
  );
};
