import './App.css';
import Axis from './Components/AllAxis/Axis';
import AxisTool from './Components/AllAxis/AxisTool';
import Chart from './Components/Chart/Chart';

function App() {
  return (
    <div className="App">
      <h1 className='head-1'>Rechart implement for practice</h1>
     <Chart></Chart>
     <Axis></Axis>
     <AxisTool></AxisTool>
    </div>
  );
}

export default App;
