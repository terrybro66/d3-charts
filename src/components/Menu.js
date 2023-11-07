import React from "react";

function Menu({ onChange }) {
  const handleSelectChange = (event) => {
    const value = event.target.value;
    onChange(value);
  };

  return (
    <div>
      <label htmlFor="chart-select">Select a chart:</label>
      <select id="chart-select" onChange={handleSelectChange}>
        <option value="bar">Bar Chart</option>
        <option value="line">Line Chart</option>
      </select>
    </div>
  );
}

export default Menu;
