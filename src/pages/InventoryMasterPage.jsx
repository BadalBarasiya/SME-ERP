import { useState } from "react";
import ItemForm from "../components/ItemMaster/ItemForm";
import ItemHeader from "../components/ItemMaster/ItemHeader";
import ItemStats from "../components/ItemMaster/ItemStats";
import ItemTable from "../components/ItemMaster/ItemTable";
import "../components/ItemMaster/ItemMaster.css";

const InventoryMasterPage = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="item-page">
      {showForm ? (
        <>        <ItemForm
          title="Add New Inventory"
          onCancel={() => setShowForm(false)}
        />
                  <ItemTable />
                  </>


      ) : (
        <>
          <ItemHeader
            title="Inventory Master"
            buttonText="Add Inventory"
            onAddItem={() => setShowForm(true)}
          />
          <ItemStats />
          <ItemTable />
        </>
      )}
    </div>
  );
};

export default InventoryMasterPage;
