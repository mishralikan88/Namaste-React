import RestaurantCardComponent, {
  TopRatedRestaurantCardComponent,
} from "./RestaurantCards";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI.js";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("KFC");

  // HOC - invocation
  const EnhancedComponent = TopRatedRestaurantCardComponent(
    RestaurantCardComponent
  );

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
    // console.log("useEffect called");
    setAllRestaurants(restaurantListData);
    setFilteredRestaurants(restaurantListData);
  }

  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>Offline,please check your internet connection !!</h1>;
  }

  if (!allRestaurants) return null;

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
      <div className="restaurant-List">Pres
        {filteredRestaurants?.map((restaurant) => {
          return (
            <Link to={"/restaurant/" + restaurant.info.id}>
              {/* Conditional Rendering */}
              {restaurant?.info?.avgRating > 4 ? (
                <EnhancedComponent data={restaurant} key={restaurant.info.id} />
              ) : (
                <RestaurantCardComponent
                  data={restaurant}
                  key={restaurant.info.id}
                />
              )}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
