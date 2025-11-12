import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../Redux/Features/searchSlice";
import { fetchRecipes } from "../Redux/Features/recipesSlice";

function SearchBar() {
  const query = useSelector((state) => state.search.query);
  const [input, setInput] = useState(query || "");
  const dispatch = useDispatch();

  const handleInput = (e) => {
    e.preventDefault(); // stopping from event bubbling up
    if (input.trim() !== "") {
      dispatch(fetchRecipes(input));
      dispatch(setQuery(input));
      setInput("");
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <form
        onSubmit={handleInput}
        className="flex w-full max-w-2xl items-center gap-3 bg-white shadow-xl rounded-3xl p-2 border border-gray-200 transition-all duration-300 focus-within:shadow-2xl"
      >
        <input
          type="text"
          required
          placeholder="🍳 Search recipes by ingredient..."
          className="flex-1 px-5 py-3 text-gray-700 placeholder-gray-400 text-lg bg-transparent focus:outline-none"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold px-6 py-3 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 active:scale-95"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
