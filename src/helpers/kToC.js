export const useConvertKtoC = (temp) => {
  return (temp = temp - 273.15).toFixed();
};
