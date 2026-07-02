import React from "react";
import { LuChevronDown, LuSearch } from "react-icons/lu";

const CategorySearchFilter = ({ search, setSearch, type, setType }) => {
  return (
    <div className="category-search-filter">
      <div className="category-search-box">
        <LuSearch className="category-search-icon" />
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      <div className="category-filter-box">
        <select value={type} onChange={(event) => setType(event.target.value)}>
          <option value="">Type</option>
          <option value="category">Category</option>
          <option value="subcategory">Sub Category</option>
        </select>
        <LuChevronDown className="category-dropdown-icon" />
      </div>
    </div>
  );
};

export default CategorySearchFilter;
