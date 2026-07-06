import { useState } from "react";
import {
  LuChevronDown,
  LuEye,
  LuPencil,
  LuSearch,
  LuTrash2,
} from "react-icons/lu";

const ItemTable = ({
  items = [],
  search = "",
  setSearch = () => {},
  onEdit = () => {},
  onDelete = () => {},
}) => {
  const [filterType, setFilterType] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  console.log(items);
  console.log(Array.isArray(items));
  const filteredItems = (items || []).filter((item) => {
    const searchText = `
    ${item.itemName}
    ${item.category?.categoryName}
    ${item.subCategory?.name}
    ${item.sizeInInch}
    ${item.sizeInMM}
  `.toLowerCase();

    const matchesSearch = searchText.includes(search.toLowerCase());

    const status =
      item.totalPc <= item.lowStockWarning ? "Low Stock" : "In Stock";

    const matchesType = filterType === "" || status === filterType;

    return matchesSearch && matchesType;
  });

  return (
    <>
      <div className="item-table-card">
        {/* <div className="item-search-filter">
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
        </div> */}

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
            {filteredItems.map((item) => {
              const status =
                item.totalPc <= item.lowStockWarning ? "Low Stock" : "In Stock";

              return (
                <tr key={item._id}>
                  <td>{item.sizeInInch}</td>

                  <td>{item.sizeInMM}</td>

                  <td>{item.category?.categoryName}</td>

                  <td>{item.subCategory?.name || "--"}</td>

                  <td>{item.itemInKg}</td>

                  <td>
                    {item.dozenWeight} {item.dozenWeightUnit}
                  </td>

                  <td>
                    <span
                      className={`stock-pill ${
                        status === "Low Stock" ? "low" : "in"
                      }`}
                    >
                      {status}
                    </span>
                  </td>

                  <td>
                    <button
                      className="item-action-btn"
                      onClick={() => onEdit(item)}
                    >
                      <LuPencil />
                    </button>

                    <button
                      className="item-action-btn"
                      onClick={() => setSelectedItem(item)}
                    >
                      <LuEye />
                    </button>

                    <button
                      className="item-action-btn delete"
                      onClick={() => onDelete(item._id)}
                    >
                      <LuTrash2 />
                    </button>
                  </td>
                </tr>
              );
            })}
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
                <input type="text" value={selectedItem.sizeInInch} readOnly />
              </label>

              <label>
                <span>Size in MM*</span>
                <input type="text" value={selectedItem.sizeInMM} readOnly />
              </label>

              <label>
                <span>Category*</span>
                <input
                  type="text"
                  value={selectedItem.category?.categoryName}
                  readOnly
                />
              </label>

              <label>
                <span>Sub Category</span>
                <input
                  type="text"
                  value={selectedItem.subCategory?.name}
                  readOnly
                />
              </label>

              <label>
                <span>Item in Kg*</span>
                <input type="text" value={selectedItem.itemInKg} readOnly />
              </label>

              <label>
                <span>Weight/Pc.*</span>
                <input
                  type="text"
                  value={`${selectedItem.weightPerPc} ${selectedItem.weightUnit}`}
                  readOnly
                />
              </label>

              <label>
                <span>Total Pc.</span>
                <input type="text" value={selectedItem.totalPc} readOnly />
              </label>

              <label>
                <span>Dozen Weight*</span>
                <input type="text" value={selectedItem.dozenWeight} readOnly />
              </label>

              <label className="item-edit-full">
                <span>Low stock Warning [Pc.]</span>
                <input
                  type="text"
                  value={selectedItem.lowStockWarning}
                  readOnly
                />
              </label>
            </div>

            <div className="item-edit-actions">
              <button
                className="item-edit-submit"
                type="button"
                onClick={() => {
                  onEdit(selectedItem);
                  setSelectedItem(null);
                }}
              >
                Edit
              </button>
              <button
                className="item-edit-delete"
                type="button"
                onClick={() => {
                  onDelete(selectedItem._id);
                  setSelectedItem(null);
                }}
              >
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

// {/* <tbody>
//   {filteredItems.map((item, index) => (
//     <tr key={`${item.inch}-${index}`}>
//       {/* <td>{item.itemName}</td>
// <td>{item.category.categoryName}</td>
// <td>{item.subCategory?.name}</td>
// <td>{item.sizeInInch}</td>
// <td>{item.sizeInMM}</td>
// <td>{item.itemInKg}</td>
// <td>{item.weightPerPc} {item.weightUnit}</td>
// <td>{item.totalPc}</td>
// <td>{item.dozenWeight} {item.dozenWeightUnit}</td>
// <td>{item.lowStockWarning}</td> */}
//       <td>{item.inch}</td>
//       <td>{item.mm}</td>
//       <td>{item.category}</td>
//       <td>{item.subCategory}</td>
//       <td>{item.totalKg}</td>
//       <td>{item.dozenWeight}</td>
//       <td>
//         <span
//           className={`stock-pill ${item.status === "Low Stock" ? "low" : "in"}`}
//         >
//           {item.status}
//         </span>
//       </td>
//       <td>
//         <button
//           className="item-action-btn"
//           type="button"
//           aria-label="Edit item"
//           onClick={() => setSelectedItem(item)}
//         >
//           <LuPencil />
//         </button>
//         <button
//           className="item-action-btn"
//           type="button"
//           aria-label="View item"
//         >
//           <LuEye />
//         </button>
//         <button
//           className="item-action-btn delete"
//           type="button"
//           aria-label="Delete item"
//         >
//           <LuTrash2 />
//         </button>
//       </td>
//     </tr>
//   ))}
// </tbody>; */}

// const items = [
//   {
//     inch: "Butt - 3 X 3/8 X 5/8",
//     mm: "75*9*16",
//     category: "Butt Hinges",
//     subCategory: "Medium Butt",
//     totalKg: "2500kg",
//     totalPiece: "32500",
//     weightPerPiece: "150gm",
//     dozenWeight: "0.650",
//     lowStockWarning: "1000",
//     status: "Low Stock",
//   },
//   {
//     inch: "Butt - 3 X 3/8 X 5/8",
//     mm: "75*9*16",
//     category: "Butt Hinges",
//     subCategory: "---",
//     totalKg: "2500kg",
//     totalPiece: "32500",
//     weightPerPiece: "150gm",
//     dozenWeight: "0.650",
//     lowStockWarning: "1000",
//     status: "Low Stock",
//   },
//   {
//     inch: "Butt - 3 X 3/8 X 5/8",
//     mm: "75*9*16",
//     category: "Butt Hinges",
//     subCategory: "Medium Butt",
//     totalKg: "2500kg",
//     totalPiece: "32500",
//     weightPerPiece: "150gm",
//     dozenWeight: "0.650",
//     lowStockWarning: "1000",
//     status: "In Stock",
//   },
//   {
//     inch: "Butt - 3 X 3/8 X 5/8",
//     mm: "75*9*16",
//     category: "Butt Hinges",
//     subCategory: "Medium Butt",
//     totalKg: "2500kg",
//     totalPiece: "32500",
//     weightPerPiece: "150gm",
//     dozenWeight: "0.650",
//     lowStockWarning: "1000",
//     status: "In Stock",
//   },
//   {
//     inch: "Butt - 3 X 3/8 X 5/8",
//     mm: "75*9*16",
//     category: "Butt Hinges",
//     subCategory: "Medium Butt",
//     totalKg: "2500kg",
//     totalPiece: "32500",
//     weightPerPiece: "150gm",
//     dozenWeight: "0.650",
//     lowStockWarning: "1000",
//     status: "Low Stock",
//   },
// ];
