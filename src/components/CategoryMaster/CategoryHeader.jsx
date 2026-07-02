import React from "react";
import { LuPlus } from "react-icons/lu";

const CategoryHeader = ({ onAddCategory }) => {
  return (
    <div className="category-header">
      <div>
        <h1>Category Master</h1>
        <p>
          Organise items into categories and subcategories for structured
          inventory management.
        </p>
      </div>

      <button
        className="add-category-btn"
        type="button"
        onClick={onAddCategory}
      >
        <LuPlus />
        Add Categories
      </button>
    </div>
  );
};

export default CategoryHeader;
