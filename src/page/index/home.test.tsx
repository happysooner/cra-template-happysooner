import React from "react";
import { render } from "@testing-library/react";
import App from "./home";

test("renders App React ", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/React/i);
  expect(linkElement).toBeInTheDocument();
});
