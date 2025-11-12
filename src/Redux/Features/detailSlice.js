import { createSlice } from "@reduxjs/toolkit";

const savedDetail = JSON.parse(localStorage.getItem("detail")) || {};

export const DetailSlice = createSlice({
  name: "Details",
  initialState: {
    data: savedDetail,
  },
  reducers: {
    addDetail: (state, action) => {
      state.data = action.payload;
      localStorage.setItem("detail", JSON.stringify(state.data));
    },
    clearDetail: (state) => {
      state.data = {};
      localStorage.removeItem("detail");
    },
  },
});

export const { addDetail, clearDetail } = DetailSlice.actions;
export default DetailSlice.reducer;
