import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  admins: [],
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setAdmins: (state, action) => {
      state.admins = action.payload;
    },
    addAdmin: (state, action) => {
      state.admins.push(action.payload);
    },
  },
});

export const { setAdmins, addAdmin } = adminSlice.actions;
export default adminSlice.reducer;
