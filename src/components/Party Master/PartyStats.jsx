const PartyStats = ({ stats }) => {
  const cards = [
    {
      title: "Total Customers",
      value: stats.totalCustomers,
    },
    {
      title: "Total Vendors",
      value: stats.totalVendors,
    },
    {
      title: "Total Parties",
      value: stats.totalParties,
    },
  ];

  return (
    <div className="stats">
      {cards.map((card, index) => (
        <div className="stat-card" key={index}>
          <h4>{card.title}</h4>
          <h2>{card.value}</h2>
        </div>
      ))}
    </div>
  );
};

export default PartyStats;
