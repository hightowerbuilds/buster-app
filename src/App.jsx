import './App.css'
import Dashboard from './components/Dashboard';
import MapContainer from "./components/MapContainer";
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom'


export default function App() {


  return (
    <Routes>
    <Route path='/login' element={<Login />} />
    <Route path="/" element={<MapContainer />}/>
    <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}
