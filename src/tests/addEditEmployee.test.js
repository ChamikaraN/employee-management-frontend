import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import store from "../redux/store";
import AddEditEmployee from "../modules/employee/AddEditEmployeeComponent";
import { QueryClient, QueryClientProvider } from "react-query";
import { fetchEmployeesSuccess } from "../modules/employee/actions";

const queryClient = new QueryClient();

describe("AddEditEmployee", () => {
  test("renders with correct title when adding a new employee", async () => {
    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <MemoryRouter initialEntries={["/employee/add"]}>
            <Routes>
              <Route
                path="/employee/:action"
                element={<AddEditEmployee />}
              ></Route>
            </Routes>
          </MemoryRouter>
        </QueryClientProvider>
      </Provider>
    );

    await screen.findByText("Add Employee");
  });

  test("renders with correct title and prefilled data when editing an employee", async () => {
    const employee = {
      email: "Mauricio.Stehr@yahoo.com",
      first_name: "Gerdaa",
      gender: "M",
      last_name: "Trantow",
      number: "+94771277681",
      photo: "https://randomuser.me/api/portraits/men/85.jpg",
      _id: "645a5ea57d5668f634859ca8",
    };

    store.dispatch(fetchEmployeesSuccess([employee]));

    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <MemoryRouter initialEntries={[`/employee/edit/${employee._id}`]}>
            <Routes>
              <Route
                path="/employee/:action/:id"
                element={<AddEditEmployee />}
              ></Route>
            </Routes>
          </MemoryRouter>
        </QueryClientProvider>
      </Provider>
    );

    await screen.findByText("Edit Employee");
    expect(screen.getByLabelText("First Name:")).toHaveValue(
      employee.first_name
    );
    expect(screen.getByLabelText("Last Name:")).toHaveValue(employee.last_name);
    expect(screen.getByLabelText("Email:")).toHaveValue(employee.email);
    expect(screen.getByLabelText("Phone Number:")).toHaveValue(employee.number);
    expect(screen.getByLabelText("Gender:")).toHaveValue(employee.gender);
  });

  test("displays error messages when submitting with invalid data", async () => {
    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <MemoryRouter initialEntries={["/employee/add"]}>
            <Routes>
              <Route
                path="/employee/:action"
                element={<AddEditEmployee />}
              ></Route>
            </Routes>
          </MemoryRouter>
        </QueryClientProvider>
      </Provider>
    );

    fireEvent.click(screen.getByText("Save"));

    await screen.findByText(
      "First name should only contain alphabets, min 6 characters, and max 10 characters"
    );
    expect(
      screen.getByText(
        "Last name should only contain alphabets, min 6 characters, and max 10 characters"
      )
    ).toBeInTheDocument();
    expect(screen.getByText("Invalid email address")).toBeInTheDocument();
    expect(
      screen.getByText("Invalid Sri Lankan phone number")
    ).toBeInTheDocument();
    expect(screen.getByText("Gender is required")).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText("First Name:"), {
      target: { value: "Chamikara" },
    });
    fireEvent.change(screen.getByLabelText("Last Name:"), {
      target: { value: "Nayanajith" },
    });
    fireEvent.change(screen.getByLabelText("Email:"), {
      target: { value: "invalid-email" },
    });
    fireEvent.change(screen.getByLabelText("Phone Number:"), {
      target: { value: "123" },
    });
    fireEvent.change(screen.getByLabelText("Gender:"), {
      target: { value: "M" },
    });

    fireEvent.click(screen.getByText("Save"));

    await screen.findByText("Invalid email address");
    expect(
      screen.getByText("Invalid Sri Lankan phone number")
    ).toBeInTheDocument();
  });
});
