import { Link } from 'react-router-dom';
import Home from './Home';


/**
 * Temporary home page for demonstration purposes
 * Provides links to profiles of two example users (ID 12 and ID 18)
 * 
 * @component
 * @returns {JSX.Element}
 * 
 * @note This file must be deleted before deploying the application !
 */
function Temporary() {

    return (
        <div className="temporary-container">
            <h1>Bienvenue sur <span>SportSee</span></h1>
            <h2>Nouvelle version de la page profil de l'utilisateur.</h2>
            <p>Pour avoir un aperçu du nouveau tableau de bord, choisissez un utilisateur ci-dessous :</p>
            <div className="temporary-container__links">
                <Link to="/accueil/12" element={<Home />}>Utilisateur 12</Link>
                <Link to="/accueil/18" element={<Home />}>Utilisateur 18</Link>
            </div>
        </div>
    )
}

export default Temporary