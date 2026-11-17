import dashbordImg from '../logo&Img/dashboard.png'
import employImg from '../logo&Img/employ.png'
import payrollImg from '../logo&Img/rupee.png'
import weekleyicon from '../logo&Img/weeklet-icon.png.png'
import {Link} from 'react-router-dom'

import '../CSS-Files/sidebar.css'
function SideBar() {
    return(
        <div>
            <div className="middle-sidebar">
                <Link to="/employesPage" className="employes-div"
                 style={{textDecoration : 'none' }}
                >
                    <img className="employes-logo" src={employImg}/>
                    <p className="employ-text">Employes</p>
                </Link>
                <Link to='/payrollPage' className="setting-div"
                 style={{textDecoration : 'none' }}
                >
                    <img className="setting-image" src={payrollImg}/>
                    <p className="setting-text">Payroll</p>
                </Link>
                <Link to="/weekleyReport" className="WeekLey=report-div setting-div"
                style={{textDecoration : 'none' }}
                >
                    <img className="setting-image" src={weekleyicon}/>
                    <p className="setting-text"> Weekley Report</p>
                </Link>

            </div>
        </div>
    )
}

export default SideBar;