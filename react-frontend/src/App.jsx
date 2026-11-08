import { BrowserRouter, Routes, Route, } from "react-router-dom"
import EmployeePage from "./EmployeePage"
import Login from './LoginPage'
import SighnupPage from './SighnupPage'
import WeekleyReport from './WeekleyReport'

function App() {
 
  return (
    <BrowserRouter basename="/Hours-Flow">
      <Routes>
        <Route path="/"  element={<Login />} />
        <Route path="/employesPage" element={<EmployeePage />} />
        <Route path='/Sighnuppage'  element={<SighnupPage />}/>
        <Route path='/weekleyReport'  element={<WeekleyReport />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
