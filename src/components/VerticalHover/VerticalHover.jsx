import './VerticalHover.css'

const VerticalHover = ({
    num,
    heading,
    para,
    isActive,
    onClick,
    onMouseEnter}) => {
    return (
        <div className={`VerticalHoverCard ${isActive ? "active" : ""}`}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
        >
            <div className="VerticalHoverCardNumber">
                <h4>0{num}</h4>
            </div>
            <div className="VerticalHoverCardData">
                <h3>{heading}</h3>
                <p>{para}</p>
            </div>
        </div>
    )
}

export default VerticalHover
