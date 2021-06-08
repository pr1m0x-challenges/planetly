import { FC, ReactElement } from 'react';

interface IProps {
  step: number;
}

export const FormStepPage: FC<IProps> = (props): ReactElement => {
  const { step } = props;

  return <div>Page{step}</div>;
};
