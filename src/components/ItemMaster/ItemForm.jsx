// import { useState } from "react";

// const ItemForm = ({ title = "Add New item", onCancel }) => {
//   const [formData, setFormData] = useState({
//     sizeInInch: "",
//     sizeInMm: "",
//     category: "",
//     subCategory: "",
//     itemInKg: "",
//     weightPerPiece: "",
//     weightUnit: "Gram/Kg.",
//     totalPiece: "",
//     dozenWeight: "",
//     lowStockWarning: "",
//   });

//   // const handleChange = (event) => {
//   //   setFormData({
//   //     ...formData,
//   //     [event.target.name]: event.target.value,
//   //   });
//   // };
// const handleChange = (e) => {
//   const { name, value } = e.target;

//   setFormData((prev) => {
//     const updated = {
//       ...prev,
//       [name]: value,
//     };

//     if (name === "weightPerPc") {
//       updated.dozenWeight =
//         value === "" ? "" : Number(value) * 12;
//     }

//     return updated;
//   });
// };
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <div className="item-form-card">
//       <h2>{title}</h2>
//       <p className="item-form-subtitle">
//         Create and define item specifications including size, weight, category,
//         and stock thresholds.
//       </p>

//       <form onSubmit={handleSubmit}>
//         <div className="item-form-grid">
//           <div className="item-form-group">
//             <label>Size in Inch*</label>
//             <input
//               type="text"
//               name="sizeInInch"
//               placeholder="Enter size"
//               value={formData.sizeInInch}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="item-form-group">
//             <label>Size in MM*</label>
//             <input
//               type="text"
//               name="sizeInMm"
//               placeholder="Enter size"
//               value={formData.sizeInMm}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="item-form-group">
//             <label>Category*</label>
//             <select name="category" value={formData.category} onChange={handleChange}>
//               <option value="">Select Category</option>
//               <option value="Butt Hinges">Butt Hinges</option>
//               <option value="Tower Bolts">Tower Bolts</option>
//               <option value="Handles">Handles</option>
//             </select>
//           </div>

//           <div className="item-form-group">
//             <label>Sub Category</label>
//             <select
//               name="subCategory"
//               value={formData.subCategory}
//               onChange={handleChange}
//             >
//               <option value="">Select Sub Category</option>
//               <option value="Medium Butt">Medium Butt</option>
//               <option value="Heavy Butt">Heavy Butt</option>
//             </select>
//           </div>

//           <div className="item-form-group">
//             <label>Item in Kg*</label>
//             <input
//               type="text"
//               name="itemInKg"
//               placeholder="Enter Kg"
//               value={formData.itemInKg}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="item-form-group">
//             <label>Weight/Pc.*</label>
//             <div className="weight-row">
//               <input
//                 type="text"
//                 name="weightPerPiece"
//                 placeholder="Enter Pc. Weight"
//                 value={formData.weightPerPiece}
//                 onChange={handleChange}
//               />
//               <select
//                 name="weightUnit"
//                 value={formData.weightUnit}
//                 onChange={handleChange}
//               >
//                 <option value="Gram/Kg.">Gram/Kg.</option>
//                 <option value="Kg/Pc.">Kg/Pc.</option>
//               </select>
//             </div>
//           </div>

//           <div className="item-form-group">
//             <label>Total Pc.</label>
//             <input
//               type="text"
//               name="totalPiece"
//               placeholder="Enter Pc."
//               value={formData.totalPiece}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="item-form-group">
//             <label>Dozen Weight*</label>
//             <input
//               type="text"
//               name="dozenWeight"
//               placeholder="Enter Dozen Weight"
//               value={formData.dozenWeight}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="item-form-group item-full-width">
//             <label>Low stock Warning [Pc.]</label>
//             <input
//               type="text"
//               name="lowStockWarning"
//               placeholder="Set Low stock Warning"
//               value={formData.lowStockWarning}
//               onChange={handleChange}
//             />
//           </div>
//         </div>

//         <div className="item-button-group">
//           <button className="item-save-btn" type="submit">
//             Save
//           </button>
//           <button className="item-cancel-btn" type="button" onClick={onCancel}>
//             Cancel
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ItemForm;
import { useEffect } from "react";
import { useState } from "react";
import { getCategories } from "../../services/categoryService";

