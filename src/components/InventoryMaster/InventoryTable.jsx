// const InventoryTable = ({ inventory = [] }) => {
//   return (
//     <div className="inventory-table-card">
//       <table className="inventory-table">
//         <thead>
//           <tr>
//             <th>Item</th>
//             <th>Category</th>
//             <th>Sub Category</th>
//             <th>Size (Inch)</th>
//             <th>Size (MM)</th>
//             <th>Total Kg</th>
//             <th>Total Pc</th>
//             <th>Low Stock</th>
//             <th>Status</th>
//           </tr>
//         </thead>

//         <tbody>
//           {inventory.length > 0 ? (
//             inventory.map((item) => (
//               <tr key={item._id}>
//                 <td>{item.itemName}</td>

//                 <td>{item.category?.categoryName}</td>

//                 <td>{item.subCategory?.name || "--"}</td>

//                 <td>{item.sizeInInch}</td>

//                 <td>{item.sizeInMM}</td>

//                 <td>{item.itemInKg}</td>

//                 <td>{item.totalPc}</td>

//                 <td>{item.lowStockWarning}</td>

//                 <td>
//                   <span
//                     className={`stock-pill ${
//                       item.status === "Low Stock"
//                         ? "low"
//                         : "in"
//                     }`}
//                   >
//                     {item.status}
//                   </span>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td
//                 colSpan="9"
//                 style={{
//                   textAlign: "center",
//                   padding: "20px",
//                 }}
//               >
//                 No Inventory Found
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default InventoryTable;

import { useState } from "react";
import {
  LuEye,
  LuPencil,
  LuTrash2,
} from "react-icons/lu";

const InventoryTable = ({
  inventory = [],
  onEdit,
  onDelete,
}) => {
  const [selectedInventory, setSelectedInventory] =
    useState(null);

  return (
    <>
      <div className="inventory-table-card">
        <table className="inventory-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Category</th>
              <th>Sub Category</th>
              <th>Size (Inch)</th>
              <th>Size (MM)</th>
              <th>Total Kg</th>
              <th>Total Pc</th>
              <th>Low Stock</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {inventory.length > 0 ? (
              inventory.map((item) => (
                <tr key={item._id}>
                  <td>{item.itemName}</td>

                  <td>{item.category?.categoryName}</td>

                  <td>{item.subCategory?.name || "--"}</td>

                  <td>{item.sizeInInch}</td>

                  <td>{item.sizeInMM}</td>

                  <td>{item.itemInKg}</td>

                  <td>{item.totalPc}</td>

                  <td>{item.lowStockWarning}</td>

                  <td>
                    <span
                      className={`stock-pill ${
                        item.status === "Low Stock"
                          ? "low"
                          : "in"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td>
                    {/* Edit */}
                    <button
                      className="item-action-btn"
                      onClick={() => onEdit(item)}
                    >
                      <LuPencil />
                    </button>

                    {/* View */}
                    <button
                      className="item-action-btn"
                      onClick={() =>
                        setSelectedInventory(item)
                      }
                    >
                      <LuEye />
                    </button>

                    {/* Delete */}
                    <button
                      className="item-action-btn delete"
                      onClick={() =>
                        onDelete(item._id)
                      }
                    >
                      <LuTrash2 />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="10"
                  style={{
                    textAlign: "center",
                    padding: "20px",
                  }}
                >
                  No Inventory Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* View Inventory Modal */}

      {selectedInventory && (
        <div className="item-modal-backdrop">
          <div className="item-edit-modal">
            <button
              className="item-modal-close"
              onClick={() =>
                setSelectedInventory(null)
              }
            >
              ×
            </button>

            <div className="item-edit-grid">
              <label>
                <span>Item Name</span>

                <input
                  type="text"
                  value={selectedInventory.itemName}
                  readOnly
                />
              </label>

              <label>
                <span>Category</span>

                <input
                  type="text"
                  value={
                    selectedInventory.category
                      ?.categoryName
                  }
                  readOnly
                />
              </label>

              <label>
                <span>Sub Category</span>

                <input
                  type="text"
                  value={
                    selectedInventory.subCategory
                      ?.name || "--"
                  }
                  readOnly
                />
              </label>

              <label>
                <span>Size (Inch)</span>

                <input
                  type="text"
                  value={
                    selectedInventory.sizeInInch
                  }
                  readOnly
                />
              </label>

              <label>
                <span>Size (MM)</span>

                <input
                  type="text"
                  value={
                    selectedInventory.sizeInMM
                  }
                  readOnly
                />
              </label>

              <label>
                <span>Total Kg</span>

                <input
                  type="text"
                  value={
                    selectedInventory.itemInKg
                  }
                  readOnly
                />
              </label>

              <label>
                <span>Total Pieces</span>

                <input
                  type="text"
                  value={
                    selectedInventory.totalPc
                  }
                  readOnly
                />
              </label>

              <label>
                <span>Low Stock Warning</span>

                <input
                  type="text"
                  value={
                    selectedInventory.lowStockWarning
                  }
                  readOnly
                />
              </label>

              <label>
                <span>Status</span>

                <input
                  type="text"
                  value={
                    selectedInventory.status
                  }
                  readOnly
                />
              </label>
            </div>

            <div className="item-edit-actions">
              <button
                className="item-edit-submit"
                onClick={() => {
                  onEdit(selectedInventory);
                  setSelectedInventory(null);
                }}
              >
                Edit
              </button>

              <button
                className="item-edit-delete"
                onClick={() => {
                  onDelete(selectedInventory._id);
                  setSelectedInventory(null);
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

export default InventoryTable;