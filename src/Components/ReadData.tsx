import { useEffect, FC, ReactElement } from 'react';
import { requestData } from '../services/api/requestApiData';

export const ReadData: FC = (): ReactElement => {
  useEffect(() => {
    const getData = async () => {
      const res = await requestData();
      console.log(res);
    };
    getData();
  }, []);

  return <div></div>;
};
