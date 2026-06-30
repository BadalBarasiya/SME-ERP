import { useState } from "react";
import "./PartyTable.css";

import SearchFilter from "./SearchFilter";
import PartyRow from "./PartyRow";

const PartyTable = () => {

  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("");

  const partyList = [
    {
      name: "Mahadev Industry",
      type: "Customer",
      gstin: "24AAMCC7842H1ZG",
      contact: "9429269295",
      email: "mahadev.industry@gmail.com",
    },
    {
      name: "Mahadev Industry",
      type: "Vendor",
      gstin: "24AAMCC7842H1ZG",
      contact: "9429269295",
      email: "mahadev.industry@gmail.com",
    },
    {
      name: "Mahadev Industry",
      type: "Vendor",
      gstin: "24AAMCC7842H1ZG",
      contact: "9429269295",
      email: "mahadev.industry@gmail.com",
    },
    {
      name: "Mahadev Industry",
      type: "Vendor",
      gstin: "24AAMCC7842H1ZG",
      contact: "9429269295",
      email: "mahadev.industry@gmail.com",
    },
    {
      name: "Mahadev Industry",
      type: "Vendor",
      gstin: "24AAMCC7842H1ZG",
      contact: "9429269295",
      email: "mahadev.industry@gmail.com",
    },
  ];

  const filteredData = partyList.filter((party) => {
    const matchSearch = party.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchType =
      filterType === "" || party.type === filterType;

    return matchSearch && matchType;
  });

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
            <th>Party Name</th>
            <th>Type</th>
            <th>GSTIN</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          {filteredData.map((party, index) => (
            <PartyRow
              key={index}
              party={party}
            />
          ))}

        </tbody>

      </table>

    </div>
  );
};

export default PartyTable;
