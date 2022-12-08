import './App.css';
import FrankfurtFilter from './components.js/FrankfurtFilter/FrankfurtFilter';
import data from './timeTableData.json'
// import TimeTable from './components.js/TimeTable/TimeTable';


function App() {
  return (
    <div className="App">
      <FrankfurtFilter timeTableData={data.fahrplananzeige} />
      {/* <TimeTable timeTableData={data.fahrplananzeige} /> */}
    </div>
  );
}

export default App;
