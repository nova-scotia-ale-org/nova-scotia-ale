import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("renders Nova Scotia Ale text", () => {
  render(<App />);
  expect(screen.getByText(/Nova Scotia Ale/i)).toBeInTheDocument();
});