const PartyStats = () => {
  const cards = [
    {
      title: "Total Customers",
      value: 32,
    },
    {
      title: "Total Vendors",
      value: 24,
    },
    {
      title: "Total Parties",
      value: 56,
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