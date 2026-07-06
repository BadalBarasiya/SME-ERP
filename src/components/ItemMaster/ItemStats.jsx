const ItemStats = ({ stats }) => {
  return (
    <div className="item-stats">
      <div className="item-stat-card">
        <h4>Total Items</h4>
        <h2>{stats?.totalItems || 0}</h2>
      </div>

      <div className="item-stat-card">
        <h4>Total Categories</h4>
        <h2>{stats?.totalCategories || 0}</h2>
      </div>

      {/* <div className="item-stat-card">
        <h4>Low Stock Items</h4>
        <h2>{stats?.lowStockItems || 0}</h2>
      </div> */}
    </div>
  );
};

export default ItemStats;