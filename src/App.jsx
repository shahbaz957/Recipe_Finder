import "./App.css";
import SearchBar from "./components/SearchBar";
import RecipesList from "./components/RecipesList";
import FavouriteList from "./components/FavouriteList";
import RecipeDetail from "./components/RecipeDetail";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function App() {
  const dataItem = useSelector((state) => state.detail.data);
  const [showFavourites, setShowFavourites] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [dataItem, showFavourites]);


  const handleFavouritesClick = () => {
    setShowFavourites((prev) => !prev);
  };

  return (
    <div>
      {Object.keys(dataItem).length !== 0 ? (
        <RecipeDetail />
      ) : showFavourites ? (
        <FavouriteList setFavourite={setShowFavourites}/>
      ) : (
        <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-amber-100 flex flex-col items-center px-6 py-12">
          {/* Header */}
          <header className="text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 tracking-tight drop-shadow-sm">
              🍽️ <span className="text-pink-600">Recipe Finder</span>
            </h1>
            <p className="text-gray-600 mt-3 text-lg">
              Discover tasty meals from around the world 🌍
            </p>
          </header>

          {/* Favourite Button */}
          <button
            onClick={handleFavouritesClick}
            className="mt-6 px-6 py-2 bg-pink-500 text-white font-semibold rounded-full shadow-md hover:bg-pink-600 transition-all duration-300"
          >
            {showFavourites ? "Back to Recipes" : "See All Favourites"}
          </button>

          {/* Search Bar */}
          <div className="w-full max-w-2xl mt-10">
            <SearchBar />
          </div>

          {/* Recipes List */}
          <div className="w-full max-w-6xl mt-14">
            <RecipesList />
          </div>

          {/* Footer */}
          <footer className="mt-20 text-gray-500 text-sm text-center">
            <p>
              Made with ❤️ by{" "}
              <span className="font-semibold text-gray-700 hover:text-pink-600 transition-colors duration-300">
                MSB GROUPS
              </span>
            </p>
          </footer>
        </div>
      )}
    </div>
  );
}

export default App;
