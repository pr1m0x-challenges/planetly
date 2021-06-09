import axios from 'axios';
import { IFormDataRequest, CarbonResponse } from '../../interfaces/interfaces';

export const requestData: Function = async (formData: IFormDataRequest): Promise<any> => {
  const token = process.env.REACT_APP_API_KEY;
  const url = 'https://www.carboninterface.com/api/v1/estimates';
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  try {
    return new Promise(async (resolve, reject) => {
      const keys = Object.keys(formData);

      const dataContainer = Promise.all(
        keys.map((key) => {
          return new Promise(async (resolve, reject) => {
            try {
              const bodyParameters = {
                type: 'electricity',
                electricity_unit: 'mwh',
                electricity_value: formData[key].mwh,
                country: formData[key].location,
              };

              const res: CarbonResponse = await axios.post(url, bodyParameters, config);
              res.data.data.attributes.date = formData[key].date;

              const { carbon_kg, country, date } = res.data.data.attributes;
              resolve({ carbon_kg, country, date });
            } catch (err) {
              console.log(err);
            }
          });
        })
      );
      resolve(dataContainer);
    });
  } catch (err) {
    console.log(err);
  }
};
