import HeadingCenter from '../Common/HeadingCenter'
import ServicesSectionBox from './ServicesSectionBox/ServicesSectionBox'
import './ServicesSection.css'

const ServicesSection = ({ data, heading, para, name, img }) => {
    return (
        <section className='ServicesSection'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-6">
                        <img className='services-img animate-up' src={img} alt="" />
                    </div>
                    <div className="col-12 col-md-12 col-lg-6">
                        <HeadingCenter heading={heading} name={name} para={para} />
                        <ServicesSectionBox data={data} />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default ServicesSection
