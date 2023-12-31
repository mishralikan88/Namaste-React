import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import ShimmerUI from "./ShimmerUI";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [menuCategories, setMenuCategories] = useState([]);
  var Menus = [];

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.444151&lng=78.387673&restaurantId=" +
        id +
        "&catalog_qa=undefined&metaData=%7B%22type%22%3A%22RESTAURANT%22%2C%22data%22%3A%7B%22parentId%22%3A6292%2C%22primaryRestaurantId%22%3A29087%2C%22cloudinaryId%22%3A%22dw307jhy1c2t3gmzy5zn%22%2C%22brandId%22%3A6292%2C%22dishFamilyId%22%3A%22846613%22%2C%22enabled_flag%22%3A1%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Restaurant%22%7D&submitAction=SUGGESTION"
    );
    const json = await data.json();
    const restaurantData = json.data.cards[0].card.card.info;
    setRestaurant(restaurantData);
    const MenuItemsList = await json.data.cards[2].groupedCard.cardGroupMap
      .REGULAR.cards;
    MenuItemsList.slice(1, -2).map((item) => {
      Menus.push(item.card.card.title);
    });
    setMenuCategories(Menus);
  }

  console.log(menuCategories);
  if (!restaurant) {
    return <ShimmerUI />;
  }

  return (
    <div className="menu">
      <div>
        <h2>Restaunant Id : {id}</h2>
        <h2>{restaurant?.name}</h2>
        <img
          className="imgCard"
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          alt=""
        />
        <h3>{restaurant.areaName}</h3>
        <h3>{restaurant.city}</h3>
        <h3>{restaurant.avgRating}</h3>
        <h4>{restaurant.costForTwo}</h4>
      </div>
      <div>
        <h1>MENU</h1>
        <ul>
          {menuCategories.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
