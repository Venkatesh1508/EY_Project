import { useEffect, useState } from "react";
import { fetchRestaurants } from "../services/api";

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const getRestaurants = async () => {
      const { data } = await fetchRestaurants();
      setRestaurants(data);
    };
    getRestaurants();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4">Restaurants</h2>
      {restaurants.map((restaurant) => (
        <div key={restaurant._id} className="p-4 mb-4 border">
          <h3 className="text-xl">{restaurant.name}</h3>
          <p>{restaurant.address}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
