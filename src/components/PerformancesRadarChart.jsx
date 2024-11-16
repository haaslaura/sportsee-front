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
    <ResponsiveContainer width="100%" height="100%" >
      <RadarChart
        outerRadius={75}
        data={newData}
        // width="100%"
        // height="100%"
      >
        <PolarGrid // The cutting grid in the background
          gridType="polygon"
          radialLines={false}
          polarRadius={[0, 14, 27, 40, 60, 75]}
          stroke="#fff"
        />

        <PolarAngleAxis // The kinds axis
          dataKey="kind"
          stroke="#fff"
          tickLine={false}
          style={{
            fontSize: "12px",
            fontWeight: 500
          }}
        />

        <PolarRadiusAxis // The values axis
          tick={false}
          axisLine={false}
          angle={30}
          domain={[0, 'dataMax + 10']}          
        />

        <Radar // Visual rendering of data distribution
          dataKey="value"
          fill="#FF0101"
          fillOpacity={0.6}
        />

      </RadarChart>
    </ResponsiveContainer>
  )
}

export default PerformancesRadarChart