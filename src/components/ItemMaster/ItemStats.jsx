const ItemStats = () => {
  const cards = [
    {
      title: "Total Items",
      value: 359,
    },
    {
      title: "Total Low Stock Items",
      value: 4,
    },
  ];

  return (
    <div className="item-stats">
      {cards.map((card) => (
        <div className="item-stat-card" key={card.title}>
          <h4>{card.title}</h4>
          <h2>{card.value}</h2>
        </div>
      ))}
    </div>
  );
};

export default ItemStats;
