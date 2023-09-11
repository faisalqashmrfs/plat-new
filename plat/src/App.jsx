import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navber'

function App() {
  return (
    <>
    <Navbar/>
    <Outlet />
    </>
  )
};

export default App
