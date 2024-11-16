import { Link } from 'react-router-dom'

// CAREFULL: must replace <Temporary /> by <Home /> before deploying the application !
import Temporary from "../pages/Temporary"
// import Home from "../pages/Home"

/**
 * NoBodyHere Component
 * Displays an error message when no user data is available.
 *
 * @component
 * @returns {JSX.Element}
 */
function NoBodyHere () {
    return (
        <div className="container__header">
        <h1><span>Oupsi</span>, il n'y a personne ici</h1>
        <Link to="/" element={<Temporary />}>Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default NoBodyHere