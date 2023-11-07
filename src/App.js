import "./App.css";
import Chart from "./components/Chart";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 200 },
  { name: "Group D", value: 100 },
];

function App() {
  return (
    <div className="App">
      <Chart data={data} />
    </div>
  );
}

export default App;
