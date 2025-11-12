import { createSlice } from "@reduxjs/toolkit";

export const favouriteSlice = createSlice({
  initialState: {
    favourites: JSON.parse(localStorage.getItem("favourites")) || [],
  },
  name: "favourite", // Used only for redux tools identification
  reducers: {
    addFavourite: (state, action) => {
      state.favourites.push(action.payload);
      localStorage.setItem("favourites", JSON.stringify(state.favourites));
    },
    removeFavourite: (state, action) => {
      state.favourites = state.favourites.filter(
        (item) => item.idMeal != action.payload
      );
      localStorage.setItem("favourites", JSON.stringify(state.favourites));
    },
  },
});

export const { addFavourite, removeFavourite } = favouriteSlice.actions;
export default favouriteSlice.reducer;
