import React from "react";

const CategoryStats = ({ stats }) => {
  return (
    <div className="category-stats">
      <div className="category-stat-card">
        <h4>Total Categories</h4>
        <h2>{stats?.totalCategories || 32}</h2>
      </div>

      <div className="category-stat-card">
        <h4>Total Sub Categories</h4>
        <h2>{stats?.totalSubCategories || 84}</h2>
      </div>
    </div>
  );
};

export default CategoryStats;
