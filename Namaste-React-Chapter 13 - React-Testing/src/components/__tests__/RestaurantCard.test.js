
import { render, screen } from "@testing-library/react";
import RestaurantCards from "../RestaurantCards";
import Mock_Data from "../mocks/resCardMock.json";


test("should render Restaurant Compopnent with props data", () => {
  render(<RestaurantCards resData={Mock_Data} />);
  console.log(Mock_Data)
  // const name = screen.getByText("Burger King")
    // console.log(">>>>>>>>",name)
});