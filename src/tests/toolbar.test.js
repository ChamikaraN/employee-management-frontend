import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Toolbar from "../modules/employee/components/ToolbarComponent";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import AddEditEmployee from "../modules/employee/AddEditEmployeeComponent";

const queryClient = new QueryClient();

describe("Toolbar", () => {
  const initialState = {
    employee: {
      employees: [],
      employeesOriginal: [],
      filter: { search: "", order: "asc", orderBy: "_id" },
      showGridView: true,
    },
  };
  const mockStore = configureStore();
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  test('renders the "Add Employee" button', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/employee/list"]}>
          <Routes>
            <Route path="/employee/:action" element={<Toolbar />}></Route>
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    await screen.findByText("Add Employee");
  });

  test('clicking the "Add Employee" button navigates to the Add Employee page', async () => {
    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <MemoryRouter initialEntries={["/employee/add"]}>
            <Toolbar />
            <Routes>
              <Route path="/employee/add" element={<AddEditEmployee />}></Route>
            </Routes>
          </MemoryRouter>
        </QueryClientProvider>
      </Provider>
    );

    const addEmployeeButton = screen.getByTestId("add-employee");
    fireEvent.click(addEmployeeButton);

    screen.getByTestId("add-edit-employee-title");
  });

  test('renders the "View" button', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/employee/list"]}>
          <Routes>
            <Route path="/employee/:action" element={<Toolbar />}></Route>
          </Routes>
        </MemoryRouter>
      </Provider>
    );
    const viewButton = screen.getByTestId("toggle-view-btn");
    expect(viewButton).toBeInTheDocument();
  });

  test('clicking the "View" button toggles the view', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/employee/list"]}>
          <Routes>
            <Route path="/employee/:action" element={<Toolbar />}></Route>
          </Routes>
        </MemoryRouter>
      </Provider>
    );
    const viewButton = screen.getByTestId("toggle-view-btn");
    fireEvent.click(viewButton);
    const viewIcon = screen.getByTestId("toggle-view-icon");
    expect(viewIcon).toHaveClass("fa-table");
  });
});
