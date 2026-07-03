import { LuTrash2 } from "react-icons/lu";

const CategoryForm = ({
  formData,
  handleCategoryChange,
  handleSubCategoryChange,
  addSubCategory,
  removeSubCategory,
  handleSubmit,
  closePopup,
  selectedCategory,
}) => {
  return (
    <div className="category-modal-backdrop">
      <div className="category-modal">
        <h2>{selectedCategory ? "Update Category" : "Add Category"}</h2>

        <p>Create categories and subcategories for organised inventory.</p>

        <form onSubmit={handleSubmit}>
          {/* Category */}
          <label>
            <span>Category Name *</span>

            <input
              type="text"
              placeholder="Enter Category"
              value={formData.categoryName}
              onChange={handleCategoryChange}
            />
          </label>

          {/* Sub Categories */}

          <label>
            <span>Sub Categories*</span>

            {formData.subCategories.map((subCategory, index) => (
              <div key={index} className="subcategory-input-row">
                <input
                  type="text"
                  placeholder="Enter Sub Category"
                  value={subCategory.name}
                  onChange={(e) =>
                    handleSubCategoryChange(index, e.target.value)
                  }
                />

                {selectedCategory && (
                  <button
                    type="button"
                    onClick={() => removeSubCategory(index)}
                  >
                    <LuTrash2 />
                  </button>
                )}
              </div>
            ))}

            <button
              type="button"
              onClick={addSubCategory}
              style={{ marginTop: "12px",height:"100%",margin:"auto" }}
            >
              + Add More
            </button>
          </label>

          <div className="category-modal-actions">
            <button className="category-save-btn" type="submit">
              {selectedCategory ? "Update" : "Save"}
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
