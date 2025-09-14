import API from "../../utils/api";

export const loginUser = async (credentials) => {
  try {
    console.log('loginUser called with credentials:', credentials);
    const response = await API.post("/auth", credentials);
    console.log('Response from loginUser:', response.data.token);
    return response.data.token;
  } catch (error) {
    const res = error.response;
    console.log('Error response from loginUser:', JSON.stringify(res));
    throw { data: res.data.errors, status: "fail" }
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await API.post("/users", userData);
    console.log('Response from registerUser:', response.data.token);
    return response.data.token;
  } catch (error) {
    const res = error.response;
    console.log('Error response from registerUser:', JSON.stringify(res));
    throw { data: res.data.errors, status: "fail" }
  }
};

export const loadUser = async () => {
  try {
    const response = await API.get("/auth");
    console.log('Response from loadUser:', response.data);
    return response.data;
  } catch (error) {
    const response = error.response;
    throw res;
  }
};