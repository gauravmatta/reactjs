import API from "../../utils/api";

export const deleteExpById = async (id) => {
  try {
    console.log("id value from ", id);
    const response = await API.delete(`/profile/experience/${id}`);
    console.log("response obj from detele ", response.data);
    return response.data;
  } catch (error) {
    console.error("inside the service ", error.response);
    console.log(error.response.statusText);
    console.log(error.response.status);
    const errorObject = {
      msg: error.response.statusText,
      status: error.response.status,
    };
    throw errorObject;
  }
};

export const getCurrentUserProfile = async () => {
    try {
        console.log('Calling getCurrentUserProfile API');
        const response = await API.get("/profile/me");
        return response.data;
    } catch (error) {
        console.error('Error response from getProfile:', JSON.stringify(error.response));
        console.log('Error details:', error.response.statusText);
        console.log('Error status code:', error.response.status);
        const resp = error.response;
        const errorObject = {
            msg: error.response.statusText,
            status: resp?.status
        };
        throw errorObject;
    }
}

export const createOrUpdateProfile = async (formData) => {
    try {
        const response = await API.post("/profile", formData);
        return response.data;
    } catch (error) {
        const errorObject = {
            statusText: resp?.statusText ?? "Network Error",
            status: resp?.status ?? 0,
            errors: resp?.data?.errors ?? null,
            message: resp?.data?.msg ?? error?.message ?? "Unknown Error"
        };
        throw errorObject;
    }
}

export const addEducation = async (formData) => {
    try {
        const response = await API.put("/profile/education", formData);
        return response.data;
    } catch (error) {
        const resp = error.response;
        const errorObject = {
            statusText: resp?.statusText ?? "Network Error",
            status: resp?.status ?? 0,
            errors: resp?.data?.errors ?? null,
            message: resp?.data?.msg ?? error?.message ?? "Unknown Error"
        };
        throw errorObject;
    }
}

export const addExperience = async (formData) => {
    try {
        const response = await API.put("/profile/experience", formData);
        return response.data;
    } catch (error) {
        const resp = error.response;
        const errorObject = {
            statusText: resp?.statusText ?? "Network Error",
            status: resp?.status ?? 0,
            errors: resp?.data?.errors ?? null,
            message: resp?.data?.msg ?? error?.message ?? "Unknown Error"
        };
        throw errorObject;
    }
}