import { useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2 ] = useState(0);
  return (
    <div>
      <h2>Profile Function based Component</h2>
      <h3>{props.name}</h3>
      <h3>{count}</h3>
      <h3>{count2}</h3>
      <button
        onClick={() => {
          setCount(1);
          setCount2(2);
        }}
      >
        setCount-Functionbased
      </button>
    </div>
  );
};

export default Profile;
