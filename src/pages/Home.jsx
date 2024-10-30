import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { useFetch } from "../utils/hooks/useFetch"
import toogleAPI from "../utils/normalizeData/toogleAPI"
// import modelisationData from "../utils/normalizeData/modelisationData"

function Home() {

  let { id } = useParams()

  // État pour stocker l'input pour le hook useFetch
  const [fetchInput, setFetchInput] = useState(null);

  // Utilise useEffect pour appeler la fonction asynchrone et mettre à jour fetchInput
  useEffect(() => {
    async function getData() {
      const apiData = await toogleAPI.getUserInformations(id);
      setFetchInput(apiData);
    }
    getData();
  }, [id]);


  const { data, isLoading, error  } = useFetch(fetchInput)

  console.log(data);
  console.log(useFetch(toogleAPI.getUserInformations(id)));
  
  // Handling property id errors
  if (error) {
    return (
      <div>Oupsi, y'a personne ici</div>
    )
  }

  return (
    <section className="container">
      <div className="container__header">
        <h1>Bonjour {data?.userInfos?.firstName}</h1>
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