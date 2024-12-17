import React from "react";

const Filters: React.FC = () => {
  return (
    <div className="filters-container">
      <h3>Filters</h3>
      <div>
        <label>Location</label>
        <input type="text" placeholder="e.g., Kyiv, Ukraine" />
      </div>
      <div>
        <h4>Vehicle equipment</h4>
        {/* Чекбокси */}
      </div>
      <div>
        <h4>Vehicle type</h4>
        {/* Типи транспортних засобів */}
      </div>
      <button>Search</button>
    </div>
  );
};

export default Filters;
