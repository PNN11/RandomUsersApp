export const setItemToLocalStorage = (key: string, value: any): void => {
  if (typeof value === "object") {
    localStorage.setItem(key, JSON.stringify(value));
  } else {
    localStorage.setItem(key, value);
  }
};

export const getItemFromLocalStorage = (key: string) => {
  let res = localStorage.getItem(key);
  if (res) {
    return res[0] === "{" || res[0] === "[" ? JSON.parse(res) : res;
  }
  return null;
};
