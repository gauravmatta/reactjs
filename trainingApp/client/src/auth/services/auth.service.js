import API from "../../utils/api";

export const registerUser = async (userData) => {
  try {
    const response = await API.post("/users", userData);
    console.log('Response from registerUser:', response.data.token);
    return response.data.token;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await API.post("/auth", credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};