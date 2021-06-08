export interface IProps {
  pageStep: number;
  formData: IFormDataIndex;
  setFormData?: Function;
  handleChange?: Function;
}

export interface IFormData {
  mwh?: string;
}

export interface IFormDataIndex {
  [key: number]: {
    [key: string]: string;
  };
}
