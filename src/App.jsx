import './App.css'
import Dashboard from './components/Dashboard';
import MapContainer from "./components/MapContainer";
import { Route, Routes } from 'react-router-dom'


export default function App() {


  return (
    <Routes>
    <Route path="/" element={<MapContainer />}/>
    <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}
