export const NumberInputValidation: Function = (value: string, key: KeyboardEvent): string => {
  const maxNumberLength = 4;
  let inputString = value || '';

  var charCode = key.which;

  if (charCode === 8) {
    return inputString.slice(0, -1);
  }

  if (inputString.length === maxNumberLength) return inputString;

  if (charCode >= 48 && charCode <= 58) {
    return inputString + key.key;
  }

  if (charCode === 190) {
    if (!inputString) return inputString;
    if (inputString.includes('.')) return inputString;
    if (inputString.length === maxNumberLength - 1) return inputString;
    return inputString + key.key;
  }

  return inputString;
};
