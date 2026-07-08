import { useState } from "react";
import "./PartyForm.css";
import API from "../../api/partyApi";
import { toast } from "react-toastify";

const getInitialFormData = (selectedParty) => ({
  partyName: selectedParty?.partyName || "",
  gstNo: selectedParty?.gstNo || "",
  mobile: selectedParty?.mobile || "",
  email: selectedParty?.email || "",
  partyType: selectedParty?.partyType || "",
});

const PartyForm = ({ onCancel, onPartyAdded, selectedParty }) => {
  const [formData, setFormData] = useState(() =>
    getInitialFormData(selectedParty),
  );
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let res;

      if (selectedParty) {
        res = await API.put(`/${selectedParty._id}`, formData);
      } else {
        res = await API.post("/add", formData);
      }

      // alert(res.data.message);
      toast.success(res.data.message);

      onPartyAdded();
    } catch (error) {
      // alert(error.response?.data?.message || "Something went wrong");
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };
  const handleCancel = () => {
    setFormData({
      partyName: "",
      gstNo: "",
      mobile: "",
      email: "",
      partyType: "",
    });

    onCancel?.();
  };

  return (
    <div className="party-form-card">
      <h2> {selectedParty ? "Edit Party" : "Add New Party"}</h2>

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
              name="partyName"
              placeholder="Enter Party Name"
              value={formData.partyName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>GSTIN</label>
            <input
              type="text"
              name="gstNo"
              placeholder="Enter GSTIN"
              value={formData.gstNo}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Contact Number</label>
            <input
              type="text"
              name="mobile"
              placeholder="Enter Contact Number"
              value={formData.mobile}
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

          <div className="form-group">
            <label>Type</label>

            <select
              name="partyType"
              value={formData.partyType}
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
            {selectedParty ? "Update" : "Save"}
          </button>

          <button className="cancel-btn" type="button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default PartyForm;
