import './ServicesSectionBox.css'

const ServicesSectionBox = ({ data }) => {
    return (
        <div className="servicesCardContainer">
            {data.map((data, idx) => {
                return <div key={idx} className="servicesCard">
                    <div className="servicesCardIcon">
                        <i class="ri-certificate-2-line"></i>
                    </div>
                    <div className="servicesCardData">
                        <h3>{data.heading}</h3>
                        <p>{data.para}</p>
                    </div>
                </div>
            })}
        </div>
    )
}

export default ServicesSectionBox
