import { IMG_CDN_URL } from "../constants";

const RestaurantCards = (props) => {
  console.log("resData>>", props);

  return (
    <div data-testid="resCard" className="card">
      <div className="img-div">
        <img src={IMG_CDN_URL + props?.data?.info?.cloudinaryImageId} alt="" />
      </div>
      <div className="divider"></div>
      <div>
        <div className="restaurantNameDesign">{props?.data?.info?.name}</div>
        <div className="cusines">{props?.data?.info?.cuisines.join(",")}</div>
        <div className="rating">{props?.data?.info?.avgRatingString}</div>
      </div>
    </div>
  );
};

export default RestaurantCards;
