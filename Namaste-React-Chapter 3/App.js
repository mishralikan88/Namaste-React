import React from "react";
import ReactDOM from "react-dom/client";

// creating react element using pure react
// const heading = React.createElement(
//   "h1",
//   {
//     id: "header",
//     key: "header",
//   },
//   "Welcome to JSX!"
// );

// creating react element using JSX
// const heading = <h1 id="header" key="header">Welcome to JSX!</h1> //heading is a react element

// creating a functional component. A functional component is a javascript function.
const HeaderComponent = () => <h1>This is a functional Component</h1>; // Function returning a JSX or react element.

// creating a title JSX or react element
const title = (
  <h1>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, porro?
  </h1>
); // () is optional for one line code

const Content = () => (
  <div>
    <h1>This is all about functional Component</h1>
    <h2>Learn functional component</h2>
  </div>
);

var localvar = "he he ..";
// using title react element inside my component within {}
// using Content functional component inside Container Functional component => component composition => component is called inside another component.
const Container = () => (
  <div>
    <h1>{title}</h1>
    <Content />
    {/* {Content()} */}
    {1 + 2}
    {localvar}
    {console.log("Any js Code")}
    <h2>heading 2 content</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// root.render(HeaderComponent());
// root.render(<HeaderComponent/>);
root.render(Container());
