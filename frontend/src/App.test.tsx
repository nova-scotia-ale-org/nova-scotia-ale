import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe("App", () => {
  test("renders Nova Scotia Ale text", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/Nova Scotia Ale/i)).toBeInTheDocument();
  });
});