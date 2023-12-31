import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("should load header component with a login button", () => {
  // render
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //   const logInButton = screen.getByRole("button")
  //   const logInButton = screen.getByText("Log in")
  const logInButton = screen.getByRole("button", { name: "Log in" });
  expect(logInButton).toBeInTheDocument();
});

test("should load header component with Cart-0 items", () => {
  // render
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cartItems = screen.getByText("Cart-0 items");
  expect(cartItems).toBeInTheDocument();
});

test("should change Log in button to log out on click", () => {
  // render
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // get the Login button
  const logInButton = screen.getByRole("button", { name: "Log in" });

  // fire the click event of Login button
  fireEvent.click(logInButton);

  // get the Logout button
  const logOutButton = screen.getByRole("button", { name: "Log out" });

  // Assertion
  expect(logOutButton).toBeInTheDocument();
});
