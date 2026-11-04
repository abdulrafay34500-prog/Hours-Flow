import { BrowserRouter, Routes, Route, } from "react-router-dom"
import EmployeePage from "./EmployeePage"
import Login from './LoginPage'
function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/employesPage" element={<EmployeePage />} />
        <Route path="/"  element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
