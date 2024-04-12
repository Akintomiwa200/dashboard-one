import { NavLink } from 'react-router-dom'
import './navlink.css'

const NavLinks = ({to, children, icon}) => {
  return (
    <>
      <NavLink  to={to}>
        <div id='navlinks'>
            <span>{icon}</span>
            <span>{children}</span>
        </div>
      </NavLink>
    </>
  )
}

export default NavLinks