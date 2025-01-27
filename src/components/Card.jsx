import { Link, useLocation } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const Card = ({ coffee, handleRemove }) => {
  const { pathname } = useLocation();

  const { name, image, category, origin, type, id, rating, popularity } =
    coffee || {};
  return (
    <div className="flex relative">
      <Link
        to={`/coffee/${id}`}
        className="transition hover:scale-105 shadow-xl rounded-md border border-gray-200 overflow-hidden p-4 "
      >
        <figure className="w-full  rounded-md h-48 overflow-hidden">
          <img src={image} alt="" />
        </figure>
        <div className="space-y-2 mt-4">
          <h1 className="text-xl">Name: {name}</h1>
          <p>Category: {category}</p>
          <p>Type: {type}</p>
          <p>Origin: {origin}</p>
          <p>Rating: {rating}</p>
          <p>Popular: {popularity}</p>
        </div>
      </Link>

      {pathname === "/dashboard" && (
        <div onClick={() => handleRemove(id)} className="absolute p-2 rounded-full cursor-pointer bg-warning -top-5 -right-5">
          <FaTrash size={15} />
        </div>
      )}
    </div>
  );
};

export default Card;
