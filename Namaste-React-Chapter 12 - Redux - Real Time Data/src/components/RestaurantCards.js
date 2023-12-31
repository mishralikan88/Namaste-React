import { IMG_CDN_URL } from "../constants";

const RestaurantCards = (props) => {

  var { name, cloudinaryImageId, cuisines, avgRatingString } = props?.data.info;
  return (
    <div className="card">
      <div className="img-div">
        <img src={IMG_CDN_URL + cloudinaryImageId} alt="" />
      </div>
      <div className="divider"></div>
      <div>
        <div className="restaurantNameDesign">{name}</div>
        <div className="cusines">{cuisines.join(",")}</div>
        <div className="rating">{avgRatingString}</div>
        <div className="rating">{props.User.name}</div>
      </div>
    </div>
  );
};

export default RestaurantCards;
