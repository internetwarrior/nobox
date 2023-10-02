import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  visible: false,
  price: 0,
};

const cartSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {},
});

export const {} = cartSlice.actions;
export default cartSlice.reducer;
