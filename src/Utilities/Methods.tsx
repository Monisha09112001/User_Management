export const storeLoginData = (data: any) => {
  localStorage.setItem("token", JSON.stringify(data));
};

export const UseToken = () => {
  const data = localStorage.getItem("token");
  const {token}= data ? JSON.parse(data) : {token:null};
  return token
}
