import dashbordImg from '../logo&Img/dashboard.png'
import employImg from '../logo&Img/employ.png'
import settingImg from '../logo&Img/setting.png'
import weekleyicon from '../logo&Img/weeklet-icon.png.png'
import {Link} from 'react-router-dom'

import '../CSS-Files/sidebar.css'
function SideBar() {
    return(
        <div>
            <div className="middle-sidebar">
                <div className="Dashboard-div">
                    <img className="dashboard-image" src={dashbordImg} alt="My Image"/>
                    <p className="dashboard-text">Dashboard</p>
                </div>
                <Link to="/employesPage" className="employes-div"
                 style={{textDecoration : 'none' }}
                >
                    <img className="employes-logo" src={employImg}/>
                    <p className="employ-text">Employes</p>
                </Link>
                <div className="setting-div">
                    <img className="setting-image" src={settingImg}/>
                    <p className="setting-text">Settings</p>
                </div>
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