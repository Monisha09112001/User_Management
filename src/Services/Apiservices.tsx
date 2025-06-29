import { baseURL } from "./ServiceConstants";

export const loginService = async (data: {
  email: string;
  password: string;
}) => {
  const response = await fetch(`${baseURL}login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "reqres-free-v1",
    },
    body: JSON.stringify(data),
  });

  return response.json();
};

export const userListService = async (page: number, data: any) => {
  const response = await fetch(`${baseURL}users?page=${page}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "reqres-free-v1",
    },
  });

  return response.json();
};

export const CreateUserService = async (data: any) => {
  const response = await fetch(`${baseURL}users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "reqres-free-v1",
    },
    body: JSON.stringify(data),
  });

  return response.json();
};

export const UpdateUserService = async (data: any, UserID: any) => {
  const response = await fetch(`${baseURL}users/${UserID}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "reqres-free-v1",
    },
    body: JSON.stringify(data),
  });

  return response.json();
};

export const DeleteUserService = async (UserID: any) => {
  const response = await fetch(`${baseURL}users/${UserID}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "reqres-free-v1",
    },
  });

  return response.json();
};
