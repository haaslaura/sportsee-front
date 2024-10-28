import SportsIcon from '../components/SportsIcon';

import yogaIcon from '../assets/icon-yoga.svg'
import cyclingIcon from '../assets/icon-cycling.svg'
import swimmingIcon from '../assets/icon-swimming.svg'
import athleticsIcon from '../assets/icon-athletics.svg'


function SecondNavBar() {

    const date = new Date();
    const currentYear = date.getFullYear()

    return (
        <div className='second-navbar'>
            <nav className='second-navbar__menu' aria-label='Suivi par activité'>
                <ul>
                    <li>
                        <SportsIcon
                            key="yoga"
                            name="Yoga"
                            icon={yogaIcon} />
                    </li>
                    <li>
                        <SportsIcon
                            key="natation"
                            name="Natation"
                            icon={swimmingIcon} />
                    </li>
                    <li>
                        <SportsIcon
                            key="cyclisme"
                            name="Cyclisme"
                            icon={cyclingIcon} />
                    </li>
                    <li>
                        <SportsIcon
                            key="athletisme"
                            name="Athlétisme"
                            icon={athleticsIcon} />
                    </li>
                </ul>
            </nav>
            <p className='second-navbar__copyright'>Copyright, SportSee {currentYear}</p>
        </div>
    )
}

export default SecondNavBar