import { 
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts"
import modelisationData from "../utils/modelisationData"


/**
 * Custom Tooltip component for BarChart
 * @param {boolean} props.active - whether the tooltip is active (visible)
 * @param {Array} props.payload - the data payload associated with the hovered bar
 * @returns {JSX.Element|null} JSX element displaying tooltip content, or null if inactive
 */
function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#FF0101",
          color: "white",
          fontSize: "0.56rem",
          fontWeight: 500,
          padding: "20px 20px 0 20px", // Adjusted padding directly in style
        }}>
        {payload.map((item) => (
          <p key={item.dataKey} style={{margin: "0 0 20px 0"}} >
            {item.dataKey === 'kilogram' && `${item.value} Kg`}
            {item.dataKey === 'calories' && `${item.value} Kcal`}
          </p>
        ))}
      </div>
    )
  }
  return null
}


/**
 * DailyBarChart component renders a responsive bar chart showing daily weight and calorie data
 * @param {Array} props.daily - array of daily data objects, each containing day, kilogram, and calories values
 * @returns {JSX.Element} Responsive container with BarChart
 */
function DailyBarChart ({daily}) {

  // change the date and the calories to the desired format
  const newDataDaily = daily.map((d) => ({
    day: modelisationData.converToDate(d.day),
    kilogram: d.kilogram,
    calories: d.calories
  }))
   
  return (
    <>
    <div style={{
      position: "relative",
    }}>
      <p 
        style={{
          fontSize: "0.9rem",
          fontWeight: 500,
          color: "#20253A",
          margin: 0,
          position: "absolute",
          top: 22,
          left: 20,
          zIndex: 3,
        }}
      >
        Activité quotidiennes
      </p>
    </div>

      <ResponsiveContainer width="100%" height="100%" >

        <BarChart
          data={newDataDaily}
          margin={{ top: 50, right: 20, left: 20, bottom: 20 }}
          barGap={8}
          barSize={7}
        >

        <CartesianGrid // Grid display and options
          vertical={false}
          stroke="#dedede"
          strokeDasharray="2"
        />
        
        <XAxis
          dataKey="day"
          height={24}
          stroke="false"
          padding={{ left: 10, right: 10 }}
        />

        <YAxis
          type="number"
          domain={[0, "dataMax"]}
          stroke="false"
          orientation="right"
        />
        
        <Tooltip // Display a tooltip on mouse-over
          content={<CustomTooltip />}
          offset={15}
        />

        <Legend // Chart legend
          verticalAlign="top"
          height={32}
          wrapperStyle={{
            fontSize: "0.8rem",
            fontWeight: 500,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            position: "absolute",
            top: 16,
            right: 20,
            zIndex: 2
          }}
        />

        <Bar
          dataKey="kilogram"
          fill="#282D30"
          legendType="circle"
          radius={[20, 20, 0, 0]}
          unit="kg"
          name="Poids (kg)"
        />
        <Bar
          dataKey="calories"
          fill="#FF0000"
          legendType="circle"
          radius={[20, 20, 0, 0]}
          unit="Kcal"
          name="Calories brûlées (KCal)"
        />

        </BarChart>
      </ResponsiveContainer>
    </> 
  )
}

export default DailyBarChart