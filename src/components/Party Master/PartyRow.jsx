import { LuPencil, LuTrash2 } from "react-icons/lu";

const PartyRow = ({ party }) => {
  return (
    <tr>

      <td>{party.name}</td>

      <td>{party.type}</td>

      <td>{party.gstin}</td>

      <td>{party.contact}</td>

      <td>{party.email}</td>

      <td>

        <button className="edit-btn">
          <LuPencil />
        </button>

        <button className="delete-btn">
          <LuTrash2 />
        </button>

      </td>

    </tr>
  );
};

export default PartyRow;
