import Faqs from './Faqs/Faqs'
import './FaqSection.css'

const FaqSection = ({data}) => {
    return (
        <section className='faqSection'>
            <div className="container">
                <div className="faq-bg">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-6">
                            <div className="faq-img animate-up">
                                <img className='img-fluid' src="../src/assets/images/faq.webp" alt="" />
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-6">
                            <Faqs data={data}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FaqSection
