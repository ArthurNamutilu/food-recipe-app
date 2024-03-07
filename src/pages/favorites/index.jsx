import { useContext } from "react";
import RecipeItem from "../../components/recipe-item";
import { GlobalContext } from "../../context";

const Favorites = () => {
  const { loading, favoritesList } = useContext(GlobalContext);

  if (loading) return <div>Loading... Please wait</div>;

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favoritesList && favoritesList.length > 0 ? (
        favoritesList.map((item) => <RecipeItem item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold ">
            Nothing item in favorite list
          </p>
        </div>
      )}
    </div>
  );
};

export default Favorites;
