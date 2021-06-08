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

export const RequestData: Function = async (formData: IFormData): Promise<any> => {
  try {
    return new Promise(async (resolve, reject) => {
      try {
        const keys = Object.keys(formData);
        const allData = await Promise.all(
          keys.map((key) => {
            return new Promise(async (resolve, reject) => {
              try {
                const res = await axios.get('https://randomuser.me/api/');
                resolve(res);
              } catch (err) {
                console.log(err);
              }
            });
          })
        );

        resolve(allData);
      } catch (err) {
        console.log(err);
      }
    });
  } catch (err) {
    console.log(err);
  }
};
