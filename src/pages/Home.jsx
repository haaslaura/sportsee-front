import { useParams } from "react-router-dom"
import { useState, useEffect, useRef } from "react"

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


/**
 * Main homepage component for SportSee.
 * Fetches and displays user data, including activity, performance, and nutritional information.
 * Renders a dashboard with various charts and components based on the user ID from the route.
 * 
 * @component
 * @returns {JSX.Element}
 */
function Home() {

  let { id } = useParams()
  const [user, setUser] = useState(null)
  const [activities, setActivities] = useState(null)
  const [averageSessions, setAverageSessions] = useState(null)
  const [performances, setPerformances] = useState(null)
  const [isLoading, setLoading] = useState(true)

  const didFetch = useRef(false)

  useEffect(() => {

    // UseRef to check whether a call has already been made
    if (didFetch.current) return; // Prevent a second call
    didFetch.current = true; // Marks the effect as already executed
    
    setLoading(true)
    /**
     * Fetches user data from the backend
     * Uses the `dataRecovery` utility to retrieve user, activity, session, and performance data
     **/
    const fetchData = async () => {
      try {
        
        const [
          responseUser,
          responseActivities,
          responseAverageSessions,
          responsePerformances
        ] = await Promise.all([
          dataRecovery.getUserInformations(id),
          dataRecovery.getActivities(id),
          dataRecovery.getAverageSessions(id),
          dataRecovery.getUserPerformances(id),
        ]);
    
        setUser(responseUser);
        setActivities(responseActivities);
        setAverageSessions(responseAverageSessions);
        setPerformances(responsePerformances);
  
      } catch (error) {
        console.error("Erreur lors de la récupération des données : ", error);

        if (!user) {
          alert("Une erreur est survenue lors du chargement des données.");
        }
        
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
                    performancesData={performances?.data?.data}
                  />
                </div>

                <div className="tracking score">
                  <GoalRadialBarChart
                    userInfo={user?.data}
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