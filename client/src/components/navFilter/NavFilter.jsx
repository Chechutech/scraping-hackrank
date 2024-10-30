import { useEffect, useState } from "react";
import { useFiltersNews } from "../../hooks/useFiltersNews";
import "./NavFilter.css";

export const NavFilter = () => {
  const { filters, addFilters } = useFiltersNews();

  const [filterInput, setFilterInput] = useState({
    filter_by: filters.filter_by ?? "",
    amounts_Words: filters.amounts_Words ?? "",
  });

  useEffect(() => {
    setFilterInput({
      filter_by: filters.filter_by || "",
      amounts_Words: filters.amounts_Words || "",
    });
  }, [filters]);

  const onHandle__Filter = (e) => {
    setFilterInput((filter) => ({
      ...filter,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit__Filter = (e) => {
    e.preventDefault();
    const newFilters = {};
    if (filterInput.filter_by) {
      newFilters.filter_by = filterInput.filter_by;
    }
    if (filterInput.amounts_Words) {
      newFilters.amounts_Words = filterInput.amounts_Words;
    }

    addFilters(newFilters);
  };

  return (
    <section className="header-container">
      <form className="filter-center" onSubmit={onSubmit__Filter}>
        <div className="filter-group">
          <label htmlFor="filterBy" className="filter-label">
            Filter by:
          </label>
          <select
            id="filter_by"
            className="filter-select btn-input"
            value={filterInput.filter_by}
            onChange={onHandle__Filter}
          >
            <option value="">----</option>
            <option value="Comments">Comments</option>
            <option value="Points">Points</option>
          </select>
        </div>
        <div className="filter-group">
          <label htmlFor="qty-word" className="filter-label">
            Amount of Words:
          </label>
          <input
            type="number"
            id="amounts_Words"
            value={filterInput.amounts_Words}
            onChange={onHandle__Filter}
            className="btn-input words"
          />
        </div>
        <div className="filter-group">
          <button className="btn-input">Filter</button>
        </div>
      </form>
    </section>
  );
};
