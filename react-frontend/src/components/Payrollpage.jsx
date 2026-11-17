import SideBar from './SideBar'
import Header from './Header'
import '../CSS-Files/payroll.css'
function Payrollpage() {
    return(
        <>
        <Header/>
        <SideBar/>

        <div className="payroll-container-payrollPage">

            <div className="payroll-header">
                <div>
                    <h1>Payroll Management</h1>
                    <p>Manage employee salaries and payments</p>
                </div>

                <select className="month-select">
                    <option>November 2026</option>
                    <option>October 2026</option>
                    <option>September 2026</option>
                </select>
            </div>

            <div className="payroll-cards">

                <div className="payroll-card">
                    <div className="card-top">
                        <span>Total Monthly Payroll</span>
                        <div className="card-icon">£</div>
                    </div>
                    <h2>£12,450</h2>
                    <p>Total employee salaries</p>
                </div>

                <div className="payroll-card">
                    <div className="card-top">
                        <span>Employees Paid</span>
                        <div className="card-icon">✓</div>
                    </div>
                    <h2>18</h2>
                    <p>Successfully paid employees</p>
                </div>

                <div className="payroll-card">
                    <div className="card-top">
                        <span>Pending Payments</span>
                        <div className="card-icon">!</div>
                    </div>
                    <h2>5</h2>
                    <p>Payments awaiting completion</p>
                </div>

                <div className="payroll-card">
                    <div className="card-top">
                        <span>Average Salary</span>
                        <div className="card-icon">£</div>
                    </div>
                    <h2>£542</h2>
                    <p>Average monthly salary</p>
                </div>

            </div>

            <div className="payroll-table-container">

                <div className="table-header">
                    <div>
                        <h2>Employee Payroll</h2>
                        <p>Monthly salary breakdown for employees</p>
                    </div>

                    <input
                        type="text"
                        placeholder="Search employee..."
                        className="payroll-search"
                    />
                </div>

                <div className="table-scroll">
                    <table className="payroll-table">

                        <thead>
                            <tr>
                                <th>Employee</th>
                                <th>Working Hours</th>
                                <th>Hourly Wage</th>
                                <th>Total Salary</th>
                                <th>Payment Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>

                            <tr>
                                <td>
                                    <div className="employee-info">
                                        <div className="employee-avatar">R</div>
                                        <span>Rafay</span>
                                    </div>
                                </td>
                                <td>160 hrs</td>
                                <td>£12.00</td>
                                <td className="salary">£1,920.00</td>
                                <td>
                                    <span className="status paid">Paid</span>
                                </td>
                                <td>
                                    <button className="view-button">View</button>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <div className="employee-info">
                                        <div className="employee-avatar">A</div>
                                        <span>Ali</span>
                                    </div>
                                </td>
                                <td>145 hrs</td>
                                <td>£10.00</td>
                                <td className="salary">£1,450.00</td>
                                <td>
                                    <span className="status pending">Pending</span>
                                </td>
                                <td>
                                    <button className="view-button">View</button>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <div className="employee-info">
                                        <div className="employee-avatar">A</div>
                                        <span>Ahmed</span>
                                    </div>
                                </td>
                                <td>170 hrs</td>
                                <td>£15.00</td>
                                <td className="salary">£2,550.00</td>
                                <td>
                                    <span className="status paid">Paid</span>
                                </td>
                                <td>
                                    <button className="view-button">View</button>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <div className="employee-info">
                                        <div className="employee-avatar">H</div>
                                        <span>Hamza</span>
                                    </div>
                                </td>
                                <td>155 hrs</td>
                                <td>£11.00</td>
                                <td className="salary">£1,705.00</td>
                                <td>
                                    <span className="status pending">Pending</span>
                                </td>
                                <td>
                                    <button className="view-button">View</button>
                                </td>
                            </tr>

                        </tbody>

                    </table>
                </div>

            </div>

        </div>

        </>
    )
}
export default Payrollpage