import { addItem, updateItem } from "../../services/itemService";
const ItemForm = ({ title = "Add New Item",
  onCancel,
  selectedItem,
  onItemAdded, }) => {
  const [categories, setCategories] = useState([]);

  const [subCategories, setSubCategories] = useState([]);
  const [formData, setFormData] = useState({
    itemName: "",
    sizeInInch: "",
    sizeInMm: "",
    category: "",
    subCategory: "",
    itemInKg: "",
    weightPerPc: "",
    weightUnit: "gm",
    totalPc: "",
    dozenWeight: "",
    lowStockWarning: "",
  });
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await getCategories();

        setCategories(res.data.categories);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategories();
  }, []);
  useEffect(() => {
  if (selectedItem) {
    setFormData({
      itemName: selectedItem.itemName,
      sizeInInch: selectedItem.sizeInInch,
      sizeInMm: selectedItem.sizeInMM,
      category: selectedItem.category._id,
      subCategory: selectedItem.subCategory?._id || "",
      itemInKg: selectedItem.itemInKg,
      weightPerPc: selectedItem.weightPerPc,
      weightUnit: selectedItem.weightUnit,
      totalPc: selectedItem.totalPc,
      dozenWeight: selectedItem.dozenWeight,
      lowStockWarning: selectedItem.lowStockWarning,
    });

    const category = categories.find(
      (cat) => cat._id === selectedItem.category._id
    );

    setSubCategories(category ? category.subCategories : []);
  }
}, [selectedItem, categories]);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      const updated = {
        ...prev,
        [name]: value,
      };

      if (name === "weightPerPc") {
        updated.dozenWeight = value === "" ? "" : Number(value) * 12;
      }

      if (name === "category") {
        const selectedCategory = categories.find((cat) => cat._id === value);

        setSubCategories(
          selectedCategory ? selectedCategory.subCategories : [],
        );

        updated.subCategory = "";
      }

      return updated;
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    if (selectedItem) {
      await updateItem(selectedItem._id, formData);

      alert("Item Updated Successfully");
    } else {
      await addItem(formData);

      alert("Item Added Successfully");
    }

    onItemAdded();

    setFormData({
      itemName: "",
      sizeInInch: "",
      sizeInMm: "",
      category: "",
      subCategory: "",
      itemInKg: "",
      weightPerPc: "",
      weightUnit: "gm",
      totalPc: "",
      dozenWeight: "",
      lowStockWarning: "",
    });

    setSubCategories([]);
  } catch (error) {
    alert(error.response?.data?.message || "Something went wrong");
  }
};
  return (
    <div className="item-form-card">
      <h2>{title}</h2>

      <p className="item-form-subtitle">
        Create and define item specifications including size, weight, category
        and stock thresholds.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="item-form-grid">
          {/* Item Name */}
          <div className="item-form-group">
            <label>Item Name *</label>

            <input
              type="text"
              name="itemName"
              placeholder="Enter Item Name"
              value={formData.itemName}
              onChange={handleChange}
            />
          </div>

          {/* Size Inch */}
          <div className="item-form-group">
            <label>Size in Inch</label>

            <input
              type="text"
              name="sizeInInch"
              placeholder="Enter Size"
              value={formData.sizeInInch}
              onChange={handleChange}
            />
          </div>

          {/* Size MM */}
          <div className="item-form-group">
            <label>Size in MM</label>

            <input
              type="text"
              name="sizeInMM"
              placeholder="Enter Size"
              value={formData.sizeInMM}
              onChange={handleChange}
            />
          </div>

          {/* Category */}
          <div className="item-form-group">
            <label>Category *</label>

            {/* <select
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="">Select Category</option>

              {/* Dynamic Categories Here */}
            {/* </select> */}
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="">Select Category</option>

              {categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.categoryName}
                </option>
              ))}
            </select>
          </div>

          {/* Sub Category */}
          <div className="item-form-group">
            <label>Sub Category</label>

            {/* <select
              name="subCategory"
              value={formData.subCategory}
              onChange={handleChange}
            >
              <option value="">Select Sub Category</option>

              {/* Dynamic Sub Categories Here */}
            {/* </select> */}
            <select
              name="subCategory"
              value={formData.subCategory}
              onChange={handleChange}
            >
              <option value="">Select Sub Category</option>

              {subCategories.map((subCategory) => (
                <option key={subCategory._id} value={subCategory._id}>
                  {subCategory.name}
                </option>
              ))}
            </select>
          </div>

          {/* Item in Kg */}
          <div className="item-form-group">
            <label>Item in Kg</label>

            <input
              type="number"
              name="itemInKg"
              placeholder="Enter Weight"
              value={formData.itemInKg}
              onChange={handleChange}
            />
          </div>

          {/* Weight Per Pc */}
          <div className="item-form-group">
            <label>Weight/Pc.</label>

            <div className="weight-row">
              <input
                type="number"
                name="weightPerPc"
                placeholder="Enter Pc. Weight"
                value={formData.weightPerPc}
                onChange={handleChange}
              />

              <select
                name="weightUnit"
                value={formData.weightUnit}
                onChange={handleChange}
              >
                <option value="gm">Gram</option>
                <option value="kg">Kg</option>
              </select>
            </div>
          </div>

          {/* Total Pc */}
          <div className="item-form-group">
            <label>Total Pc.</label>

            <input
              type="number"
              name="totalPc"
              placeholder="Enter Total Pc."
              value={formData.totalPc}
              onChange={handleChange}
            />
          </div>

          {/* Dozen Weight */}
          <div className="item-form-group">
            <label>Dozen Weight</label>

            <div className="weight-row">
              <input
                type="number"
                name="dozenWeight"
                value={formData.dozenWeight}
                readOnly
              />

              <input
                type="text"
                value={formData.weightUnit === "gm" ? "Gram" : "Kg"}
                readOnly
              />
            </div>
          </div>

          {/* Low Stock Warning */}
          <div className="item-form-group item-full-width">
            <label>Low Stock Warning [Pc.]</label>

            <input
              type="number"
              name="lowStockWarning"
              placeholder="Set Low Stock Warning"
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
