import logo from '../logo&Img/logo.png.png'
import searchIcon from '../logo&Img/searchIcon.png'
import notification from '../logo&Img/notification.png'
import profilePic from '../logo&Img/employ.png'
import { useEffect } from 'react'

import '../CSS-Files/header.css'

function Header({ userEmail }) {


    useEffect(()=>{
        if(userEmail){
            localStorage.setItem('email' , userEmail)
        }
    },[userEmail])

    let employEmail=localStorage.getItem('email') || 'Loading...'

    return (
        <header className="main-header">

            <div className="left-header">
                <img className="logo" src={logo} alt="HoursFlow" />
            </div>

            <div className="middle-header">
                <img
                    className="search-icon"
                    src={searchIcon}
                    alt=""
                />
                <input
                    className="Search-bar"
                    placeholder="Search employees..."
                />
                <button className="search-button">
                    Search
                </button>
            </div>

            <div className="right-header">

                <button className="notification-button">
                    <img
                        className="notification-img"
                        src={notification}
                        alt="Notifications"
                    />
                    <span className="notification-dot"></span>
                </button>

                <div className="header-user">

                    <div className="profile-pic-div">
                        <div className="profile-image">
                            
                            
                        </div>
                    </div>

                    <div className="user-info">
                        <span className="user-name">Account</span>
                        <span className="user-email">
                            {employEmail}
                        </span>
                    </div>

                </div>

            </div>

        </header>
    )
}

export default Header
