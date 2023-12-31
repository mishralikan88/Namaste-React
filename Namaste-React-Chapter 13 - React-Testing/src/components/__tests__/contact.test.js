import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("contactus component test cases", () => {
  beforeAll(() => {
    console.log("gets executed before all test cases execution");
  });

  beforeEach(() => {
    console.log("gets executed before each test case execution");
  });

  afterAll(() => {
    console.log("gets executed after all test cases execution");
  });

  afterEach(() => {
    console.log("gets executed after each test case execution");
  });

  test("should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("should load button inside contact us component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("should load button with name submit inside contact us component", () => {
    render(<Contact />);
    const btnName = screen.getByText("Submit"); // case sensitive
    expect(btnName).toBeInTheDocument();
  });

  test("should load input text with placeholder name", () => {
    render(<Contact />);
    const inputbyPlaceHolder = screen.getByPlaceholderText("name");
    expect(inputbyPlaceHolder).toBeInTheDocument();
  });

  test("should load 2 input text input elements inside contact us component", () => {
    // rendering
    render(<Contact />);
    // Quering
    const inputelements = screen.getAllByRole("textbox");
    // Assertion
    expect(inputelements.length).toBe(2);
  });
});
