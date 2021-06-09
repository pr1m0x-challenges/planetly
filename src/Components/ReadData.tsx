import { useEffect, FC, ReactElement } from 'react';
import { requestData } from '../services/api/requestApiData';

export const ReadData: FC = (): ReactElement => {
  useEffect(() => {
    const getData = async () => {
      await requestData();
    };
    getData();
  }, []);

  return <div></div>;
};
