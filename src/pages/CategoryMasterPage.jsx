// import React, { useState } from "react";
// import CategoryHeader from "../components/CategoryMaster/CategoryHeader";
// import CategoryStats from "../components/CategoryMaster/CategoryStats";
// import CategorySearchFilter from "../components/CategoryMaster/CategorySearchFilter";
// import CategoryGrid from "../components/CategoryMaster/CategoryGrid";
// import CategoryForm from "../components/CategoryMaster/CategoryForm";
// import "../components/CategoryMaster/CategoryMaster.css";

// const CategoryMasterPage = () => {
//   const [showPopup, setShowPopup] = useState(false);
//   const [search, setSearch] = useState("");
//   const [type, setType] = useState("");
//   const [formData, setFormData] = useState({
//   categoryName: "",
//   subCategories: [
//     {
//       name: "",
//     },
//   ],
// });
//   // const [formData, setFormData] = useState({
//   //   categoryName: "",
//   //   subCategories: [""],
//   // });

//   // const [categoriesList, setCategoriesList] = useState([
//   //   {
//   //     name: "Hinge Butt",
//   //     subCategories: ["Hinge Butt - 1", "Hinge Butt - 1"],
//   //     isExpanded: true,
//   //   },
//   //   {
//   //     name: "Hinge Butt",
//   //     subCategories: ["Hinge Butt - 1"],
//   //     isExpanded: false,
//   //   },
//   //   {
//   //     name: "Hinge Butt",
//   //     subCategories: ["Hinge Butt - 1"],
//   //     isExpanded: false,
//   //   },
//   // ]);

//   const toggleExpand = (index) => {
//     const newList = [...categoriesList];
//     newList[index].isExpanded = !newList[index].isExpanded;
//     setCategoriesList(newList);
//   };

//   const handleCategoryChange = (e) => {
//     setFormData({
//       ...formData,
//       categoryName: e.target.value,
//     });
//   };
//   const handleSubCategoryChange = (index, value) => {
//   const updated = [...formData.subCategories];

//   updated[index].name = value;

//   setFormData({
//     ...formData,
//     subCategories: updated,
//   });
// };
// const addSubCategory = () => {
//   setFormData({
//     ...formData,
//     subCategories: [
//       ...formData.subCategories,
//       {
//         name: "",
//       },
//     ],
//   });
// };

//   // const handleSubCategoryChange = (index, value) => {
//   //   const updated = [...formData.subCategories];

//   //   updated[index] = value;

//   //   setFormData({
//   //     ...formData,
//   //     subCategories: updated,
//   //   });
//   // };

//   // const addSubCategory = () => {
//   //   setFormData({
//   //     ...formData,
//   //     subCategories: [...formData.subCategories, ""],
//   //   });
//   // };
// const removeSubCategory = (index) => {
//   const updatedSubCategories = [...formData.subCategories];

//   updatedSubCategories.splice(index, 1);

//   // Always keep at least one empty input
//   if (updatedSubCategories.length === 0) {
//     updatedSubCategories.push({ name: "" });
//   }

//   setFormData({
//     ...formData,
//     subCategories: updatedSubCategories,
//   });
// };
//   // const removeSubCategory = (index) => {
//   //   const updated = formData.subCategories.filter((_, i) => i !== index);

//   //   setFormData({
//   //     ...formData,
//   //     subCategories: updated,
//   //   });
//   // };

//   const closePopup = () => {
//     setShowPopup(false);
//     setFormData({
//       categoryName: "",
//      subCategories: [
//         {
//             name: "",
//         },
//     ],
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log(formData);

//     /*
//   Output:

//   {
//     categoryName: "Plastic",
//     subCategories: [
//       "Pipe",
//       "Tank",
//       "Valve"
//     ]
//   }
//   */

//     closePopup();
//   };

//   // const filteredCategories = categoriesList.filter((category) => {
//   //   if (type === "category") {
//   //     return category.name.toLowerCase().includes(search.toLowerCase());
//   //   } else if (type === "subcategory") {
//   //     return category.subCategories.some((sub) =>
//   //       sub.toLowerCase().includes(search.toLowerCase()),
//   //     );
//   //   }
//   //   return (
//   //     category.name.toLowerCase().includes(search.toLowerCase()) ||
//   //     category.subCategories.some((sub) =>
//   //       sub.toLowerCase().includes(search.toLowerCase()),
//   //     )
//   //   );
//   // });

//   return (
//     <div className="category-page">
//       <CategoryHeader onAddCategory={() => setShowPopup(true)} />

//       <CategoryStats />

//       <CategorySearchFilter
//         search={search}
//         setSearch={setSearch}
//         type={type}
//         setType={setType}
//       />

//       <CategoryGrid
//          categories={categories}
//   onEdit={handleEdit}
//   onDelete={handleDelete}
//       />

//       {showPopup && (
//         <CategoryForm
//           formData={formData}
//           handleCategoryChange={handleCategoryChange}
//           handleSubCategoryChange={handleSubCategoryChange}
//           addSubCategory={addSubCategory}
//           removeSubCategory={removeSubCategory}
//           handleSubmit={handleSubmit}
//           closePopup={closePopup}
//         />
//       )}
//     </div>
//   );
// };

// export default CategoryMasterPage;
import useCategory from "../hooks/useCategory";

import CategoryHeader from "../components/CategoryMaster/CategoryHeader";
import CategoryStats from "../components/CategoryMaster/CategoryStats";
import CategorySearchFilter from "../components/CategoryMaster/CategorySearchFilter";
import CategoryGrid from "../components/CategoryMaster/CategoryGrid";
import CategoryForm from "../components/CategoryMaster/CategoryForm";

import Pagination from "../common/Pagination";

import "../components/CategoryMaster/CategoryMaster.css";

const CategoryMasterPage = () => {
  const {
    categories,
    selectedCategory,
    showForm,

    page,
    setPage,

    totalPages,

    stats,

    search,
    setSearch,

    sortBy,
    setSortBy,

    order,
    setOrder,

    formData,

    setShowForm,
    setSelectedCategory,

    handleDelete,
    handleEdit,
    handleCategoryAdded,

    handleCategoryChange,
    handleSubCategoryChange,
    addSubCategory,
    removeSubCategory,
    handleSubmit,
    handleEditSubCategory,
    handleDeleteSubCategory,
  } = useCategory();

  return (
    <div className="category-page">
      {showForm ? (
        <>
          <CategoryForm
            formData={formData}
            selectedCategory={selectedCategory}
            handleCategoryChange={handleCategoryChange}
            handleSubCategoryChange={handleSubCategoryChange}
            addSubCategory={addSubCategory}
            removeSubCategory={removeSubCategory}
            handleSubmit={handleSubmit}
            closePopup={() => {
              setSelectedCategory(null);
              setShowForm(false);
            }}
          />

          <CategoryGrid
            categories={categories}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onEditSubCategory={handleEditSubCategory}
            onDeleteSubCategory={handleDeleteSubCategory}
          />

          <Pagination page={page} totalPages={totalPages} setPage={setPage} />
        </>
      ) : (
        <>
          <CategoryHeader
            onAddCategory={() => {
              setSelectedCategory(null);
              setShowForm(true);
            }}
          />

          <CategoryStats stats={stats} />

          <CategorySearchFilter search={search} setSearch={setSearch} />

          <CategoryGrid
            categories={categories}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onEditSubCategory={handleEditSubCategory}
            onDeleteSubCategory={handleDeleteSubCategory}
          />

          <Pagination page={page} totalPages={totalPages} setPage={setPage} />
        </>
      )}
    </div>
  );
};

export default CategoryMasterPage;
