// import PartyForm from "../PartyForm/PartyForm";
// import PartyTable from "../Party Master/PartyTable";

// import "../Party Master/PartyMaster.css";

// const PartyMasterPage = () => {
//   return (
//     <div className="party-master-page">
//       <PartyForm/>
//       <PartyTable/>
//     </div>
//   );
// };

// export default PartyMasterPage;

import { useState } from "react";
import PartyForm from "../components/PartyForm/PartyForm";
import PartyTable from "../components/Party Master/PartyTable";
import PartyHeader from "../components/Party Master/PartyHeader";
import PartyStats from "../components/Party Master/PartyStats";
import "../components/Party Master/PartyMaster.css";


const PartyMasterPage = () => {

  const [showForm, setShowForm] = useState(false);

  return (
    <div className="party-page">

      {showForm ? (
        <>
          <PartyForm
            onCancel={() => setShowForm(false)}
          />

          <PartyTable />
        </>
      ) : (
        <>
          <PartyHeader
            onAddParty={() => setShowForm(true)}
          />

          <PartyStats />

          <PartyTable />
        </>
      )}

    </div>
  );
};

export default PartyMasterPage;
