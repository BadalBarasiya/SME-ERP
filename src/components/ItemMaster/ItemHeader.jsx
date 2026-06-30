import { LuPlus } from "react-icons/lu";

const ItemHeader = ({
  title = "Item Master",
  description = "Centralised management of all items with sizes, weights, categories, and stock details.",
  buttonText = "Add Item",
  onAddItem,
}) => {
  return (
    <div className="item-header">
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <button className="add-item-btn" type="button" onClick={onAddItem}>
        <LuPlus />
        {buttonText}
      </button>
    </div>
  );
};

export default ItemHeader;
