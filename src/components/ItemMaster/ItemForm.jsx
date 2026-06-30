import { useState } from "react";

const ItemForm = ({ title = "Add New item", onCancel }) => {
  const [formData, setFormData] = useState({
    sizeInInch: "",
    sizeInMm: "",
    category: "",
    subCategory: "",
    itemInKg: "",
    weightPerPiece: "",
    weightUnit: "Gram/Kg.",
    totalPiece: "",
    dozenWeight: "",
    lowStockWarning: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="item-form-card">
      <h2>{title}</h2>
      <p className="item-form-subtitle">
        Create and define item specifications including size, weight, category,
        and stock thresholds.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="item-form-grid">
          <div className="item-form-group">
            <label>Size in Inch*</label>
            <input
              type="text"
              name="sizeInInch"
              placeholder="Enter size"
              value={formData.sizeInInch}
              onChange={handleChange}
            />
          </div>

          <div className="item-form-group">
            <label>Size in MM*</label>
            <input
              type="text"
              name="sizeInMm"
              placeholder="Enter size"
              value={formData.sizeInMm}
              onChange={handleChange}
            />
          </div>

          <div className="item-form-group">
            <label>Category*</label>
            <select name="category" value={formData.category} onChange={handleChange}>
              <option value="">Select Category</option>
              <option value="Butt Hinges">Butt Hinges</option>
              <option value="Tower Bolts">Tower Bolts</option>
              <option value="Handles">Handles</option>
            </select>
          </div>

          <div className="item-form-group">
            <label>Sub Category</label>
            <select
              name="subCategory"
              value={formData.subCategory}
              onChange={handleChange}
            >
              <option value="">Select Sub Category</option>
              <option value="Medium Butt">Medium Butt</option>
              <option value="Heavy Butt">Heavy Butt</option>
            </select>
          </div>

          <div className="item-form-group">
            <label>Item in Kg*</label>
            <input
              type="text"
              name="itemInKg"
              placeholder="Enter Kg"
              value={formData.itemInKg}
              onChange={handleChange}
            />
          </div>

          <div className="item-form-group">
            <label>Weight/Pc.*</label>
            <div className="weight-row">
              <input
                type="text"
                name="weightPerPiece"
                placeholder="Enter Pc. Weight"
                value={formData.weightPerPiece}
                onChange={handleChange}
              />
              <select
                name="weightUnit"
                value={formData.weightUnit}
                onChange={handleChange}
              >
                <option value="Gram/Kg.">Gram/Kg.</option>
                <option value="Kg/Pc.">Kg/Pc.</option>
              </select>
            </div>
          </div>

          <div className="item-form-group">
            <label>Total Pc.</label>
            <input
              type="text"
              name="totalPiece"
              placeholder="Enter Pc."
              value={formData.totalPiece}
              onChange={handleChange}
            />
          </div>

          <div className="item-form-group">
            <label>Dozen Weight*</label>
            <input
              type="text"
              name="dozenWeight"
              placeholder="Enter Dozen Weight"
              value={formData.dozenWeight}
              onChange={handleChange}
            />
          </div>

          <div className="item-form-group item-full-width">
            <label>Low stock Warning [Pc.]</label>
            <input
              type="text"
              name="lowStockWarning"
              placeholder="Set Low stock Warning"
              value={formData.lowStockWarning}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="item-button-group">
          <button className="item-save-btn" type="submit">
            Save
          </button>
          <button className="item-cancel-btn" type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ItemForm;
