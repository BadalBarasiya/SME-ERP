import React from "react";

const InventoryForm = ({
  selectedInventory,
  formData,
  handleChange,
  handleUpdate,
  onCancel,
}) => {
  return (
    <div className="inventory-modal-backdrop">
      <div className="inventory-form-card">
        <h2>Update Inventory</h2>

        <p>Update current stock information.</p>

        <form onSubmit={handleUpdate}>
          <div className="inventory-form-grid">
            {/* Item Name */}
            <div className="inventory-form-group">
              <label>Item Name</label>
              <input
                type="text"
                value={selectedInventory?.itemName || ""}
                readOnly
              />
            </div>

            {/* Category */}
            <div className="inventory-form-group">
              <label>Category</label>
              <input
                type="text"
                value={selectedInventory?.category?.categoryName || ""}
                readOnly
              />
            </div>

            {/* Sub Category */}
            <div className="inventory-form-group">
              <label>Sub Category</label>
              <input
                type="text"
                value={selectedInventory?.subCategory?.name || "--"}
                readOnly
              />
            </div>

            {/* Item Kg */}
            <div className="inventory-form-group">
              <label>Total Kg</label>
              <input
                type="number"
                name="itemInKg"
                value={formData.itemInKg}
                onChange={handleChange}
              />
            </div>

            {/* Total Pieces */}
            <div className="inventory-form-group">
              <label>Total Pieces</label>
              <input
                type="number"
                name="totalPc"
                value={formData.totalPc}
                onChange={handleChange}
              />
            </div>

            {/* Low Stock */}
            <div className="inventory-form-group">
              <label>Low Stock Warning</label>
              <input
                type="number"
                name="lowStockWarning"
                value={formData.lowStockWarning}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="inventory-button-group">
            <button
              className="inventory-save-btn"
              type="submit"
            >
              Update
            </button>

            <button
              className="inventory-cancel-btn"
              type="button"
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InventoryForm;