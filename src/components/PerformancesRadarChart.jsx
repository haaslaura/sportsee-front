import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts'
import modelisationData from '../utils/modelisationData'


/**
 * PerformancesRadarChart component displays a radar chart to show user performance data
 * @param {Object} props.kindsList - an object where keys are performance kind IDs and values are the corresponding categories
 * @param {Array} props.performancesData - array of performance data objects
 * @returns {JSX.Element} a responsive radar chart component visualizing the user's performance
 */
function PerformancesRadarChart ({ kindsList, performancesData }) {

  /**
   * Modify the value of kind in performancesData to correspond with category names in kindsList
   */
  const arrayOfKeys = Object.keys(kindsList)
  performancesData.forEach((objet) => {
    arrayOfKeys.forEach((key) => {
      if (parseInt(key) === objet.kind) {
        objet.kind = kindsList[key]
      }
    })
  })

  /**
   * Create a new array of data where each kind is translated
   */
  const newData = performancesData.map((v) => ({
    value: v.value,
    kind: modelisationData.translateEnglishToFrench(v.kind)
  }))

  
  return (
    <ResponsiveContainer>
      <RadarChart
        outerRadius={90}
        data={newData}
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