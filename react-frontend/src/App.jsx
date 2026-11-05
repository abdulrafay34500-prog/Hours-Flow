import { BrowserRouter, Routes, Route, } from "react-router-dom"
import EmployeePage from "./EmployeePage"
import Login from './LoginPage'
import AddingEmploy from './components/AddingEmploy'
function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Login />} />
        <Route path="/employesPage" element={<EmployeePage />} />
        <Route path="/addingEmploypage"  element={<AddingEmploy />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
