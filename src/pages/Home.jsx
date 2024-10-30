import { useParams } from "react-router-dom"
import { useFetch } from "../utils/hooks/useFetch"

import toogleAPI from "../utils/normalizeData/toogleAPI"
// import modelisationData from "../utils/normalizeData/modelisationData"

function Home() {

  let { id } = useParams()
  
  const { data, isLoading, error  } = useFetch(toogleAPI.getUserInformations)
  console.log(data);

  // const user = data.find(dataUser => dataUser.id === id);

  // Handling property id errors
  // if (!user) {
  //   return (
  //     <div>Oupsi, y'a personne ici</div>
  //   )
  // }


  return (
    <section className="container">
      <div className="container__header">
        <h1>Bonjour</h1>
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