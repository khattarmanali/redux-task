import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userServices from "../../services/userServices";
const initialState = {
  users: [],
};

console.log("USER", initialState);

export const createShop = createAsyncThunk("/", async (data) => {
  const res = await userServices.create({
    ...data,
  });
  return res.data;
});

const userSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: {
    [createShop.fulfilled]: (state, action) => {
      state.users.push(action.payload);
    },
  },
});
const { reducer } = userSlice;
export default reducer;
