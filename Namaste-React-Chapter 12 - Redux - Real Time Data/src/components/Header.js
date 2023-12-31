import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Title from "./Title";
import UserContext from "../utils/UserContext";

import { useSelector } from "react-redux";
import store from "../utils/store";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const user = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(">>", cartItems);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/instamart">
            <li>Instamart</li>
          </Link>
          <Link to="/cart">
            <li>Cart-{cartItems.length} items </li>
          </Link>
        </ul>
      </div>
      {user.user.name}
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Log out</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Log in</button>
      )}
    </div>
  );
};

export default Header;
