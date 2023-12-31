import RestaurantCards from "./RestaurantCards";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI.js";
import { Link } from "react-router-dom";

function filterData(searchText, allRestaurants) {
  console.log("Search Text = ", searchText);
  console.log("All restaurants", allRestaurants);
  const filteredData = allRestaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
  return filteredData;
}

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("KFC");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.444151&lng=78.387673&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    const restaurantListData =
      jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    console.log("useEffect called");
    setAllRestaurants(restaurantListData);
    setFilteredRestaurants(restaurantListData);
  }

  if (!allRestaurants) return null;

  // if (filteredRestaurants?.length === 0)
  //   return <h1>No restaurant match your filter</h1>;

  return allRestaurants.length === 0 ? (
    <ShimmerUI />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            const filteredData = filterData(searchText, allRestaurants);
            setFilteredRestaurants(filteredData);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-List">
        {filteredRestaurants?.map((restaurant) => {
          {
            console.log(restaurant);
          }
          return (
            <Link to={"/restaurant/"+restaurant.info.id}>
              <RestaurantCards data={restaurant} key={restaurant.info.id} />;
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
