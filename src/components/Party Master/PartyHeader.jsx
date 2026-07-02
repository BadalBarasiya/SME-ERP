import { LuPlus } from "react-icons/lu";

const PartyHeader = ({ onAddParty }) => {
  return (
    <div className="party-header">
      <div>
        <h1>Party Master</h1>

        <p>
          Centralised management of customers and vendors with GST, contact, and
          role details.
        </p>
      </div>

      <button className="add-party-btn" type="button" onClick={onAddParty}>
        <LuPlus />
        Add Party
      </button>
    </div>
  );
};

export default PartyHeader;
