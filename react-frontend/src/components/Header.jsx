import logo from '../logo&Img/logo.png.png'
import searchIcon from '../logo&Img/searchIcon.png'
import notification from '../logo&Img/notification.png'
import profilePic from '../logo&Img/employ.png'

import '../CSS-Files/header.css'
function Header (){
    return(
        <header>
            <div className="left-header">
                <img className="logo" src={logo}/>

            </div>
            <div className="middle-header">
               <input className="Search-bar" placeholder="Search by employ name" />
                <button className="search-button">
                    <img className="search-icon" src={searchIcon}/>
                </button>
            </div>
            <div className="right-header">
                <img className="notification-img" src={notification}/>
                <div className="profile-pic-div">
                    <img className="profile-image" src={profilePic} /> 
                </div>
            </div>

        </header>
    )
}

export default Header;