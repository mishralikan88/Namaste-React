import { useState } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./restaurantCard";


function filterData(searchText, restaurants) {
  const filteredData = restaurants.filter((restaurant) =>
    restaurant.data.data.name.includes(searchText)
  );
  return filteredData;
} 

const Body = () => {
  const [restaurants,setRestaurants] = useState(restaurantList)
  // const [searchText,setSearchText] = useState("KFC");
  const searchvar = useState("KFC");
  // Array destructuring
  const [searchText, setSearchText] = searchvar;
  // const [searchClick, setSearchClick] = useState("False");
  // searchClick => when searchClick is changed/updated,on every change, react rerenders the whole body component
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          // e.target.value => whatever we write in input
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            // if (searchClick === "True") {
            //   setSearchClick("False");
            // } else {
            //   setSearchClick("True");
            // }

            // Filter the data
            const filteredData = filterData(searchText,restaurants);
            // Update the state-restaurants
            setRestaurants(filteredData)

          }}
        >
          Search
        </button>
        {searchText}
        {/* <h1>{searchClick}</h1> */}
      </div>
      <div className="restaurant-List">
        {restaurants.map((restaurant, index) => {
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
