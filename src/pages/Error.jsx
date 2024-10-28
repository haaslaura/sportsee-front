import { Link } from 'react-router-dom';
import Temporary from './Temporary';

function Error() {
    return (
        <div className="error-container">
            <h1>404</h1>
            <h2>Oups! La page demandée n'existe pas.</h2>
            <Link to="/" element={<Temporary />}>Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Error