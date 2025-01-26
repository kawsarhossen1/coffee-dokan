import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import nutritionImg from "../assets/nutrition.png";
import { addFavorite, getAllFavorites } from "../utils";



const CoffeeDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [coffee, setCoffee] = useState({});
  const [isFavorite, setIsFavorite] = useState(false)


  useEffect(() => {
    const singleData = data.find((coffee) => coffee.id == id);
    setCoffee(singleData);
    const favorites = getAllFavorites();
    
    const isExist = favorites.find(item => item.id == singleData.id)
    if(isExist){
      setIsFavorite(true)
    }

  }, [data, id]);

  const {
    name,
    image,
    description,
    ingredients,
    making_process,
    rating,
    popularity,
  } = coffee;

  const handleFavorite=(coffee) => {
    addFavorite(coffee)
    setIsFavorite(true)
  }

  return (
    <>
      <div>
        <p className="text-3xl text-center mb-4">{description}</p>
        <img className="w-full h-full rounded-md" src={image} alt="" />
      </div>
      <div className="flex justify-between items-center my-6">
        <div className="space-y-2">
          <h1 className="text-2xl md:text-3xl font-bold">{name}</h1>
          <p className="text-base">Popularity: {popularity}</p>
          <p className="text-base">Rating: {rating}</p>
        </div>
        <div>
          <button disabled={isFavorite}
          onClick={() => handleFavorite(coffee)} className="btn btn-warning font-bold ">Add Favorite</button>
        </div>
      </div>
      <div className="my-6">
        <h2 className="text-base"><strong>Marking Process:</strong> {making_process}</h2>
      </div>
      {/* <div className="my-6 flex justify-between items-center">
        <div className="flex-1">
          <div className="flex flex-col justify-center gap-6">
            <h1 className="text-2xl font-thin">Ingredients:</h1>
            <ul className="text-xl ml-12">
              {ingredients.map((i) => (
                <li className="list-disc" key={{ i }}>
                  {i}
                </li>
              ))}
            </ul>
            <h1 className="text-2xl font-thin">Nutrition:</h1>
            <ul className="text-xl ml-12">
              {nutrition_info &&
                Object.keys(nutrition_info).map((n, i) => (
                  <li className="list-disc" keys={i}>
                    {n}: {nutrition_info[n]}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div> */}
      <div className="flex gap-4">
        {ingredients}
      </div>
     
      <div className="flex-1">
        <img src={nutritionImg} alt="" />
      </div>
    </>
  );
};

export default CoffeeDetails;
