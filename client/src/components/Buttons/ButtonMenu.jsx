import "./ButtonMenu.css";

export const ButtonMenu = ({ handleFilter, textButton, isActive }) => {
  return (
    <button
      className={isActive ? "active" : "filter-btn"}
      onClick={handleFilter}
    >
      {" "}
      {textButton}
    </button>
  );
};
