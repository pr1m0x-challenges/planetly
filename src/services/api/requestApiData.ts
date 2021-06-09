import axios from 'axios';
import { IFormDataRequest, CarbonResponse } from '../../interfaces/interfaces';

export const requestData: Function = async (formData: IFormDataRequest): Promise<any> => {
  const { mwh, location } = formData;
  const token = process.env.REACT_APP_API_KEY;
  const url = '!!https://www.carboninterface.com/api/v1/estimates!!';
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const bodyParameters = {
    type: 'electricity',
    electricity_unit: 'mwh',
    electricity_value: mwh,
    country: location,
  };

  try {
    return new Promise(async (resolve, reject) => {
      // const keys = Object.keys(formData);

      const keys = [1];
      const allData = Promise.all(
        keys.map((key) => {
          return new Promise(async (resolve, reject) => {
            try {
              const res: CarbonResponse = await axios.post(url, bodyParameters, config);
              res.data.attributes.date = formData[key].date;
              resolve(res);
            } catch (err) {
              console.log(err);
            }
          });
        })
      );

      resolve(allData);
    });
  } catch (err) {
    console.log(err);
  }
};
