import { useEffect } from "react";
import API from "../api/partyApi";
import PartyForm from "../components/PartyForm/PartyForm";
import PartyTable from "../components/Party Master/PartyTable";
import PartyHeader from "../components/Party Master/PartyHeader";
import PartyStats from "../components/Party Master/PartyStats";
import "../components/Party Master/PartyMaster.css";
import Pagination from "../common/Pagination";
import useParty from "../hooks/useParty";

const PartyMasterPage = () => {
  const {
    parties,
    setParties,

    stats,
    setStats,

    selectedParty,
    setSelectedParty,

    showForm,
    setShowForm,

    page,
    setPage,

    limit,

    search,
    setSearch,

    filterType,
    setFilterType,

    sortBy,
    setSortBy,

    order,
    setOrder,

    totalPages,
    setTotalPages,

    fetchParties,
    debouncedSearch,

    fetchStats,
    handleDelete,
    loadData,
    handlePartyAdded,
    handleEdit,
  } = useParty();

  return (
    <div className="party-page">
      {showForm ? (
        <>
          <PartyForm
            key={selectedParty?._id || "new-party"}
            selectedParty={selectedParty}
            onCancel={() => {
              setSelectedParty(null);
              setShowForm(false);
            }}
            onPartyAdded={handlePartyAdded}
          />
          <PartyTable
            onEdit={handleEdit}
            onDelete={handleDelete}
            parties={parties}
            search={search}
            setSearch={setSearch}
            filterType={filterType}
            setFilterType={setFilterType}
            sortBy={sortBy}
            setSortBy={setSortBy}
            order={order}
            setOrder={setOrder}
          />
          <Pagination page={page} totalPages={totalPages} setPage={setPage} />
        </>
      ) : (
        <>
          <PartyHeader
            onAddParty={() => {
              setSelectedParty(null);
              setShowForm(true);
            }}
          />

          <PartyStats stats={stats} />

          <PartyTable
            onEdit={handleEdit}
            onDelete={handleDelete}
            parties={parties}
            search={search}
            setSearch={setSearch}
            filterType={filterType}
            setFilterType={setFilterType}
            sortBy={sortBy}
            setSortBy={setSortBy}
            order={order}
            setOrder={setOrder}
          />
          <Pagination page={page} totalPages={totalPages} setPage={setPage} />
        </>
      )}
    </div>
  );
};

export default PartyMasterPage;

// Fetch Party List
// const fetchParties = async () => {
//   try {
//     const res = await API.get("/list");

//     setParties(res.data.parties);
//   } catch (error) {
//     console.log(error);
//   }
// };

// useEffect(() => {
//   console.log("✅ Debounced Search:", debouncedSearch);
// }, [debouncedSearch]);

// useEffect(() => {
//   const loadPageData = async () => {
//     try {
//       const partiesRes = await getParties(page, limit, search);
//       const statsRes = await API.get("/stats");

//       setParties(partiesRes.data.parties);
//       setTotalPages(partiesRes.data.totalPages);
//       setStats(statsRes.data.stats);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   loadPageData();
// }, [limit, page, search]);

// import { useState } from "react";
// import PartyForm from "../components/PartyForm/PartyForm";
// import PartyTable from "../components/Party Master/PartyTable";
// import PartyHeader from "../components/Party Master/PartyHeader";
// import PartyStats from "../components/Party Master/PartyStats";
// import "../components/Party Master/PartyMaster.css";

// const PartyMasterPage = () => {

//   const [showForm, setShowForm] = useState(false);

//   return (
//     <div className="party-page">

//       {showForm ? (
//         <>
//           <PartyForm
//             onCancel={() => setShowForm(false)}
//           />

//           <PartyTable />
//         </>
//       ) : (
//         <>
//           <PartyHeader
//             onAddParty={() => setShowForm(true)}
//           />

//           <PartyStats />

//           <PartyTable />
//         </>
//       )}

//     </div>
//   );
// };

// export default PartyMasterPage;

// const [selectedParty, setSelectedParty] = useState(null);
// const [showForm, setShowForm] = useState(false);
// const [parties, setParties] = useState([]);
// const [sortBy, setSortBy] = useState("createdAt");
// const [order, setOrder] = useState("desc");
// const [page, setPage] = useState(1);

// const [limit] = useState(10);
// const [filterType, setFilterType] = useState("");
// const [search, setSearch] = useState("");

// const [totalPages, setTotalPages] = useState(1);

// const [stats, setStats] = useState({
//   totalParties: 0,
//   totalCustomers: 0,
//   totalVendors: 0,
//   totalBoth: 0,
// });
