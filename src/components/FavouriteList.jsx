import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addDetail } from "../Redux/Features/detailSlice";
import { removeFavourite } from "../Redux/Features/favouriteSlice";

function FavouriteList({ setFavourite }) {
  const favourites = useSelector((state) => state.favourite.favourites);
  const dispatch = useDispatch();

  const handleClick = (item) => {
    dispatch(addDetail(item));
  };
  const handleFav = () => {
    setFavourite(false);
  };

  if (favourites.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 text-xl font-medium">
        <button
          onClick={handleFav}
          className="mb-6 inline-flex items-center gap-2 px-5 py-2.5 bg-pink-500 text-white font-semibold rounded-full shadow-md hover:bg-pink-600 hover:shadow-lg transition-all duration-300"
        >
          ← Go Back
        </button>
        No favourites added yet ❤️
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 py-10 bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50">
      <button
        onClick={handleFav}
        className="mb-6 inline-flex items-center gap-2 px-5 py-2.5 bg-pink-500 text-white font-semibold rounded-full shadow-md hover:bg-pink-600 hover:shadow-lg transition-all duration-300"
      >
        ← Go Back
      </button>
      <h1 className="text-4xl font-extrabold text-gray-800 mb-10 text-center">
        🌟 My Favourites
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {favourites.map((item) => (
          <div
            key={item.idMeal}
            className="bg-white rounded-3xl shadow-md overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
          >
            <img
              src={item.strMealThumb}
              alt={item.strMeal}
              className="w-full h-56 object-cover"
              onClick={() => handleClick(item)}
            />
            <div className="p-5 flex flex-col">
              <h2
                className="text-xl font-semibold text-gray-800 mb-1 hover:text-pink-500 transition-colors cursor-pointer"
                onClick={() => handleClick(item)}
              >
                {item.strMeal}
              </h2>
              <h3 className="text-sm text-pink-500 font-medium mb-3">
                {item.strCategory}
              </h3>

              <div className="flex flex-wrap gap-2 mt-auto">
                <a
                  href={item.strYoutube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-white bg-pink-500 hover:bg-pink-600 transition-colors px-4 py-2 rounded-xl text-sm font-medium"
                >
                  🎥 Watch
                </a>

                <button
                  onClick={() => dispatch(removeFavourite(item.idMeal))}
                  className="inline-block text-white bg-gray-400 hover:bg-gray-500 transition-colors px-4 py-2 rounded-xl text-sm font-medium"
                >
                  ❌ Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavouriteList;
