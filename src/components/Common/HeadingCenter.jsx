import './Common.css'

const HeadingCenter = ({ heading, para, name, subHeading }) => {
    return (
        <div className={`heading ${name}`}>
            <h2>{heading} <span>{subHeading}</span></h2>
            <p>{para}</p>
        </div>
    )
}

export default HeadingCenter
