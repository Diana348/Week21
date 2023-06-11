import "./App.css";
import PieChart from "./components/ui/PieChart";
import Header from "./components/ui/Header";

function App() {
  const data = [
    ["Task", "Hours per Day"],
    ["Работа", 11],
    ["Еда", 2],
    ["Учёба", 2],
    ["Тренировки", 2],
    ["Сон", 7],
  ];
  const options = {
    title: "График",
  };

  return (
    <div className="App">
      <Header />
      <PieChart data={data} options={options} visible={true} />
    </div>
  );
}

export default App;
