import React, { ChangeEvent } from "react";
import Input from "../../atoms/Input";

interface SearchBarProps {
  keyword: string;
  onChangeKeyword: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ keyword, onChangeKeyword }) => {
  return (
    <div className="btn-group" role="group" aria-label="search-input">
      <div className="input-group mr-1 my-1">
        <div className="input-group-prepend">
          <div className="input-group-text" id="search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <Input
          value={keyword}
          name="search"
          placeholder="Search Employee"
          onChangeHandler={onChangeKeyword}
        />
      </div>
    </div>
  );
};

export default SearchBar;
