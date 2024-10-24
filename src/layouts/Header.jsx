import logo from '../assets/logo-darkbackground.svg'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <img className='mainlogo' src={logo} alt="Logo SportSee" />
            <nav className='navbar'>
                <ul>
                    <li>
                        <Link>Accueil</Link>
                    </li>
                    <li>
                        <Link>Profil</Link>
                    </li>
                    <li>
                        <Link>Réglage</Link>
                    </li>
                    <li>
                        <Link>Communauté</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header