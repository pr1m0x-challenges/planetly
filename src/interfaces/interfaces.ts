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
    [key: string]: string;
  };
}

export interface IErrorObject {
  [key: string]: string;
}
