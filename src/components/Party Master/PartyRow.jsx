import { LuPencil, LuTrash2 } from "react-icons/lu";

const PartyRow = ({ party, onEdit, onDelete }) => {
  return (
    <tr>
      <td>{party.partyName}</td>

      <td>{party.partyType}</td>

      <td>{party.gstNo}</td>

      <td>{party.mobile}</td>

      <td>{party.email}</td>

      <td>
        <button className="edit-btn" onClick={() => onEdit(party)}>
          <LuPencil />
        </button>

        <button className="delete-btn" onClick={() => onDelete(party._id)}>
          <LuTrash2 />
        </button>
      </td>
    </tr>
  );
};

export default PartyRow;
