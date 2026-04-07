import FormButton from '../../Common/FormButton'
import './HeroBottom.css'
const HeroBottom = () => {
    return (
        <div className="heroBottom">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-8">
                        <div className="hero_form_box">
                            <h3>Get Quote</h3>
                            <form action="#">
                                <div className="hero_form">
                                    <input type="text" placeholder='Enter Your Name ' />
                                    <input type="text" placeholder='Enter Your Number' />
                                    <input type="email" placeholder='Enter Your Email' />
                                    <select>
                                        <option value="select-service">Select Service</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select>
                                </div>
                                <FormButton />
                            </form>
                        </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-4">
                        <div className="hero_review_boxes">
                            <div className="hero_review_box">
                                <img src="../src/assets/images/writer-icon.webp" alt="" />
                                <span>4,500+</span>
                                <p>Online to help you 24x7</p>
                            </div>
                            <div className="hero_review_box">
                                <img src="../src/assets/images/review-icon.webp" alt="" />
                                <span>5,188+</span>
                                <p>Out of 5,188 Reviews</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBottom
