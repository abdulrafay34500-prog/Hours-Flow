import { BrowserRouter, Routes, Route, } from "react-router-dom"
import EmployeePage from "./EmployeePage"
import Login from './LoginPage'
import SighnupPage from './SighnupPage'


function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Login />} />
        <Route path="/employesPage" element={<EmployeePage />} />
        <Route path='/Sighnuppage'  element={<SighnupPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
