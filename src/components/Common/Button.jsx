import './Common.css'
import { Link } from 'react-router-dom'

const Button = ({ link, value, name }) => {
    return (
        <Link to={link} className={`common-btn ${name}`}>{value}</Link>
    )
}

export default Button
