import './HoverCard.css'

const HoverCard = ({heading,para,icon}) => {
    return (
        <div className='hoverCard'>
            <div className="heroCard_left">
                <i className={icon}></i>
            </div>
            <div className="heroCard_Right">
                <h3>{heading}</h3>
                <p>{para}</p>
            </div>
        </div>
    )
}

export default HoverCard
