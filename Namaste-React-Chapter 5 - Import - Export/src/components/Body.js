import { restaurantList } from "../constants";
import RestaurantCard from "./restaurantCard";

const Body = () => {
  const searchText = "KFC"
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
        onChange={(e)=>console.log(e.target.value)}

        />
        <button className="search-btn">Search</button>
      </div>
      <div className="restaurant-List">
        {restaurantList.map((restaurant, index) => {
          return (
            <RestaurantCard
              {...restaurant.data.data}
              key={restaurant.data.data.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default Body;
