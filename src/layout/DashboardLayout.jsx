import { Outlet } from "react-router-dom"
import SideBar from "../components/navigations/sidebar/SideBar"
import TopBar from "../components/navigations/topbar/TopBar"
import './dashboard.css'


const DashboardLayout = () => {
  return (
    <div id="layout">
        <SideBar/>
      <div>
          <TopBar/>
          <Outlet/>
        </div>
       
    </div>
  )
}

export default DashboardLayout