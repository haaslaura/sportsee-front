import { useParams } from "react-router-dom";
import { useFetch } from "../utils/hooks/useFetch"

function App() {

  let { id } = useParams

  const { data } = useFetch('./.')
  // const { data } = useFetch('http://localhost:3000/user/18')
  console.log(data);

  const user = data.find(dataUser => dataUser.id === id);

  // Handling property id errors
  if (!user) {
    return (
      <div>Oupsi, y'a personne ici</div>
    )
  }


  return (
    <main className="App">
      <div className="header-message">
        <h1>Bonjour { }</h1>
        <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
      <div className="activity-tracking">

      </div>
    </main>
  )
}

export default App