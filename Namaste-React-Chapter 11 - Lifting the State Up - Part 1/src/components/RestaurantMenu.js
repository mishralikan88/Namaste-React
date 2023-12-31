import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerUI from "./ShimmerUI";
import useRestaurant from "../utils/useRestaurant";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurant, asdas, itemCards] = useRestaurant(id);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const category = itemCards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    setCategories(category);
  }, []);

  console.log("categories 1", categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-4">{restaurant?.name}</h1>
      <p className="font-bold">
        {restaurant?.cuisines?.join(", ")} - {restaurant?.costForTwo}
      </p>
      {categories.map((action, i) => {
        return <RestaurantCategory />;
      })}
    </div>
  );
};

export default RestaurantMenu;
