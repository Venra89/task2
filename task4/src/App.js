import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import InputDashboard from './components/InputDashboard';
import { useState } from 'react';

function App() {

  const [data,setData] = useState({});

  return (
    <div className="App">
    <InputDashboard data={data} ></InputDashboard>
      <Dashboard data={data} ></Dashboard>
    </div>
  );
}

export default App;
