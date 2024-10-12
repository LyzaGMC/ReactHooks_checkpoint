// src/components/Filter.js
import React from 'react';

const Filter = ({ filterText, setFilterText, setFilterRating }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filtrer par titre"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <input
        type="number"
        placeholder="Filtrer par note"
        onChange={(e) => setFilterRating(e.target.value)}
      />
    </div>
  );
};

export default Filter;
