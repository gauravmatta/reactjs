import API from "../../utils/api";

export const registerUser = async (userData) => {
  try {
    const response = await API.post("/users", userData);
    console.log('Response from registerUser:', response.data.token);
    return response.data.token;
  } catch (error) {
    const res = error.response;
    return { data: res.data.errors, status: "fail" }
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