import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import CategoryMasterPage from "./pages/CategoryMasterPage";
import InventoryMasterPage from "./pages/InventoryMasterPage";
import ItemMasterPage from "./pages/ItemMasterPage";
import PartyMasterPage from "./pages/PartyMasterPage";
import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <>
      <div className="layout">
        <Sidebar />

        <div className="main">
          <Navbar />

          <div className="content">
            {/* Pages */}
            <Routes>
              <Route path="/" element={<Dashboard />} />

              <Route path="/category-master" element={<CategoryMasterPage />} />
              <Route path="/party-master" element={<PartyMasterPage />} />
              <Route path="/item-master" element={<ItemMasterPage />} />
              <Route path="/inventory-master" element={<InventoryMasterPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </div>
      </div>{" "}
    </>
  );
}

export default App;
