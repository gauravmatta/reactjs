import API from "../../utils/api";

export const registerUser = async (userData) => {
  try {
    const response = await API.post("/api/users", userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};