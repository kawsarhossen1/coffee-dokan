import toast from "react-hot-toast";

// get all coffees from local storage
const getAllFavorites = () => {
  const all = localStorage.getItem("favorites");

  if (all) {
    const favorites = JSON.parse(all);
    return favorites;
  } else {
    return [];
  }
};
// add a coffee to local storage
const addFavorite = (coffee) => {
  const favorites = getAllFavorites();
  const isExist = favorites.find(item => item.id == coffee.id)
  if(isExist) return toast.error('Coffee Already Exists!');
  favorites.push(coffee);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  toast.success('Successfully Added!');
};

// remove a coffee from local storage
const removeFavorite = id =>{
  const favorites = getAllFavorites();
  const remaining=favorites.filter(coffee => coffee.id != id)
  localStorage.setItem("favorites", JSON.stringify(remaining));
  toast.success('Successfully Removed!');
}

export { addFavorite, getAllFavorites, removeFavorite };
