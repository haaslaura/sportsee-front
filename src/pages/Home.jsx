import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import dataRecovery from "../utils/dataRecovery"

function Home() {

  let { id } = useParams()
  const [user, setUser] = useState(null)
  const [activities, setActivities] = useState(null)
  const [performances, setPerformances] = useState(null)
  const [averageSessions, setAverageSessions] = useState(null)

/**
   * Call the dataRecovery utils to recover the data that corresponds
   ** @return {Object} Data
   */
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
      alert('Une erreur est survenue lors du chargement des données.');
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  console.log(user);
  console.log(activities);
  console.log(performances);
  console.log(averageSessions); // est encore marqué comme undifined
  
  // Handling property id errors
  if (!user) {
    return (
      <div>Oupsi, y'a personne ici</div>
    )
  }

  return (
    <section className="container">
      <div className="container__header">
        <h1>Bonjour <span>{user?.userInfos?.firstName}</span></h1>
        <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
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