export interface IProps {
  pageStep: number;
  formData: IFormDataIndex;
  setFormData?: Function;
  handleChange?: Function;
  errorHandler: ErrorHandler;
}

export interface ErrorHandler {
  errors: {
    mwh?: string;
    location?: string;
    date?: string;
  };
  setErrors: Function;
}
export interface IFormData {
  mwh?: string;
}

export interface IFormDataIndex {
  [key: number]: {
    [key: string]: Date | number | string;
  };
}

export interface IFormDataRequest {
  [key: string]: {
    location: string;
    mwh: string;
    date: Date;
  };
}
export interface IErrorObject {
  [key: string]: string;
}

export interface CarbonResponse {
  data: {
    data: {
      id: string;
      type: string;
      attributes: CarbonResponseAttributes;
    };
  };
}

export interface CarbonResponseAttributes {
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

export interface IResponseObject {
  carbon_kg: number;
  country: string;
  date: Date;
}
