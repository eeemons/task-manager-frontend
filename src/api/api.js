import axios from "axios";

const server = import.meta.env.VITE_API_WEB_SERVER;

export const Welcome = async () => {
  const response = await axios.get(`${server}`, {});
  return response;
};

export const LoginReq = async (data) => {
  const response = await axios.post(`${server}/users/login`, data);
  return response;
};

export const SignUpReq = async (data) => {
  const response = await axios.post(`${server}/users/signup`, data);
  return response;
};

export const PostTask = async (data) => {
  const bearerToken = sessionStorage.getItem("token");
  const response = await axios.post(`${server}/tasks`, data, {
    headers: {
      token: bearerToken,
    },
  });
  return response;
};
export const GetTask = async () => {
  const bearerToken = sessionStorage.getItem("token");
  const response = await axios.get(`${server}/tasks`, {
    headers: { token: bearerToken },
  });
  return response;
};
