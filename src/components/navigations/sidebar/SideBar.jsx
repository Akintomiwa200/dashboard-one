import NavLinks from '../navlinks/NavLinks'
import './sidebar.css'
import { FaHome, FaUser } from "react-icons/fa";
import {AiOutlineSetting} from 'react-icons/ai'

const links = [
    {to: "/", icon: <FaHome/>, label: "Home", id: 1},
    {to: "/user", icon: <FaUser/>, label: "Users", id: 2},
    {to: "/settings", icon: <AiOutlineSetting/>, label: "Settings", id: 3}
]
const SideBar = () => {
  return (
    <div id="side-wrapper">
      <div id='links'>
       {
         links.map(({to, icon, label, id}) => (
            <NavLinks key={id} to={to}> {icon} {label}</NavLinks>
            ))
       }
      </div>
    </div>
  )
}

export default SideBar
