import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Load previously saved recipes from localStorage
const savedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];

export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async (query) => {
    const res = await fetch(
      `https://themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    const data = await res.json();
    return data.meals || [];
  }
);

export const recipesSlice = createSlice({
  name: "recipes",
  initialState: {
    data: savedRecipes,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRecipes.fulfilled, (state, action) => {
      state.data = action.payload;

      localStorage.setItem("recipes", JSON.stringify(state.data));
    });
  },
});

export default recipesSlice.reducer;
