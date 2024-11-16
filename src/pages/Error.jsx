import { Link } from 'react-router-dom';
import Temporary from './Temporary';


/**
 * Displays a 404 error page when the requested route does not exist
 * 
 * @component
 * @returns {JSX.Element}
 */
function Error() {
    return (
        <div className="error-container">
            <h1>Erreur <span>404</span></h1>
            <h2>Oups! La page demandée n'existe pas 😥</h2>
            <Link to="/" element={<Temporary />}>Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Error