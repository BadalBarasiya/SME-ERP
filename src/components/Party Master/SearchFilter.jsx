import { LuSearch, LuChevronDown } from "react-icons/lu";

const SearchFilter = ({
  search,
  setSearch,
  filterType,
  setFilterType,
}) => {
  //  const handleInputChange = (e) => {
  //   const value = e.target.value;
    
  //   This will print to your console instantly on every keypress
  //   console.log("⚡ Instant Change (No Debounce):", value);
    
  //   setSearch(value);
  // };
  return (
    <div className="search-filter">

      <div className="search-box">
        <LuSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          // onChange={handleInputChange}
        />

      </div>

      <div className="filter-box">
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="">Type</option>
          <option value="Customer">Customer</option>
          <option value="Vendor">Vendor</option>
        </select>

        <LuChevronDown className="dropdown-icon" />
      </div>

    </div>
  );
};

export default SearchFilter;
