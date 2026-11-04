import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import EmployeePage from "./EmployeePage"
import Header from './components/Header'
import SideBar from './components/SideBar'

function App() {
 
  return (
    <BrowserRouter>
      <Header />
      <SideBar />
      <Routes>
        <Route path="/" element={<EmployeePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
