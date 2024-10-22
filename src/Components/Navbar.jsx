import './Navbar.css'
import logo from '../assets/logo.svg'
import { useRef } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../assets/menu_open.svg'
import menu_close from '../assets/menu_close.svg'
const Navbar = () => {
  const menuRef= useRef();
  const openMenu= ()=>{
    menuRef.current.style.right="0";  }
  const closeMenu= ()=>{
      menuRef.current.style.right="-350px";  }  

  return (
    <div className='navbar' >
    <img src={logo} alt=''/>
    <img src={menu_open} alt="" onClick={openMenu} className='nav-mob-open'/>
    <ul ref={menuRef} className="nav-menu">
      <img src={menu_close}  onClick={closeMenu} alt="" className="nav-mob-close" />
    <li> <AnchorLink className='anchorlink' offset={50} href='#home'>Home</AnchorLink></li>
    <li><AnchorLink className='anchorlink' offset={50} href='#about'>About me</AnchorLink></li>
    <li><AnchorLink className='anchorlink' offset={50} href='#services'>Services</AnchorLink></li>
    <li><AnchorLink className='anchorlink' offset={50} href='#work'>Portfolio</AnchorLink></li>
    <li><AnchorLink className='anchorlink' offset={50} href='#contact'>Contact</AnchorLink></li>
    </ul>
    <div className="nav-connect"><AnchorLink className='anchorlink' offset={50} href='#contact'>Connect With me</AnchorLink></div>
    </div>
  )
}

export default Navbar