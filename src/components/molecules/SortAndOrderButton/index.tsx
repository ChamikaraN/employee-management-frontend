import React, { MouseEventHandler } from "react";
import Button from "../../atoms/Button";

interface SortAndOrderButtonProps {
  order: "asc" | "desc";
  onClickOrder: MouseEventHandler<HTMLButtonElement>;
  sortBy: string;
  sortByValues: { [key: string]: string }[];
  onClickSortBy: (key: string) => void;
}

const SortAndOrderButton: React.FC<SortAndOrderButtonProps> = ({
  order,
  onClickOrder,
  sortBy,
  sortByValues,
  onClickSortBy,
}) => {
  return (
    <div className="btn-group mr-1 my-1" role="group" aria-label="sort-filter">
      <Button
        variant="outline-light"
        onClickHandler={onClickOrder}
        title={
          <i
            className={`fas ${
              order === "asc" ? "fa-sort-alpha-down-alt" : "fa-sort-alpha-down"
            }`}
          />
        }
      />

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
              onClick={() => onClickSortBy(key)}
            >
              {value}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default SortAndOrderButton;
