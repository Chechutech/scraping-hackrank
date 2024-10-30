import { filterTypes } from "./filterTypes";
import { useFiltersNews } from "../../hooks/useFiltersNews";

export const Chips = () => {
  const { filters, deleteChip } = useFiltersNews();

  let filter_By_Comments = filters.filter_by;

  let hasFilter_By_Comments = Boolean(filter_By_Comments);
  let filter_Ammount_Words = filters.amounts_Words;
  let hasFilter_Ammount_Words = Boolean(filter_Ammount_Words);

  const onDeleteChip = (filterValues) => {
    console.log(filters, "value");
    deleteChip(filterValues);
  };

  return (
 

    <ul className="chip-container">
      {hasFilter_By_Comments && (
        <li>
          <button onClick={() => onDeleteChip(filterTypes.filter_by)}>
            Order ascending by: { filter_By_Comments } <span>x</span>
          </button>
        </li>
      )}
      {hasFilter_Ammount_Words && (
        <li>
          <button onClick={() => onDeleteChip(filterTypes.amounts_Words)}>
           
            Show {filter_Ammount_Words} Words <span>x</span>
          </button>
        </li>
      )}
    </ul>
   
  );
};
