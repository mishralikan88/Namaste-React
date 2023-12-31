import RestaurantCards from "./RestaurantCards";
import { useState, useEffect, useContext } from "react";
import ShimmerUI from "./ShimmerUI.js";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Body = ({ User }) => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState(null);
  const { user, setUser } = useContext(UserContext);
  
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
        <input
          type="text"
          value={user.name}
          onChange={(e) =>
            setUser({ name: e.target.value, email: "email@email.com" })
          }
        ></input>
      </div>
      <div className="restaurant-List">
        {filteredRestaurants?.map((restaurant) => {
          return (
            <Link to={"/restaurant/" + restaurant.info.id}>
              <RestaurantCards
                data={restaurant}
                key={restaurant.info.id}
                User={User}
              />
              ;
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
