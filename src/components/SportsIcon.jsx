import { Link } from 'react-router-dom'

/**
 * SportsIcon Component
 * Displays an icon for a specific sport or activity
 *
 * @component
 * @param {Object} props - Component properties
 * @param {string} props.name - Name of the sport or activity
 * @param {string} props.icon - Path to the sport icon image
 * @returns {JSX.Element} A (futur) clickable icon for the sport
 */
function SportsIcon({ name, icon }) {

    return (
        <Link className='sports-icon' tabIndex='0' role='button'>
            <img src={icon} alt={`Activité ${name}`} />
        </Link>
    )
}

export default SportsIcon