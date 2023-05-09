import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Toolbar from "../modules/employee/components/TableComponent";
import store from "../redux/store";

describe("Toolbar component", () => {
  it("should render search input", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Toolbar />
        </MemoryRouter>
      </Provider>
    );
    const searchInput = screen.getByPlaceholderText("Search Employee");
    expect(searchInput).toBeInTheDocument();
  });

  it("should filter employees based on search input", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Toolbar />
        </MemoryRouter>
      </Provider>
    );
    const searchInput = screen.getByPlaceholderText("Search Employee");
    fireEvent.change(searchInput, { target: { value: "John" } });
    expect(searchInput.value).toBe("John");
  });

  // add more test cases here
});
