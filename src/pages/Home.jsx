import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import dataRecovery from "../utils/dataRecovery"
import Temporary from "./Temporary"

function Home() {

  let { id } = useParams()
  const [user, setUser] = useState(null)
  const [activities, setActivities] = useState(null)
  const [averageSessions, setAverageSessions] = useState(null)
  const [performances, setPerformances] = useState(null)

  useEffect(() => {
    
    /**
     * Call the dataRecovery utils, to recover the data
     * @return {Object} Data
     **/
    const fetchData = async () => {
      try {
        
        const responseUser = await dataRecovery.getUserInformations(id)
        setUser(responseUser)
        
        const responseUserActivityInformations = await dataRecovery.getActivities(id);
        setActivities(responseUserActivityInformations)    
  
        const responseUserAverageSessions = await dataRecovery.getAverageSessions(id)
        setAverageSessions(responseUserAverageSessions)
        
        const responseUserPerformance = await dataRecovery.getUserPerformances(id)
        setPerformances(responseUserPerformance)
  
      } catch (error) {
        alert("Une erreur est survenue lors du chargement des données.")
      }
    }

    fetchData()
  }, [id])

  // console.log(user)
  // console.log(activities)
  // console.log(averageSessions)
  // console.log(performances)

  // Handling property id errors
  function NoBodyHere () {
    return (
      <div className="container__header">
        <h1><span>Oupsi</span>, il n'y a personne ici</h1>
        <Link to="/" element={<Temporary />}>Retourner sur la page d'accueil</Link>
      </div>
    )
  }

  return (
    <section className="container">
      {user ?
        <div className="container__header">
          <h1>Bonjour <span>{user?.data?.userInfos?.firstName}</span></h1>
          <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
          </div>
        :
          <NoBodyHere />
      }

      <section className="container__tracking">
        <div className="tracking">
          {/* Intégrer les 4 charts */}
        </div>
        <div className="macro">
          {/* intégrer les 4 composants macro */}
        </div>
      </section>
    </section>
  )
}

export default Home