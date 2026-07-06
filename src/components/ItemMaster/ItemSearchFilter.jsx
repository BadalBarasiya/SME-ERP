import { LuChevronDown, LuSearch } from "react-icons/lu";

const ItemSearchFilter = ({
  search,
  setSearch,
  categoryFilter,
  setCategoryFilter,
  categories,
}) => {
  return (
    <div className="item-search-filter">
      <div className="item-search-box">
        <LuSearch className="item-search-icon" />

        <input
          type="text"
          placeholder="Search Item"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="item-filter-box">
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

        <LuChevronDown className="item-dropdown-icon" />
      </div>
    </div>
  );
};

export default ItemSearchFilter;