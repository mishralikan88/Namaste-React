import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import ShimmerUI from "./ShimmerUI";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const { id } = useParams();
  
  const [restaurant,menuCategories] =  useRestaurant(id)

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
