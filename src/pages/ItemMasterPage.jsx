import { useState } from "react";
import ItemForm from "../components/ItemMaster/ItemForm";
import ItemHeader from "../components/ItemMaster/ItemHeader";
import ItemStats from "../components/ItemMaster/ItemStats";
import ItemTable from "../components/ItemMaster/ItemTable";
import "../components/ItemMaster/ItemMaster.css";

const ItemMasterPage = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="item-page">
      {showForm ? (
        <>
        <ItemForm onCancel={() => setShowForm(false)} />
          <ItemTable/>
</>
      ) : (
        <>
          <ItemHeader onAddItem={() => setShowForm(true)} />
          <ItemStats />
          <ItemTable />
        </>
      )}
    </div>
  );
};

export default ItemMasterPage;
