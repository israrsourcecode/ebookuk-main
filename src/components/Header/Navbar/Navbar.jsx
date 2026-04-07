import { NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const location = useLocation();

  const isServiceActive = location.pathname.startsWith('/ebook');

  return (
    <nav className='navbar'>
      <NavLink to="/" className='nav-logo'>
        <img src="/src/assets/images/logo.svg" alt="logo" />
      </NavLink>

      <ul>
        <li>
          <NavLink className='nav-hover' to="/">Home</NavLink>
        </li>

        <li>
          <NavLink className='nav-hover' to="/about">About Us</NavLink>
        </li>

        <li className='nav-drop'>
          <span className={`nav-hover ${isServiceActive ? 'active' : ''}`}>
            Services 
          </span>

          <ul className='dropdown'>
            <li><NavLink to="/ebook-writing">Ebook Writing</NavLink></li>
            <li><NavLink to="/ebook-editing">Ebook Editing</NavLink></li>
            <li><NavLink to="/ebook-publishing">Ebook Publishing</NavLink></li>
            <li><NavLink to="/ebook-cover-design">Ebook Cover Design</NavLink></li>
            <li><NavLink to="/ebook-marketing">Ebook Marketing</NavLink></li>
          </ul>
        </li>

        <li>
          <NavLink className='nav-hover' to="/contact">Contact Us</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar