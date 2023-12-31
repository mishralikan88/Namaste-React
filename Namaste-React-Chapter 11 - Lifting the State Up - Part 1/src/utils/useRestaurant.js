import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";

var Menus = [];
var itemCards = [] 

// creating a Custom Hook 
const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null);
  const [menuCategories, setMenuCategories] = useState([]);

  // get Data from API
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      FETCH_MENU_URL +
        id +
        "&catalog_qa=undefined&metaData=%7B%22type%22%3A%22RESTAURANT%22%2C%22data%22%3A%7B%22parentId%22%3A6292%2C%22primaryRestaurantId%22%3A29087%2C%22cloudinaryId%22%3A%22dw307jhy1c2t3gmzy5zn%22%2C%22brandId%22%3A6292%2C%22dishFamilyId%22%3A%22846613%22%2C%22enabled_flag%22%3A1%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Restaurant%22%7D&submitAction=SUGGESTION"
    );
    const json = await data.json();
    itemCards = json?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards
    const restaurantData = json.data.cards[0].card.card.info;
    setRestaurant(restaurantData);
    const MenuItemsList = await json.data.cards[2].groupedCard.cardGroupMap
      .REGULAR.cards;
    MenuItemsList.slice(1, -2).map((item) => {
      Menus.push(item.card.card.title);
    });
    setMenuCategories(Menus);
  }

  // return restaurant data and menuCategories data
  return [restaurant, menuCategories,itemCards];
};

export default useRestaurant;
