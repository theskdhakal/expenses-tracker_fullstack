import { toast } from "react-toastify";
import { loginUser } from "../../helpers/axiosHelper";
import { setUser } from "./userSlice";

export const loginAction = (obj) => async (dispatch) => {
  // first call axios and get data from server

  const { status, message, user } = await loginUser(obj);
  toast[status](message);

  if (status === "success") {
    sessionStorage.setItem("user", JSON.stringify(user));
    dispatch(setUser(user));
  }

  //dispatch the incoming data to the slice
};

export const userLogoutAction = () => (dispatch) => {
  dispatch(setUser({}));
  sessionStorage.removeItem("user");
};
