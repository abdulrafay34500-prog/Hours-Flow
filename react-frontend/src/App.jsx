import { HashRouter, Routes, Route, } from "react-router-dom"
import EmployeePage from "./EmployeePage"
import Login from './LoginPage'
import SighnupPage from './SighnupPage'
import WeekleyReport from './WeekleyReport'
import Payrollpage from './components/Payrollpage'

function App() {
 Payrollpage
  return (
    <HashRouter>
      <Routes>
        <Route path="/"  element={<Login />} />
        <Route path="/employesPage" element={<EmployeePage />} />
        <Route path='/Sighnuppage'  element={<SighnupPage />}/>
        <Route path='/weekleyReport'  element={<WeekleyReport />}/>
        <Route path='/payrollPage' element={<Payrollpage />} />
      </Routes>
    </HashRouter>
  )
}

export default App
