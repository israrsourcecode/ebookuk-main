import './MobileNav.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink, useLocation } from 'react-router-dom'

const MobileNav = () => {
    // my navbar code
    const location = useLocation();
    const isServiceActive = location.pathname.startsWith('/ebook');
    // const [openDropdown, setOpenDropdown] = useState(false);
    // const handleDropdown = () => {
    //     setOpenDropdown(!openDropdown);
    // };
    const [openSeverice, setOpenService] = useState(false)
    const [openGenre, setOpenGenre] = useState(false)

    const handleOpenService = () => {
        setOpenService(!openSeverice)
        setOpenGenre(false)
    }
    const handleOpenGenre = () => {
        setOpenGenre(!openGenre)
        setOpenService(false)
    }
    // offcanvas dropdown code
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false)
        setOpenGenre(false);
        setOpenService(false);
    };
    const handleShow = () => setShow(true);
    return (
        <div className='mobile-nav'>
            <Button variant="primary" className='' onClick={handleShow}>
                <i class="ri-menu-line"></i>
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <div className="mobile-nav-img">
                        <img className='img-fluid' src="/src/assets/images/logo.svg" alt="" />
                    </div>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="mobile-nav-data">
                        <ul>
                            <li>
                                <NavLink className='nav-hover' to="/">Home</NavLink>
                            </li>

                            <li>
                                <NavLink className='nav-hover' to="/about">About Us</NavLink>
                            </li>

                            <li className={`nav-drop ${openSeverice ? 'dropdownview' : ''}`}>
                                <span className={`nav-hover ${isServiceActive ? 'active' : ''}`} onClick={handleOpenService}>
                                    Services <i className="ri-add-line"></i>
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
                            <li className={`nav-drop ${openGenre ? 'dropdownview' : ''}`}>
                                <span className={`nav-hover ${isServiceActive ? 'active' : ''}`} onClick={handleOpenGenre}>
                                    Genre <i className="ri-add-line"></i>
                                </span>

                                <ul className='dropdown'>
                                    <li><NavLink to="/ebook-writing">Autobiography</NavLink></li>
                                    <li><NavLink to="/ebook-editing">Business Book</NavLink></li>
                                    <li><NavLink to="/ebook-publishing">Children’s Book</NavLink></li>
                                    <li><NavLink to="/ebook-cover-design">Fiction</NavLink></li>
                                    <li><NavLink to="/ebook-marketing">Mystery Book</NavLink></li>
                                    <li><NavLink to="/ebook-marketing">Non Fiction</NavLink></li>
                                    <li><NavLink to="/ebook-marketing">Novel</NavLink></li>
                                    <li><NavLink to="/ebook-marketing">Self Help</NavLink></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div >
    )
}

export default MobileNav
