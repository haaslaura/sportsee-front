import { Link } from 'react-router-dom';
import Home from './Home';

// Temporary page for the demonstration purposes
// File to be deleted before going online

function Temporary() {

    return (
        <div>
            <h1>Bienvenue sur SportSee</h1>
            <p>Nouvelle version de la page profil de l'utilisateur.</p>
            <p>Pour avoir un aperçu du nouveau tableau de bord, choisissez un utilisateur ci-dessous :</p>
            <div>
                <Link to="/accueil/12" element={<Home />}>Utilisateur 12</Link>
                <Link to="/accueil/18" element={<Home />}>Utilisateur 18</Link>
            </div>
        </div>
    )
}

export default Temporary