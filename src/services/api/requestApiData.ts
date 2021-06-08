import axios from 'axios';

interface IFormData {
  [key: string]: {
    location: string;
    mwh: string;
    date: Date;
  };
}

interface CarbonResponse {
  data: {
    id: string;
    type: string;
    attributes: CarbonResponseAttributes;
  };
}

interface CarbonResponseAttributes {
  country: string;
  state: string;
  electricity_unit: string;
  electricity_value: number;
  estimated_at: string;
  carbon_g: number;
  carbon_lb: number;
  carbon_kg: number;
  carbon_mt: number;
  date?: Date;
}

export const requestData: Function = async (formData: IFormData): Promise<any> => {
  const token = process.env.REACT_APP_API_KEY;
  const url = '!!https://www.carboninterface.com/api/v1/estimates!!';
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const bodyParameters = {
    type: 'electricity',
    electricity_unit: 'mwh',
    electricity_value: '18',
    country: 'us',
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
