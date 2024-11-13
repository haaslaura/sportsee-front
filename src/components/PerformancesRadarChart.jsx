import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts'


function PerformancesRadarChart ({ kindsList, values }) {

  // console.log(kindsList); // un objet contenant "1": "cardio", "2": "energy", etc.
  // console.log(values); // tableau d'objet, valeurs + kind en numéro
  

  function changerLaValeurDeKind (listeDesTextes, tableauDobjetsAchanger) {
    // je récupère un tableau des clés de l'objet kinds
    const tableauDesCles = Object.keys(listeDesTextes)

    // je parcours le tableau d'objets à changer
    tableauDobjetsAchanger.forEach((objet) => {

      // je regarde les clés de mon objet
      Object.keys(objet).forEach((key) => {
        if (key === "kind") {
          // console.log(typeof(objet.kind)); // la valeur est un number
          
          // parcourir le tableauDesCles
          tableauDesCles.forEach((item) => {

            const valeurARemplacer = objet.kind
            console.log(valeurARemplacer); // est la clé de l'objet kind, en texte
            
            if (parseInt(item) === valeurARemplacer) {
              // changer la valeur
              // objet.kind = listeDesTextes.item
            }
          })
        }
      })
    })

    return tableauDobjetsAchanger
  }

  console.log(changerLaValeurDeKind(kindsList, values));
  


  
  return (
    <ResponsiveContainer>
      <RadarChart
        // width={60}
        // height={60}
        outerRadius={90}
        data={values}
      >
        <PolarGrid
          gridType="polygon"
          radialLines={false}
          polarRadius={[0, 10, 27, 49, 72, 90]}
          stroke="#fff"
        />

        <PolarAngleAxis
          dataKey="kind"
          stroke="#fff"
          tickLine={false}
        />

        <PolarRadiusAxis
          tick={false}
          axisLine={false}
          angle={30}
          domain={[0, 'dataMax + 10']}          
        />

        <Radar dataKey="value"
          fill="#FF0101"
          fillOpacity={0.6}
        />

      </RadarChart>
    </ResponsiveContainer>
  )
}

export default PerformancesRadarChart