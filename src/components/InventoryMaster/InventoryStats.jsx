const InventoryStats = ({ stats }) => {
  return (
    <div className="inventory-stats">
      <div className="inventory-stat-card">
        <h4>Total Items</h4>
        <h2>{stats.totalItems}</h2>
      </div>

      <div className="inventory-stat-card">
        <h4>Total Stock (Kg)</h4>
        <h2>{stats.totalStockKg}</h2>
      </div>

      <div className="inventory-stat-card">
        <h4>Total Pieces</h4>
        <h2>{stats.totalPieces}</h2>
      </div>

      <div className="inventory-stat-card">
        <h4>Low Stock Items</h4>
        <h2>{stats.lowStockItems}</h2>
      </div>
    </div>
  );
};

export default InventoryStats;