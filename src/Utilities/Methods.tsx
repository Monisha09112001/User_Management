//  Set item in localStorage
export const setLocalStorageData = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
};

//  Get item from localStorage
export const getLocalStorageData = (key: string) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

//  Remove item from localStorage
export const removeLocalStorageData = (key: string) => {
  localStorage.removeItem(key);
};

//  Clear all localStorage data
export const clearLocalStorage = () => {
  localStorage.clear();
};


export const UseToken = () => {
  const data = localStorage.getItem("token");
  const {token}= data ? JSON.parse(data) : {token:null};
  return token
}
