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

  // Notes: the size of the texts could be adapted for optimal rendering on small screens.
  // Solutions such as adding margins or giving texts an angle have been tested.
  
  return (
    <ResponsiveContainer width="100%" height="100%" >
      <RadarChart
        outerRadius={70}
        // outerRadius="70%"
        data={newData}
        // margin={{ top: 30, right: 30, bottom: 30, left: 30 }}
      >
        <PolarGrid // The cutting grid in the background
          gridType="polygon"
          radialLines={false}
          polarRadius={[0, 14, 27, 40, 56, 70]}
          stroke="#fff"
        />

        <PolarAngleAxis // The kinds axis
          dataKey="kind"
          stroke="#fff"
          tickLine={false}
          style={{
            fontSize: "0.75rem",
            fontWeight: 500,
          }}
          // angle={20}
        />

        <PolarRadiusAxis // The values axis
          tick={false}
          axisLine={false}
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