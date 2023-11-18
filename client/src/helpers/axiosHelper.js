import axios from "axios";

const rootUrl = "http://localhost:8000";
const userEP = rootUrl + "/api/v1/user";
const transactionEP = rootUrl + "/api/v1/transaction";

// #####user api
export const postNewUser = async (obj) => {
  try {
    const response = await axios.post(userEP, obj);

    console.log(response);

    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const loginUser = async (obj) => {
  try {
    const response = await axios.post(userEP + "/login", obj);

    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

////transaction api
export const postTransaction = async (obj) => {
  try {
    const response = await axios.post(transactionEP, obj);

    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
