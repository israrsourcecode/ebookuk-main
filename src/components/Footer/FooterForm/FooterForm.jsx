import FormButton from "../../Common/FormButton"
import "./FooterForm.css"

const FooterForm = () => {
  return (
    <div className="footer_Form">
      <div className="container">
        <div className="Footer_form_main">
          <div className="footer_Form_Left">
            <img className="img-fluid" src="../src/assets/images/footer-from-img.jpg" alt="" />
            <div className="footer_form_left_box">
              <h3>Expert Journal Publishing Services</h3>
              <p>We empower authors to turn their ideas into beautifully published eBooks, ready to reach readers worldwide. Create, publish, and share your stories with ease. Your journey to becoming a published author starts here.</p>
            </div>
          </div>
          <div className="footer_form_right">
            <h3>Got an Idea? <span>Let’s Write Your Book</span></h3>
            <h4>Fill out the Form</h4>
            <form action="#">
              <div className="footer_form">
                <div className="inputbox">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" placeholder='Enter Your Name ' />
                </div>
                <div className="inputbox">
                  <label htmlFor="number">Number</label>
                  <input type="text" id="number" placeholder='Enter Your Number' />
                </div>
                <div className="inputbox">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder='Enter Your Email' />
                </div>
                <div className="inputbox">
                  <label htmlFor="services">Services</label>
                  <select>
                    <option value="select-service">Select Service</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
              </div>
              <div className="textarebox">
                <label htmlFor="textarea">Message</label>
                <textarea rows="5" cols="30" name="message" dir="ltr" id="textarea"></textarea>
              </div>
              <div className="footer_form_bottom">
                <FormButton />
                <p>if you have any RFP requirement please share with us at abc.gmail.com and if you are looking for a career related enquiry please check our Career section.</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterForm
