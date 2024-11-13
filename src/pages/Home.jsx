import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

// IMAGES
import energyIcon from "../assets/icon-energy.svg"
import carbohydratesIcon from "../assets/icon-carbohydrates.svg"
import lipidsIcon from "../assets/icon-lipids.svg"
import proteinsIcon from "../assets/icon-proteins.svg"

// UTILS
import dataRecovery from "../utils/dataRecovery"

// COMPONENTS
import Loader from "../components/Loader"
import NoBodyHere from "../components/NoBodyHere"
import DailyBarChart from "../components/DailyBarChart"
import Macronutrients from "../components/Macronutrients"
import WeeklySessionsLineChart from "../components/WeeklySessionsLineChart"
import PerformancesRadarChart from "../components/PerformancesRadarChart"
import GoalRadialBarChart from "../components/GoalRadialBarChart"


function Home() {

  let { id } = useParams()
  const [user, setUser] = useState(null)
  const [activities, setActivities] = useState(null)
  const [averageSessions, setAverageSessions] = useState(null)
  const [performances, setPerformances] = useState(null)
  const [isLoading, setLoading] = useState(true)


  useEffect(() => {
    
    setLoading(true)

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
      
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [id])


  return (
    <section className="container">
      {isLoading ? (
        <Loader />
      ) : (
        // If there no user data, an error message will display in <NoBodyHere />
        !user ?
          <NoBodyHere />
          : (
          <>
              <div className="container__header">
                <h1>Bonjour <span>{user?.data?.userInfos?.firstName}</span></h1>
                <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
              </div>
              <section className="container__tracking">

                <div className="tracking daily">
                  <p>Activité quotidienne</p>
                  <DailyBarChart 
                    daily={activities?.data?.sessions}
                  />
                </div>

                <ul className="tracking macro">
                  <Macronutrients
                    key="calories"
                    icon={energyIcon}
                    data={user?.data?.keyData?.calorieCount}
                    text="Calories"
                    typeClass="calories"
                  />
                  <Macronutrients
                    key="proteines"
                    icon={proteinsIcon}
                    data={user?.data?.keyData?.proteinCount}
                    text="Protéines"
                    typeClass="proteines"
                  />
                  <Macronutrients
                    key="carbohydrates"
                    icon={carbohydratesIcon}
                    data={user?.data?.keyData?.carbohydrateCount}
                    text="Glucides"
                    typeClass="carbohydrates"
                  />
                  <Macronutrients
                    key="lipids"
                    icon={lipidsIcon}
                    data={user?.data?.keyData?.lipidCount}
                    text="Lipides"
                    typeClass="lipids"
                  />
                </ul>

                <div className="tracking session">
                  <WeeklySessionsLineChart
                    sessions={averageSessions?.data?.sessions}
                  />
                </div>
                <div className="tracking performance">
                  <PerformancesRadarChart
                    kindsList={performances?.data?.kind}
                    values={performances?.data?.data}
                  />
                </div>
                <div className="tracking score">
                  <GoalRadialBarChart
                    score={user?.data}
                  />
                </div>

              </section>
          </>
          )
        )
      }
    </section>
  )
}

export default Home