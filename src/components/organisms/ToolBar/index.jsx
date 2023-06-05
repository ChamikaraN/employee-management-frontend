import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterEmployees, toggleView } from "../../../redux/Employee/actions";
import { useNavigate } from "react-router-dom";
import Button from "../../atoms/Button";
import SearchBar from "../../molecules/SearchBar";
import SortAndOrderButton from "../../molecules/SortAndOrderButton";

export default function Toolbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { filter, showGridView } = useSelector((state) => state.employee);
  const sortByValues = [
    { _id: "Default" },
    { first_name: "First Name" },
    { last_name: "Last Name" },
    { email: "Email" },
    { number: "Number" },
    { gender: "Gender" },
  ];

  const searchEmployee = (event) => {
    const { name, value } = event.target;
    dispatch(filterEmployees({ [name]: value }));
  };

  const orderEmployee = () => {
    dispatch(
      filterEmployees({ order: filter.order === "asc" ? "desc" : "asc" })
    );
  };

  const sortEmployee = (key) => {
    dispatch(filterEmployees({ orderBy: key }));
  };

  const handleAddEmployee = () => {
    navigate("/employee/add");
  };

  const handleToggleView = () => {
    dispatch(toggleView(!showGridView));
  };

  return (
    <div className="col my-3">
      <div
        className="btn-toolbar justify-content-end"
        role="toolbar"
        aria-label="Toolbar with button groups"
      >
        <SearchBar keyword={filter.search} onChangeKeyword={searchEmployee} />
        <SortAndOrderButton
          order={filter.order}
          onClickOrder={orderEmployee}
          sortByValues={sortByValues}
          sortBy={
            sortByValues.find((item) => item.hasOwnProperty(filter.orderBy))[
              filter.orderBy
            ]
          }
          onClickSortBy={sortEmployee}
        />

        <Button
          variant="outline-light"
          styles="mr-1 my-1"
          onClickHandler={handleAddEmployee}
          title={
            <>
              <i className="fas fa-plus mr-2" /> Add Employee
            </>
          }
        />
        <Button
          variant="outline-light"
          styles="mr-1 my-1"
          onClickHandler={handleToggleView}
          title={
            <>
              <i
                className={`fas ${
                  showGridView ? "fa-table" : "fa-grip-horizontal"
                } mr-2`}
              />
              View
            </>
          }
        />
      </div>
    </div>
  );
}
