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
  console.log(response, "resp");

  return response.json();
};

export const userListService = async (page: { page: number }) => {
  const response = await fetch(`${baseURL}users?page=${page}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "reqres-free-v1",
    },
  });
  console.log(response, "resp");

  return response.json();
};

export const CreateUserService = async (data: any) => {
 
 console.log(data,"data");
 
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

export const UpdateUserService = async (data:any,UserID: any) => {
 console.log(UserID,"UserID");
 
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
