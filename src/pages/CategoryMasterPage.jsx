import React, { useState } from "react";
import CategoryHeader from "../components/CategoryMaster/CategoryHeader";
import CategoryStats from "../components/CategoryMaster/CategoryStats";
import CategorySearchFilter from "../components/CategoryMaster/CategorySearchFilter";
import CategoryGrid from "../components/CategoryMaster/CategoryGrid";
import CategoryForm from "../components/CategoryMaster/CategoryForm";
import "../components/CategoryMaster/CategoryMaster.css";

const CategoryMasterPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [formData, setFormData] = useState({
    category: "",
    subCategory: "",
  });
  
  const [categoriesList, setCategoriesList] = useState([
    {
      name: "Hinge Butt",
      subCategories: ["Hinge Butt - 1", "Hinge Butt - 1"],
      isExpanded: true,
    },
    {
      name: "Hinge Butt",
      subCategories: ["Hinge Butt - 1"],
      isExpanded: false,
    },
    {
      name: "Hinge Butt",
      subCategories: ["Hinge Butt - 1"],
      isExpanded: false,
    },
  ]);

  const toggleExpand = (index) => {
    const newList = [...categoriesList];
    newList[index].isExpanded = !newList[index].isExpanded;
    setCategoriesList(newList);
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const closePopup = () => {
    setShowPopup(false);
    setFormData({
      category: "",
      subCategory: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    closePopup();
  };

  const filteredCategories = categoriesList.filter((category) => {
    if (type === "category") {
      return category.name.toLowerCase().includes(search.toLowerCase());
    } else if (type === "subcategory") {
      return category.subCategories.some((sub) =>
        sub.toLowerCase().includes(search.toLowerCase())
      );
    }
    return (
      category.name.toLowerCase().includes(search.toLowerCase()) ||
      category.subCategories.some((sub) =>
        sub.toLowerCase().includes(search.toLowerCase())
      )
    );
  });

  return (
    <div className="category-page">
      <CategoryHeader onAddCategory={() => setShowPopup(true)} />
      
      <CategoryStats />

      <CategorySearchFilter 
        search={search} 
        setSearch={setSearch} 
        type={type} 
        setType={setType} 
      />

      <CategoryGrid 
        filteredCategories={filteredCategories} 
        toggleExpand={toggleExpand} 
      />

      {showPopup && (
        <CategoryForm 
          formData={formData} 
          handleChange={handleChange} 
          handleSubmit={handleSubmit} 
          closePopup={closePopup} 
        />
      )}
    </div>
  );
};

export default CategoryMasterPage;
