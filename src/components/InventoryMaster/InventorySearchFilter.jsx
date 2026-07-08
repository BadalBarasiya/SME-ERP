import { LuChevronDown, LuSearch } from "react-icons/lu";

const InventorySearchFilter = ({
  search,
  setSearch,
  categories,
  categoryFilter,
  setCategoryFilter,
  statusFilter,
  setStatusFilter,
}) => {
  return (
    <div className="inventory-search-filter">
      {/* Search */}
      <div className="inventory-search-box">
        <LuSearch className="inventory-search-icon" />

        <input
          type="text"
          placeholder="Search Item..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Category */}
      <div className="inventory-filter-box">
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="">All Categories</option>

          {categories.map((category) => (
            <option
              key={category._id}
              value={category._id}
            >
              {category.categoryName}
            </option>
          ))}
        </select>

        <LuChevronDown className="inventory-dropdown-icon" />
      </div>

      {/* Status */}
      <div className="inventory-filter-box">
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">All Status</option>
          <option value="In Stock">In Stock</option>
          <option value="Low Stock">Low Stock</option>
        </select>

        <LuChevronDown className="inventory-dropdown-icon" />
      </div>
    </div>
  );
};

export default InventorySearchFilter;