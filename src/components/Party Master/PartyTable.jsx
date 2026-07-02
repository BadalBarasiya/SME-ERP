import "./PartyTable.css";

import SearchFilter from "./SearchFilter";
import PartyRow from "./PartyRow";

const PartyTable = ({
  parties,
  onEdit,
  onDelete,
  search,
  setSearch,
  filterType,
  setFilterType,
  sortBy,
  setSortBy,
  order,
  setOrder,
}) => {
  return (
    <div className="table-card">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filterType={filterType}
        setFilterType={setFilterType}
      />

      <table>
        <thead>
          <tr>
            <th
              onClick={() => {
                setSortBy("partyName");

                setOrder((prev) => (prev === "asc" ? "desc" : "asc"));
              }}
              style={{ cursor: "pointer" }}
            >
              Party Name
              {sortBy === "partyName" ? (order === "asc" ? "▲" : "▼") : ""}
            </th>
            <th>Type</th>
            <th>GSTIN</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {parties.length > 0 ? (
            parties.map((party) => (
              <PartyRow
                key={party._id}
                party={party}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>
                No Parties Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PartyTable;
