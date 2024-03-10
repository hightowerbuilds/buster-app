import './App.css'
import Dashboard from './components/Dashboard';
import MapContainer from "./components/MapContainer";
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom'
import { Counter } from './features/counter/Counter';


export default function App() {


  return (
    <Routes>
    <Route path='/login' element={<Login />} />
    <Route path="/" element={<MapContainer />}/>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/features/counter" element={<Counter/>}/>
    </Routes>
  )
}
