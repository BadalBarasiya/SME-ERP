import React from "react";
import { LuChevronDown, LuChevronUp, LuPencil, LuTrash2 } from "react-icons/lu";

const CategoryGrid = ({ filteredCategories, toggleExpand }) => {
  return (
    <div className="category-grid">
      {filteredCategories.map((category, index) => (
        <React.Fragment key={`${category.name}-${index}`}>
          {/* Category Card */}
          <div className="category-card">
            <span className="category-card-title">Category</span>
            <div className="category-card-actions">
              <button type="button" aria-label="Edit category">
                <LuPencil />
              </button>
              <button className="delete" type="button" aria-label="Delete category">
                <LuTrash2 />
              </button>
            </div>
            <div className="category-card-line" />
            <p>{category.name}</p>
          </div>

          {/* Sub Category Card */}
          <div className="category-card subcategory-card">
            <span
              className="category-card-title"
              onClick={() => toggleExpand(index)}
              style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
            >
              Sub Categories
              <div className="category-card-actions inline" style={{ position: "static" }}>
                {category.isExpanded ? <LuChevronUp /> : <LuChevronDown />}
              </div>
            </span>

            {category.isExpanded && (
              <>
                <div className="category-card-line" />
                {category.subCategories.map((subCategory, subIndex) => (
                  <div className="subcategory-row" key={`${subCategory}-${subIndex}`}>
                    <span>{subCategory}</span>
                    <div className="category-card-actions inline">
                      <button type="button" aria-label="Edit sub category">
                        <LuPencil />
                      </button>
                      <button
                        className="delete"
                        type="button"
                        aria-label="Delete sub category"
                      >
                        <LuTrash2 />
                      </button>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default CategoryGrid;
