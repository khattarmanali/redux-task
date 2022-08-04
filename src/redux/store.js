import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";

const reducer = {
  users: userSlice,
};
const store = configureStore({
  reducer: reducer,
  devTools: true,
});
export default store;
