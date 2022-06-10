const hasPrefix = (action: any, prefix: string) =>
  action.type.startsWith(prefix);
const isPending = (action: any) => action.type.endsWith("/pending");
const isFulfilled = (action: any) => action.type.endsWith("/fulfilled");
const isRejected = (action: any) => action.type.endsWith("/rejected");

export const isPendingAction = (prefix: string) => (action: any) => {
  return hasPrefix(action, prefix) && isPending(action);
};

export const isRejectedAction = (prefix: string) => (action: any) => {
  return hasPrefix(action, prefix) && isRejected(action);
};

export const isFulfilledAction = (prefix: string) => (action: any) => {
  return hasPrefix(action, prefix) && isFulfilled(action);
};

export const numberWithCommas = (x: number) => {
  return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const removeCommasInNumber = (x: string) => {
  return x.replaceAll(",", "");
};

export const roundUsing = (func, number, prec) => {
  let tempnumber = number * 10 ** prec;
  tempnumber = func(tempnumber);
  return tempnumber / 10 ** prec;
};

export const createFile = async (url) => {
  const response = await fetch(url);
  const data = await response.blob();
  const file = await data.arrayBuffer();
  return new Uint8Array(file);
};

export const formatAddress = (address, first = 2, last = -5) => {
  return address && `${address?.slice(0, first)}...${address.slice(last)}`;
};
