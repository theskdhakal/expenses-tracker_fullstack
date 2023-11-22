import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./pages/userState/userSlice";
import transactionReducer from "./pages/transactionState/transactionSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    transactions: transactionReducer,
  },
});

export default store;
