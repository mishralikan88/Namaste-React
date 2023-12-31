// import { Outlet } from "react-router-dom";
import ProfileFunctionBasedComponent from "./Profile";
import ProfileClassComponent from "./ProfileClass";
import { Component } from "react";

import UserContext from "../utils/UserContext";
// const About = () => {
//   return (
//     <>
//       <div>About Us page</div>
//       <p>This is namaste react live course Chapter 07 - Finding the Path</p>
//       {/* <Outlet/> */}
//       <ProfileFunctionBasedComponent name={"Amar"} />
//       <ProfileClassComponent name={"Likan"} />
//     </>
//   );
// };

// export default About;

// const About = () => {
//   return (
//     <>
//       <div>About Us page</div>
//       <p>This is namaste react live course Chapter 07 - Finding the Path</p>
//       {/* <Outlet/> */}
//       <ProfileFunctionBasedComponent name={"Amar"} />
//       <ProfileClassComponent name={"Likan"} />
//     </>
//   );
// };

class About extends Component {
  constructor(props) {
    // Best place to initialise state variables becuase constructor gets called initially when the app starts.
    super(props);
    console.log("parent-constructor is called");
  }

  componentDidMount() {
    // Best place to make API calls because API is called after render.
    console.log("parent-component did mount is called");
  }

  render() {
    console.log("parent-render() is called");
    return (
      <>
        <div>About Us Class Component page</div>

        <UserContext.Consumer>
          {({user}) => (
            <>
              <h1>{user.name}</h1>
              <h2>{user.email}</h2>
            </>
          )}
        </UserContext.Consumer>

        <p>This is namaste react live course Chapter 07 - Finding the Path</p>
        {/* <ProfileFunctionBasedComponent name={"Amar"} /> */}
        <ProfileClassComponent name={"Likan"} />
      </>
    );
  }
}

export default About;
