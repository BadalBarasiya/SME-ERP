// import ItemForm from "../components/ItemMaster/ItemForm";
// import ItemHeader from "../components/ItemMaster/ItemHeader";
// import ItemStats from "../components/ItemMaster/ItemStats";
// import ItemTable from "../components/ItemMaster/ItemTable";
// import useItem from "../hooks/useItem";
// import "../components/ItemMaster/ItemMaster.css";
// import Pagination from "../common/Pagination";
// import ItemSearchFilter from "../components/ItemMaster/ItemSearchFilter";
// const ItemMasterPage = () => {
//   const {
//     page,
//     totalPages,
//     setPage,
//     items,
//     stats,
//     search,
//     setSearch,
//     showForm,
//     setShowForm,
//     selectedItem,
//     handleEdit,
//     handleDelete,
//     handleItemAdded,
//     categories,
//   categoryFilter,
//   setCategoryFilter,
//   } = useItem();

//   return (
//     <div className="item-page">
//       {showForm ? (
//         <>
//           <ItemForm
//             selectedItem={selectedItem}
//             onItemAdded={handleItemAdded}
//             onCancel={() => setShowForm(false)}
//           />

//           <ItemTable
//             items={items}
//             search={search}
//             setSearch={setSearch}
//             onEdit={handleEdit}
//             onDelete={handleDelete}
//           />
//           <Pagination page={page} totalPages={totalPages} setPage={setPage} />
//         </>
//       ) : (
//         <>
//           <ItemHeader onAddItem={() => setShowForm(true)} />

//           <ItemStats stats={stats} />

//           <ItemTable
//             items={items}
//             search={search}
//             setSearch={setSearch}
//             onEdit={handleEdit}
//             onDelete={handleDelete}
//           />
//           <Pagination page={page} totalPages={totalPages} setPage={setPage} />
//         </>
//       )}
//     </div>
//   );
// };

// export default ItemMasterPage;

import ItemForm from "../components/ItemMaster/ItemForm";
import ItemHeader from "../components/ItemMaster/ItemHeader";
import ItemSearchFilter from "../components/ItemMaster/ItemSearchFilter";
import ItemStats from "../components/ItemMaster/ItemStats";
import ItemTable from "../components/ItemMaster/ItemTable";
import Pagination from "../common/Pagination";
import useItem from "../hooks/useItem";
import "../components/ItemMaster/ItemMaster.css";

const ItemMasterPage = () => {
  const {
    page,
    totalPages,
    setPage,

    items,
    stats,

    search,
    setSearch,

    categories,
    categoryFilter,
    setCategoryFilter,

    showForm,
    setShowForm,

    selectedItem,

    handleEdit,
    handleDelete,
    handleItemAdded,
  } = useItem();

  return (
    <div className="item-page">
      {/* Header */}
      <ItemHeader onAddItem={() => setShowForm(true)} />

      {/* Stats */}
      <ItemStats stats={stats} />

      {/* Search & Filter */}
      <ItemSearchFilter
        search={search}
        setSearch={setSearch}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        categories={categories}
      />

      {/* Form */}
      {showForm && (
        <ItemForm
          selectedItem={selectedItem}
          onItemAdded={handleItemAdded}
          onCancel={() => setShowForm(false)}
        />
      )}

      {/* Table */}
      <ItemTable
        items={items}
        search={search}
        setSearch={setSearch}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {/* Pagination */}
      <Pagination
        page={page}
        totalPages={totalPages}
        setPage={setPage}
      />
    </div>
  );
};

export default ItemMasterPage;