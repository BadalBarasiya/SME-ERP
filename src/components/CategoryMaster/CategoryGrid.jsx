import React, { useState } from "react";
import { LuChevronDown, LuChevronUp, LuPencil, LuTrash2 } from "react-icons/lu";

const CategoryGrid = ({
  categories,
  onEdit,
  onDelete,
  onEditSubCategory,
  onDeleteSubCategory,
}) => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="category-grid">
      {categories.map((category) => (
        <React.Fragment key={category._id}>
          {/* Category Card */}
          <div className="category-card">
            <span className="category-card-title">Category</span>

            <div className="category-card-actions">
              <button type="button" onClick={() => onEdit(category)}>
                <LuPencil />
              </button>

              <button
                className="delete"
                type="button"
                onClick={() => onDelete(category._id)}
              >
                <LuTrash2 />
              </button>
            </div>

            <div className="category-card-line" />

            <p>{category.categoryName}</p>
          </div>

          {/* Sub Category Card */}
          <div className="category-card subcategory-card">
            <span
              className="category-card-title"
              onClick={() => toggleExpand(category._id)}
              style={{
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              Sub Categories
              <div
                className="category-card-actions inline"
                style={{ position: "static" }}
              >
                {expanded[category._id] ? <LuChevronUp /> : <LuChevronDown />}
              </div>
            </span>

            {expanded[category._id] && (
              <>
                <div className="category-card-line" />

                {category.subCategories.length > 0 ? (
                  category.subCategories.map((subCategory) => (
                    <div className="subcategory-row" key={subCategory._id}>
                      <span>{subCategory.name}</span>

                      <div className="category-card-actions inline">
                        <button
                          type="button"
                          onClick={() =>
                            onEditSubCategory(category, subCategory)
                          }
                        >
                          <LuPencil />
                        </button>

                        <button
                          className="delete"
                          type="button"
                          onClick={() => {
                             console.log(category._id,subCategory._id);
                             
                            onDeleteSubCategory(category._id, subCategory._id)
                          }}
                        >
                          <LuTrash2 />
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No Sub Categories</p>
                )}
              </>
            )}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default CategoryGrid;
