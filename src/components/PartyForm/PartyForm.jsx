import { useState } from "react";
import "./PartyForm.css";

const PartyForm = ({ onCancel }) => {
  const [formData, setFormData] = useState({
    name: "",
    gstin: "",
    contact: "",
    email: "",
    type: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleCancel = () => {
    setFormData({
      name: "",
      gstin: "",
      contact: "",
      email: "",
      type: "",
    });

    onCancel?.();
  };

  return (
    <div className="party-form-card">
      <h2>Add New Party</h2>

      <p className="subtitle">
        Add and manage customer or vendor information for smooth purchase and
        sales operations.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label>Name *</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Party Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>GSTIN</label>
            <input
              type="text"
              name="gstin"
              placeholder="Enter GSTIN"
              value={formData.gstin}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Contact Number</label>
            <input
              type="text"
              name="contact"
              placeholder="Enter Contact Number"
              value={formData.contact}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email ID</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email ID"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group full-width">
            <label>Type *</label>

            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
            >
              <option value="">Select Type</option>
              <option value="Customer">Customer</option>
              <option value="Vendor">Vendor</option>
            </select>
          </div>
        </div>

        <div className="button-group">
          <button className="save-btn" type="submit">
            Save
          </button>

          <button
            className="cancel-btn"
            type="button"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default PartyForm;
