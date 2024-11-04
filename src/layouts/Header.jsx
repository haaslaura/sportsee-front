import logo from '../assets/logo-darkbackground.svg'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <img className='mainlogo' src={logo} alt="Logo SportSee" />
            <nav className='navbar' aria-label='Menu principal'>
                <ul>
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/profil">Profil</Link>
                    </li>
                    <li>
                        <Link to="/reglages">Réglages</Link>
                    </li>
                    <li>
                        <Link to="/communaute">Communauté</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header