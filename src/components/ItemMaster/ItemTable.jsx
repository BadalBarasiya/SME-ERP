import { useState } from "react";
import { LuChevronDown, LuEye, LuPencil, LuSearch, LuTrash2 } from "react-icons/lu";

const ItemTable = () => {
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    {
      inch: "Butt - 3 X 3/8 X 5/8",
      mm: "75*9*16",
      category: "Butt Hinges",
      subCategory: "Medium Butt",
      totalKg: "2500kg",
      totalPiece: "32500",
      weightPerPiece: "150gm",
      dozenWeight: "0.650",
      lowStockWarning: "1000",
      status: "Low Stock",
    },
    {
      inch: "Butt - 3 X 3/8 X 5/8",
      mm: "75*9*16",
      category: "Butt Hinges",
      subCategory: "---",
      totalKg: "2500kg",
      totalPiece: "32500",
      weightPerPiece: "150gm",
      dozenWeight: "0.650",
      lowStockWarning: "1000",
      status: "Low Stock",
    },
    {
      inch: "Butt - 3 X 3/8 X 5/8",
      mm: "75*9*16",
      category: "Butt Hinges",
      subCategory: "Medium Butt",
      totalKg: "2500kg",
      totalPiece: "32500",
      weightPerPiece: "150gm",
      dozenWeight: "0.650",
      lowStockWarning: "1000",
      status: "In Stock",
    },
    {
      inch: "Butt - 3 X 3/8 X 5/8",
      mm: "75*9*16",
      category: "Butt Hinges",
      subCategory: "Medium Butt",
      totalKg: "2500kg",
      totalPiece: "32500",
      weightPerPiece: "150gm",
      dozenWeight: "0.650",
      lowStockWarning: "1000",
      status: "In Stock",
    },
    {
      inch: "Butt - 3 X 3/8 X 5/8",
      mm: "75*9*16",
      category: "Butt Hinges",
      subCategory: "Medium Butt",
      totalKg: "2500kg",
      totalPiece: "32500",
      weightPerPiece: "150gm",
      dozenWeight: "0.650",
      lowStockWarning: "1000",
      status: "Low Stock",
    },
  ];

  const filteredItems = items.filter((item) => {
    const searchText = `${item.inch} ${item.mm} ${item.category} ${item.subCategory}`.toLowerCase();
    const matchesSearch = searchText.includes(search.toLowerCase());
    const matchesType = filterType === "" || item.status === filterType;

    return matchesSearch && matchesType;
  });

  return (
    <>
      <div className="item-table-card">
        <div className="item-search-filter">
          <div className="item-search-box">
            <LuSearch className="item-search-icon" />
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>

          <div className="item-filter-box">
            <select
              value={filterType}
              onChange={(event) => setFilterType(event.target.value)}
            >
              <option value="">Type</option>
              <option value="In Stock">In Stock</option>
              <option value="Low Stock">Low Stock</option>
            </select>
            <LuChevronDown className="item-dropdown-icon" />
          </div>
        </div>

        <table className="item-table">
          <thead>
            <tr>
              <th>In Inch</th>
              <th>In mm</th>
              <th>Category</th>
              <th>Sub Category</th>
              <th>Total Kg</th>
              <th>Dozen Weight</th>
              <th>Low Stock</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredItems.map((item, index) => (
              <tr key={`${item.inch}-${index}`}>
                <td>{item.inch}</td>
                <td>{item.mm}</td>
                <td>{item.category}</td>
                <td>{item.subCategory}</td>
                <td>{item.totalKg}</td>
                <td>{item.dozenWeight}</td>
                <td>
                  <span className={`stock-pill ${item.status === "Low Stock" ? "low" : "in"}`}>
                    {item.status}
                  </span>
                </td>
                <td>
                  <button
                    className="item-action-btn"
                    type="button"
                    aria-label="Edit item"
                    onClick={() => setSelectedItem(item)}
                  >
                    <LuPencil />
                  </button>
                  <button className="item-action-btn" type="button" aria-label="View item">
                    <LuEye />
                  </button>
                  <button className="item-action-btn delete" type="button" aria-label="Delete item">
                    <LuTrash2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedItem && (
        <div className="item-modal-backdrop">
          <div className="item-edit-modal">
            <button
              className="item-modal-close"
              type="button"
              aria-label="Close edit popup"
              onClick={() => setSelectedItem(null)}
            >
              ×
            </button>

            <div className="item-edit-grid">
              <label>
                <span>Size in Inch*</span>
                <input type="text" value={selectedItem.inch} readOnly />
              </label>

              <label>
                <span>Size in MM*</span>
                <input type="text" value={selectedItem.mm} readOnly />
              </label>

              <label>
                <span>Category*</span>
                <input type="text" value={selectedItem.category} readOnly />
              </label>

              <label>
                <span>Sub Category</span>
                <input type="text" value={selectedItem.subCategory} readOnly />
              </label>

              <label>
                <span>Item in Kg*</span>
                <input type="text" value={selectedItem.totalKg} readOnly />
              </label>

              <label>
                <span>Weight/Pc.*</span>
                <input type="text" value={selectedItem.weightPerPiece} readOnly />
              </label>

              <label>
                <span>Total Pc.</span>
                <input type="text" value={selectedItem.totalPiece} readOnly />
              </label>

              <label>
                <span>Dozen Weight*</span>
                <input type="text" value={selectedItem.dozenWeight} readOnly />
              </label>

              <label className="item-edit-full">
                <span>Low stock Warning [Pc.]</span>
                <input type="text" value={selectedItem.lowStockWarning} readOnly />
              </label>
            </div>

            <div className="item-edit-actions">
              <button className="item-edit-submit" type="button">
                Edit
              </button>
              <button className="item-edit-delete" type="button">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ItemTable;
