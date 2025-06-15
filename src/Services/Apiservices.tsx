import { baseURL } from "./ServiceConstants";

export const loginService = async (data: {
  email: string;
  password: string;
}) => {
  const response = await fetch(`${baseURL}/api/login`, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  console.log(response, "resp");

  return response;
};

export const userListService = async (page: { page: number }) => {
  const response = await fetch(`${baseURL}/api/users?page=${page}`, {
    method: "GET",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(page),
  });
  console.log(response, "resp");

  return response;
};
