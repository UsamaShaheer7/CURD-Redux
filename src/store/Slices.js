import { createSlice } from "@reduxjs/toolkit";
const initialState = { newCustomer: [] };
const Slices = createSlice({
  name: "Customer",
  initialState: initialState,
  reducers: {
    setNewCustomer: (state, action) => {
      state.newCustomer = action.payload;
    },
  },
});

export const { setNewCustomer } = Slices.actions;
export default Slices.reducer;
