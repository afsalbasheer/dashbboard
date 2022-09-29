import './Sidebar.css'
import { LineStyle, Timeline, TrendingUp,Group,ProductionQuantityLimits
,PaidOutlined,EqualizerOutlined,EmailOutlined,FeedbackOutlined,ForumOutlined
} from '@mui/icons-material';
import { useNavigate } from "react-router-dom";


function Sidebar() {
    let navigate = useNavigate();
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitile">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem" onClick={()=>navigate('/dashboard')}>
                        <LineStyle className='sidebarIcon'/>
                        Home
                    </li>
                    <li className="sidebarListItem" onClick={()=>navigate('/dashboard/users')}>
                            <Group className='sidebarIcon'/>
                            Users
                        {/* <a href='/dashboard/users'>
                            <Group className='sidebarIcon'/>
                            Users
                        </a> */}
                    </li>
                    <li className="sidebarListItem">
                        <Timeline className='sidebarIcon'/>
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUp className='sidebarIcon'/>
                        Sales
                    </li>
                </ul>
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitile">Quick Menu</h3>
                <ul className="sidebarList">
                    
                    <li className="sidebarListItem">
                        <ProductionQuantityLimits className='sidebarIcon'/>
                        Products
                    </li>
                    <li className="sidebarListItem">
                        <PaidOutlined className='sidebarIcon'/>
                        Transactions
                    </li>
                    <li className="sidebarListItem">
                        <EqualizerOutlined className='sidebarIcon'/>
                        Reports
                    </li>
                </ul>
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitile">Notification</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem ">
                        <EmailOutlined className='sidebarIcon'/>
                        Mail
                    </li>
                    <li className="sidebarListItem">
                        <FeedbackOutlined className='sidebarIcon'/>
                        Feedback
                    </li>
                    <li className="sidebarListItem">
                        <ForumOutlined className='sidebarIcon'/>
                        Messages
                    </li>
                </ul>
            </div>

            
            
        </div>
    </div>
  )
}

export default Sidebar