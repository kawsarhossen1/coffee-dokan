import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import { useState } from "react";
import sortBy from "sort-by";

const Coffees = () => {

  
  const data = useLoaderData();
  const [coffees, setCoffees] = useState(data);

  const handleSort = (sortBy) => {
    if (sortBy == "popularity") {
      const sorted = [...data].sort((a, b) => b.popularity - a.popularity);
      setCoffees(sorted);
    } else if (sortBy == "rating") {
      const sorted = [...data].sort((a, b) => a.rating - b.rating);
      setCoffees(sorted);
    }
  };

  return (
    <>
      <div
        className="flex
    justify-between items-center"
      >
        <div>
          <h1 className="text-3xl font-bold hidden sm:block">
            Sort Coffee&apos;s by Popularity & Rating-&gt;{" "}
          </h1>
        </div>
        <div className="space-x-4">
          <button
            onClick={() => handleSort("popularity")}
            className="btn btn-warning text-black"
          >
            Short by Popularity
          </button>
          <button
            onClick={() => handleSort("rating")}
            className="btn btn-warning text-black"
          >
            Short by Rating
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {coffees.map((coffee) => (
          <Card key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </>
  );
};

export default Coffees;
