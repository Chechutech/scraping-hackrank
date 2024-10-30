import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const useFiltersNews = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({});

  useEffect(() => {
    const urlFilters = searchParams.get("filters");

    if (urlFilters) {
      const filterValues = JSON.parse(urlFilters);
      setFilters(filterValues);
    } else {
      setFilters({});
    }
  }, [searchParams]);

  const addFilters = (filters) => {
    const newParams = new URLSearchParams();
    if (Object.keys(filters).length === 0) {
      newParams.delete("filters");
    } else {
      newParams.set("filters", JSON.stringify(filters));
    }
    setSearchParams(newParams);
  };

  const deleteChip = (filterKey) => {
    const newParams = new URLSearchParams(searchParams);

    const updatedFilters = { ...filters };
    delete updatedFilters[filterKey];

    if (Object.keys(updatedFilters).length > 0) {
      newParams.set("filters", JSON.stringify(updatedFilters));
    } else {
      newParams.delete("filters");
    }

    setSearchParams(newParams);
  };

  return {
    filters,
    addFilters,
    deleteChip,
  };
};
