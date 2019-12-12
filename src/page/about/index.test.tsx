import React from "react";
import { render } from "@testing-library/react";
import App from "./index";

test("renders About Page", () => {
  const { getAllByText } = render(<App />);
  const ele = getAllByText("关于");
  expect(ele).toHaveLength(1);
});
