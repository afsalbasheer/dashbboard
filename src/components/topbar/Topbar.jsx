import React from 'react'
import './Topbar.css'
import { NotificationsNone,Language,Settings } from '@mui/icons-material';
import { useAtom } from 'jotai'
import { isLoggedInAtom } from '../../store/atoms';

function Topbar() {
    const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom)
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className='logo'>Dashboard</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer ">
                    <NotificationsNone />
                    <span className="topIconBag">2</span>
                </div>
                <div className="topbarIconContainer ">
                    <Language />                    
                </div>
                <div className="topbarIconContainer ">
                    <Settings />                   
                </div>
                <div onClick={()=>setIsLoggedIn(false)}>
                    <img className='topAvatar' src="https://reqres.in/img/faces/7-image.jpg" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Topbar