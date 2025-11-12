import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDetail } from "../Redux/Features/detailSlice";
import { addFavourite } from "../Redux/Features/favouriteSlice";

function RecipesList() {
  const data = useSelector((state) => state.recipes.data);
  const dispatch = useDispatch();
  const handleClick = (item) => {
    dispatch(addDetail(item));
  };

  return (
    <div className="mt-8">
      {data.length === 0 ? (
        <p className="text-center text-gray-500 text-lg mt-10">
          😕 No recipes found. Try searching for something delicious!
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {data.map((item) => (
              <div
                key={item.idMeal}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                
              >
                <img
                  src={item.strMealThumb}
                  alt={item.strMeal}
                  className="w-full h-56 object-cover"
                  onClick={() => handleClick(item)}
                />
                <div className="p-5">
                  <h2 className="text-xl font-semibold text-gray-800 mb-1"
                  onClick={() => handleClick(item)}>
                    {item.strMeal}
                  </h2>
                  <h3 className="text-sm text-pink-500 font-medium mb-3">
                    {item.strCategory}
                  </h3>

                  <a
                    href={item.strYoutube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-white bg-pink-500 hover:bg-pink-600 transition-colors px-4 py-2 rounded-lg text-sm font-medium"
                  >
                    🎥 Watch on YouTube
                  </a>

                  <button
                    onClick={() => {dispatch(addFavourite(item)) , alert(`${item.strMeal} added to favourites!`)}}
                    className="ml-2 inline-block mt-2 text-white bg-pink-500 hover:bg-pink-600 transition-colors px-4 py-2 rounded-lg text-sm font-medium"
                  >
                    Add To Favourite
                  </button>
                </div>
              </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RecipesList;
