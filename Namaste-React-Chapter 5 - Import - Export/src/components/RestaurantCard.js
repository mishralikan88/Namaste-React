import { IMG_CDN_URL } from "../constants"; // named import

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <div className="card">
      <div className="img-div">
        <img src={IMG_CDN_URL + cloudinaryImageId} alt="" />
      </div>
      <div className="divider"></div>
      <div>
        <div className="restaurantNameDesign">{name}</div>
        <div className="cusines"></div>
        <div className="rating">{lastMileTravelString} minutes </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
