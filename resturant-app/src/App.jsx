import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRourter,Route,Route}from "react-router-dom";
import adminDashboard from "./pages/AdminDashboard"
import customerDashboard from "./pages/CustomerDashboard"
import UpdateResturant  from "./pages/UpdateResturant"


function App() {
  const [count, setCount] = useState(0)

  return (
   
<BrowserRourter>
<Routes>
  <Route path="/" element={<AdminDAshboard></AdminDAshboard>}/>
  <Route path="/admin/dashboard" element={<AdminDashboard/>}/>
  <Route path="/admin/restaurants/update/:id" element={<UpdateResturant/>}/>
  <Route path="/customers/dashboard" element={<CustomerDashboard/>}/>
</Routes>
</BrowserRourter>

  )
}

export default App
