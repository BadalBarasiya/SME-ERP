import { useState } from "react";
import {
  LuChevronDown,
  LuPencil,
  LuPlus,
  LuSearch,
  LuTrash2,
} from "react-icons/lu";
import "../components/CategoryMaster/CategoryMaster.css";

const categories = [
  {
    name: "Hinge Butt",
    subCategories: [],
  },
  {
    name: "Hinge Butt",
    subCategories: [],
  },
  {
    name: "Hinge Butt",
    subCategories: [],
  },
];

const subCategoryGroups = [
  ["Hinge Butt - 1", "Hinge Butt - 1"],
  ["Hinge Butt - 1"],
  ["Hinge Butt - 1"],
];

const CategoryMasterPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [formData, setFormData] = useState({
    category: "",
    subCategory: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const closePopup = () => {
    setShowPopup(false);
    setFormData({
      category: "",
      subCategory: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    closePopup();
  };

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(search.toLowerCase()),
  );

  const filteredSubCategories = subCategoryGroups
    .map((group) =>
      group.filter((subCategory) =>
        subCategory.toLowerCase().includes(search.toLowerCase()),
      ),
    )
    .filter((group) => group.length > 0 || search === "");

  return (
    <div className="category-page">
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
          onClick={() => setShowPopup(true)}
        >
          <LuPlus />
          Add Categories
        </button>
      </div>

      <div className="category-stats">
        <div className="category-stat-card">
          <h4>Total Categories</h4>
          <h2>32</h2>
        </div>

        <div className="category-stat-card">
          <h4>Total Sub Categories</h4>
          <h2>84</h2>
        </div>
      </div>

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

      <div className="category-grid">
        {(type === "" || type === "category") &&
          filteredCategories.map((category, index) => (
            <div className="category-card" key={`${category.name}-${index}`}>
              <div className="category-card-actions">
                <button type="button" aria-label="Edit category">
                  <LuPencil />
                </button>
                <button className="delete" type="button" aria-label="Delete category">
                  <LuTrash2 />
                </button>
              </div>
              {index > 0 && <div className="category-card-line" />}
              <p>{category.name}</p>
            </div>
          ))}

        {(type === "" || type === "subcategory") &&
          filteredSubCategories.map((group, index) => (
            <div className="category-card subcategory-card" key={index}>
              <div className="category-card-line" />
              {group.map((subCategory, subIndex) => (
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
              {index === 0 && <div className="category-card-line bottom" />}
            </div>
          ))}
      </div>

      {showPopup && (
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
      )}
    </div>
  );
};

export default CategoryMasterPage;
