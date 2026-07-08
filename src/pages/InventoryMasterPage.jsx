// import { useState } from "react";
// import ItemForm from "../components/ItemMaster/ItemForm";
// import ItemHeader from "../components/ItemMaster/ItemHeader";
// import ItemStats from "../components/ItemMaster/ItemStats";
// import ItemTable from "../components/ItemMaster/ItemTable";
// import "../components/ItemMaster/ItemMaster.css";

// const InventoryMasterPage = () => {
//   const [showForm, setShowForm] = useState(false);

//   return (
//     <div className="item-page">
//       {showForm ? (
//         <>
//           {" "}
//           <ItemForm
//             title="Add New Inventory"
//             onCancel={() => setShowForm(false)}
//           />
//           <ItemTable />
//         </>
//       ) : (
//         <>
//           <ItemHeader
//             title="Inventory Master"
//             buttonText="Add Inventory"
//             onAddItem={() => setShowForm(true)}
//           />
//           <ItemStats />
//           <ItemTable />
//         </>
//       )}
//     </div>
//   );
// };

// export default InventoryMasterPage;

import InventoryHeader from "../components/InventoryMaster/InventoryHeader";
import InventoryStats from "../components/InventoryMaster/InventoryStats";
import InventorySearchFilter from "../components/InventoryMaster/InventorySearchFilter";
import InventoryTable from "../components/InventoryMaster/InventoryTable";
import InventoryForm from "../components/InventoryMaster/InventoryForm";
import Pagination from "../common/Pagination";
import useInventory from "../hooks/useInventory";
import "../components/InventoryMaster/InventoryMaster.css";

const InventoryMasterPage = () => {
  const {
    inventory,
    stats,
    categories,

    search,
    setSearch,

    categoryFilter,
    setCategoryFilter,

    statusFilter,
    setStatusFilter,

    page,
    totalPages,
    setPage,

    // Form
    showForm,
    setShowForm,
    selectedInventory,
    formData,
    handleChange,
    handleUpdate,

    // Actions
    handleEdit,
    handleDelete,
  } = useInventory();

  return (
    <div className="inventory-page">
      <InventoryHeader />

      <InventoryStats stats={stats} />

      <InventorySearchFilter
        search={search}
        setSearch={setSearch}
        categories={categories}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />

      {/* Inventory Update Form */}
      {showForm && (
        <InventoryForm
          selectedInventory={selectedInventory}
          formData={formData}
          handleChange={handleChange}
          handleUpdate={handleUpdate}
          onCancel={() => setShowForm(false)}
        />
      )}

      {/* Inventory Table */}
      <InventoryTable
        inventory={inventory}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <Pagination
        page={page}
        totalPages={totalPages}
        setPage={setPage}
      />
    </div>
  );
};

export default InventoryMasterPage;