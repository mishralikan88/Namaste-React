import React from "react";
import ReactDOM from "react-dom/client";
// importing multiple default component as an object
// import obj from "./components/Header"; 

// importing single default component as an object >>
import Header from "./components/Header";
import Body from "./components/Body";
// Single named component import 
import {Footer} from "./components/Footer"; // This is not object destructuring.
// multiple named components import 
// import {Footer1,Footer2} from "./components/Footer";

// import * as obj from "./components/Footer"; // if we replace * as obj = obj .This <obj.Footer/> inside JSX wont work because 
// we are not exporing object in multiple components in named import.We are converting them to object in this file  as * as obj ,
// then accesing Footer component via obj.


const AppLayout = () => {
  return (
    <>
      {/* consuming multiple default components within JSX */}
      {/* <obj.Header /> */}
      {/* <obj.Header2 /> */}

      {/* consuming single default component within JSX >> */}
      <Header />
      <Body />
      {/* consuming named import of single component */}
      <Footer />
      {/* consuming named import of multiple components */}
      {/* <Footer1/>
      <Footer2/> */}

      {/* <obj.Footer /> */}


    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
