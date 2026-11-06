import { BrowserRouter, Routes, Route, } from "react-router-dom"
import EmployeePage from "./EmployeePage"
import Login from './LoginPage'
import AddingEmploy from './components/AddingEmploy'
import SighnupPage from './SighnupPage'
import EditEmploy from './components/EditEmploy'


function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Login />} />
        <Route path="/employesPage" element={<EmployeePage />} />
        <Route path="/addingEmploypage"  element={<AddingEmploy />} />
        <Route path='/Sighnuppage'  element={<SighnupPage />}/>
        <Route path='/editemploy'  element={<EditEmploy />}/>
        editEmploy
      </Routes>
    </BrowserRouter>
  )
}

export default App
