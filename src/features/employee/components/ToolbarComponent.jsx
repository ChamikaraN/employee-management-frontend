import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterEmployees, toggleView } from "../../../redux/Employee/actions";
import { useNavigate } from "react-router-dom";

export default function Toolbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { filter, showGridView } = useSelector((state) => state.employee);
  const [sortBy, setSortBy] = useState("Default");
  const sortByValues = [
    { _id: "Default" },
    { first_name: "First Name" },
    { last_name: "Last Name" },
    { email: "Email" },
    { number: "Number" },
    { gender: "Gender" },
  ];
  return (
    <div className="col my-3">
      <div
        className="btn-toolbar justify-content-end"
        role="toolbar"
        aria-label="Toolbar with button groups"
      >
        <div className="btn-group" role="group" aria-label="search-input">
          <div className="input-group mr-1 my-1">
            <div className="input-group-prepend">
              <div className="input-group-text" id="search">
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
            <input
              type="text"
              className="form-control"
              value={filter.search}
              placeholder="Search Employee"
              aria-label="Search Employee"
              aria-describedby="search"
              onChange={(e) => {
                e.preventDefault();
                dispatch(filterEmployees({ search: e.target.value }));
              }}
            />
          </div>
        </div>
        <div
          className="btn-group mr-1 my-1"
          role="group"
          aria-label="sort-filter"
        >
          <button
            type="button"
            className="btn btn-outline-light"
            onClick={() =>
              dispatch(
                filterEmployees({
                  order: filter.order === "asc" ? "desc" : "asc",
                })
              )
            }
          >
            <i
              className={`fas ${
                filter.order === "asc"
                  ? "fa-sort-alpha-down-alt"
                  : "fa-sort-alpha-down"
              }`}
            />
          </button>
          <button
            id="sortButton"
            type="button"
            className="btn btn-outline-light dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Sort By
            <span className="mx-1">{sortBy}</span>
          </button>
          <div className="dropdown-menu" aria-labelledby="sortButton">
            {sortByValues.map((sortOption) => {
              const [key, value] = Object.entries(sortOption)[0];
              return (
                <span
                  className="dropdown-item"
                  key={key}
                  onClick={() => {
                    setSortBy(value);
                    dispatch(filterEmployees({ orderBy: key }));
                  }}
                >
                  {value}
                </span>
              );
            })}
          </div>
        </div>

        <button
          className="btn btn-outline-light mr-1 my-1"
          data-testid="add-employee"
          onClick={(e) => {
            e.preventDefault();
            navigate("/employee/add");
          }}
        >
          <i className="fas fa-plus mr-2" /> Add Employee
        </button>
        <button
          className="btn btn-outline-light mr-1 my-1"
          onClick={() => {
            dispatch(toggleView(!showGridView));
          }}
          data-testid="toggle-view-btn"
        >
          <i
            className={`fas ${
              showGridView ? "fa-table" : "fa-grip-horizontal"
            } mr-2`}
            data-testid="toggle-view-icon"
          />
          View
        </button>
      </div>
    </div>
  );
}
