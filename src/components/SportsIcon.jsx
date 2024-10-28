import { Link } from 'react-router-dom'

function SportsIcon({ name, icon }) {

    return (
        <Link className='sports-icon' tabIndex='0' role='button'>
            <img src={icon} alt={`Activité ${name}`} />
        </Link>
    )
}

export default SportsIcon