import React, { useState } from "react";
import "./App.css";
import BarChart from "./components/BarChart";
import ScatterChart from "./components/ScatterChart";
import Menu from "./components/Menu";

const barData = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 200 },
  { name: "Group D", value: 100 },
];

const scatterData = [
  { id: 1, x: 30, y: 20 },
  { id: 2, x: 90, y: 60 },
  { id: 3, x: 50, y: 40 },
  { id: 4, x: 70, y: 80 },
  { id: 5, x: 60, y: 10 },
  { id: 6, x: 40, y: 30 },
  { id: 7, x: 80, y: 50 },
  { id: 8, x: 20, y: 70 },
];

function App() {
  const [chartType, setChartType] = useState("bar");

  const handleChartTypeChange = (value) => {
    setChartType(value);
  };
  return (
    <div>
      <Menu onChange={handleChartTypeChange} />
      {chartType === "bar" && <BarChart data={barData} />}
      {chartType === "line" && <ScatterChart data={scatterData} />}
    </div>
  );
}

export default App;
