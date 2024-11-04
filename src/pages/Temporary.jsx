import { Link } from 'react-router-dom';
import Home from './Home';

// Temporary page for the demonstration purposes
// File to be deleted before going online

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