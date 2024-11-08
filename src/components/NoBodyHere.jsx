import { Link } from 'react-router-dom'

// CAREFULL: must replace <Temporary /> by <Home /> before the end
import Temporary from "../pages/Temporary"

/**
  * Displays an error message if no user data is loaded
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