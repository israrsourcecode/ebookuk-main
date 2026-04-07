import FooterForm from './FooterForm/FooterForm'
import './Footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <>
            <FooterForm />
            <footer>
                <div className="container">
                    <div className="footer_top">
                        <div className="footer_top_img">
                            <img className='img-fluid' src="../../src/assets/images/footer-logo.svg" alt="" />
                        </div>
                        <div className="footer_icons">
                            <Link><i className="ri-facebook-fill"></i></Link>
                            <Link><i className="ri-twitter-x-line"></i></Link>
                            <Link><i className="ri-linkedin-fill"></i></Link>
                            <Link><i className="ri-youtube-fill"></i></Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="footer_box">
                                <h4>Quick Links</h4>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About Us</Link></li>
                                    <li><Link to="/about">Review</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="footer_box">
                                <h4>Services</h4>
                                <ul>
                                    <li><Link to={"ebook-writing"}>Ebook Writing</Link></li>
                                    <li><Link to={"ebook-editing"}>Ebook Editing</Link></li>
                                    <li><Link to={"ebook-publishing"}>Ebook Publishing</Link></li>
                                    <li><Link to={"ebook-cover-design"}>Ebook Cover Design</Link></li>
                                    <li><Link to={"ebook-marketing"}>Ebook Marketing</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="footer_box">
                                <h4>Gerne</h4>
                                <ul>
                                    <li><Link to={"ebook-writing"}>Ebook Writing</Link></li>
                                    <li><Link to={"ebook-editing"}>Ebook Editing</Link></li>
                                    <li><Link to={"ebook-publishing"}>Ebook Publishing</Link></li>
                                    <li><Link to={"ebook-cover-design"}>Ebook Cover Design</Link></li>
                                    <li><Link to={"ebook-marketing"}>Ebook Marketing</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="footer_box">
                                <h4>Contact Us</h4>
                                <ul>
                                    <li><Link><i className="ri-map-pin-fill"></i> Dummy</Link></li>
                                    <li><Link><i className="ri-phone-fill"></i> (0000)00000-000</Link></li>
                                    <li><Link><i className="ri-mail-fill"></i> dumy@addreess</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_bottom">
                    <p>©Copyright 2026 Ebook website</p>
                </div>
            </footer>
        </>
    )
}

export default Footer
