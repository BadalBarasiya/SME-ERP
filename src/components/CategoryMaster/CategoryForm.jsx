import React from "react";

const CategoryForm = ({ formData, handleChange, handleSubmit, closePopup }) => {
  return (
    <div className="category-modal-backdrop">
      <div className="category-modal">
        <h2>Add Categories</h2>
        <p>Create categories and subcategories for organised inventory.</p>

        <form onSubmit={handleSubmit}>
          <label>
            <span>Enter New Category*</span>
            <input
              type="text"
              name="category"
              placeholder="Enter Category"
              value={formData.category}
              onChange={handleChange}
            />
          </label>

          <label>
            <span>Enter New Sub Category</span>
            <div className="subcategory-input-row">
              <input
                type="text"
                name="subCategory"
                placeholder="Enter Sub Category"
                value={formData.subCategory}
                onChange={handleChange}
              />
              <button type="button">Add More +</button>
            </div>
          </label>

          <div className="category-modal-actions">
            <button className="category-save-btn" type="submit">
              Save
            </button>
            <button
              className="category-cancel-btn"
              type="button"
              onClick={closePopup}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CategoryForm;
