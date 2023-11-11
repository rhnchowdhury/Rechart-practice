import './App.css';
import Axis from './Components/AllAxis/Axis';
import AxisTool from './Components/AllAxis/AxisTool';
import BarCharts from './Components/BarChart/BarCharts';
import Chart from './Components/Chart/Chart';
import ChartCompose from './Components/ChartComposed/ChartCompose';

function App() {
  return (
    <div className="App">
      <h1 className='head-1'>Rechart implement for practice</h1>
     <Chart></Chart>
     <Axis></Axis>
     <AxisTool></AxisTool>
     <BarCharts></BarCharts>
     <ChartCompose></ChartCompose>
    </div>
  );
}

export default App;
