import { useSearchParams } from "react-router-dom";
import Heading from "../../dist/Heading";
import { useEffect, useState } from "react";
import { getAllFavorites } from "../utils";
import Card from "../components/Card";

const Dashboard = () => {
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    const favorites = getAllFavorites();
    setCoffees(favorites);
  }, []);
  return (
    <>
      <Heading
        title={"Welcome to Dashboard"}
        subtitle={
          "Manage coffee that you have previously added as favorite. You can view or remove them from here"
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {coffees.map((coffee) => (
          <Card key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </>
  );
};

export default Dashboard;
