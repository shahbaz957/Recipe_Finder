import { configureStore } from "@reduxjs/toolkit";
import SearchReducer from "./Features/searchSlice";
import favouriteReducer from "./Features/favouriteSlice";
import detailReducer from "./Features/detailSlice";
import recipesReducer from "./Features/recipesSlice";
const store = configureStore({
  reducer: {
    search: SearchReducer,
    favourite: favouriteReducer,
    detail: detailReducer,
    recipes: recipesReducer,
  },
});

export default store;


