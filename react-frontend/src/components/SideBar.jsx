import dashbordImg from '../logo&Img/dashboard.png'
import employImg from '../logo&Img/employ.png'
import settingImg from '../logo&Img/setting.png'
import weekleyicon from '../logo&Img/weeklet-icon.png.png'
import {Link} from 'react-router-dom'

import '../CSS-Files/sidebar.css'
function SideBar() {
    return(
        <sidebar>
            <div className="middle-sidebar">
                <div className="Dashboard-div">
                    <img className="dashboard-image" src={dashbordImg} alt="My Image"/>
                    <p className="dashboard-text">Dashboard</p>
                </div>
                <Link to="/" className="employes-div">
                    <img className="employes-logo" src={employImg}/>
                    <p className="employ-text">Employes</p>
                </Link>
                <div className="setting-div">
                    <img className="setting-image" src={settingImg}/>
                    <p className="setting-text">Settings</p>
                </div>
                <a href="weekletReport.html" className="WeekLey=report-div setting-div">
                    <img className="setting-image" src={weekleyicon}/>
                    <p className="setting-text"> Weekley Report</p>
                </a>

            </div>
        </sidebar>
    )
}

export default SideBar;