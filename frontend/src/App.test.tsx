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

    const elements = screen.getAllByText(/Nova Scotia Ale/i);
    expect(elements.length).toBeGreaterThan(0);
  });
});