import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearDetail } from "../Redux/Features/detailSlice";
import { addFavourite } from "../Redux/Features/favouriteSlice";

function RecipeDetail() {
  const data = useSelector((state) => state.detail.data);
  const dispatch = useDispatch();
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = data[`strIngredient${i}`];
    const measure = data[`strMeasure${i}`];
    if (ingredient) {
      ingredients.push({ ingredient, measure });
    }
  }

  return (
    <div className="max-w-5xl mx-auto my-10 p-6 bg-white rounded-3xl shadow-lg">
      <button
        onClick={() => dispatch(clearDetail())}
        className="mb-6 inline-flex items-center gap-2 px-5 py-2.5 bg-pink-500 text-white font-semibold rounded-full shadow-md hover:bg-pink-600 hover:shadow-lg transition-all duration-300"
      >
        ← Go Back
      </button>
      {/* Image and Title */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <img
          src={data.strMealThumb}
          alt={data.strMeal}
          className="w-full md:w-1/3 h-auto rounded-2xl shadow-md object-cover"
        />
        <div className="flex-1">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
            {data.strMeal}
          </h1>
          <h2 className="text-lg text-gray-600 mb-1">
            <span className="font-semibold">Category:</span> {data.strCategory}
          </h2>
          <h3 className="text-lg text-gray-600">
            <span className="font-semibold">Area:</span> {data.strArea}
          </h3>
        </div>
      </div>

      {/* Instructions */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-800">
          Instructions
        </h2>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {data.strInstructions}
        </p>
        {data.strYoutube && (
          <p className="mt-4">
            <a
              href={data.strYoutube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-lg font-medium transition-colors duration-300"
            >
              🎥 Watch on YouTube
            </a>
          </p>
        )}
        <button
          onClick={() => {
            dispatch(addFavourite(data)),
              alert(`${data.strMeal} added to favourites!`);
          }}
          className="ml-2 inline-block mt-2 text-white bg-pink-500 hover:bg-pink-600 transition-colors px-4 py-2 rounded-lg text-sm font-medium"
        >
          Add To Favourite
        </button>
      </div>

      {/* Ingredients Table */}
      <div className="mt-10 overflow-x-auto">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Ingredients
        </h2>
        <table className="min-w-full border border-gray-200 rounded-xl overflow-hidden">
          <thead className="bg-pink-100">
            <tr>
              <th className="px-6 py-3 text-left text-gray-700 font-semibold">
                Ingredient
              </th>
              <th className="px-6 py-3 text-left text-gray-700 font-semibold">
                Measure
              </th>
            </tr>
          </thead>
          <tbody>
            {ingredients.map((item, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="px-6 py-3 text-gray-800">{item.ingredient}</td>
                <td className="px-6 py-3 text-gray-800">{item.measure}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecipeDetail;
