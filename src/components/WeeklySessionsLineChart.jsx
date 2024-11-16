import { 
    ResponsiveContainer,
    LineChart,
    XAxis,
    Tooltip,
    Line,
    Rectangle,
    Legend,
    YAxis
} from "recharts"
import modelisationData from "../utils/modelisationData"


/**
 * Component that renders a custom cursor on the chart
 * @param {Object} props
 * @param {Array} props.points - define the cursor position
 * @param {number} props.width
 * @param {number} props.height
 * @returns {JSX.Element} - the custom cursor as a rectangular overlay
 */
function CustomCursor(props) {
    const { points, width, height } = props  
    const { x } = points[0]
    
    return (
        <Rectangle
            style={{ fill: "rgba(0, 0, 0, 0.1)" }}
            x={x}
            width={width}
            height={height * 2}
        />
    )
}


/**
 * Rrenders a custom tooltip when hovering over data points
 * @param {boolean} props.active - whether the tooltip is active (visible)
 * @param {Array} props.payload - the data payload for the tooltip content
 * @returns {JSX.Element|null} - JSX element displaying tooltip content, or null if inactive
 */
function CustomTooltip({ active, payload }) {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip" style={{ backgroundColor: "#fff", padding: "5px" }}>
                <p style={{ color: "#000", margin: 0, fontSize: "8px", fontWeight: "500" }}>
                    {`${payload[0].value} min`}
                </p>
            </div>
        )
    }
    return null
}


/**
 * Component that renders a line chart displaying average session duration
 * @param {Array} props.sessions - array of session data, with day and sessionLength properties
 * @returns {JSX.Element} - ResponsiveContainer with the line chart
 */
function WeeklySessionsLineChart ({sessions}) {   

    return (
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
            {/* Solution for displaying the X axis legend with a margin and respecting the website model */}
            {/* However, I don't think it's very satisfactory, as the user loses out on quality of service */}
            <div
                style={{
                    position: "absolute",
                    bottom: 15,
                    left: "10%",
                    right: "10%",
                    display: "flex",
                    justifyContent: "space-between",
                    color: "rgba(255, 255, 255, 0.5)",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                }}
            >
                {/* Simulated XAxis legend */}
                {sessions.map((session) => (
                    <span key={session.day}>{modelisationData.getDayOfWeek(session.day)}</span>
                ))}
            </div>

        <ResponsiveContainer width="100%" height="100%" >
            <LineChart
                data={sessions}
                margin={{ top: 30, right: 0, left: 0, bottom: 15 }}
            >

            {/* Create a gradient for the line */}
            <defs>
                <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop
                        offset="50%"
                        stopColor="#fff"
                        stopOpacity={0.4}
                    />
                    <stop
                        offset="90%"
                        stopColor="#fff"
                        stopOpacity={0.9}
                    />
                </linearGradient>
            </defs>

            <XAxis
                dataKey="day"
                height={24}
                stroke="false"

                // 1) The first solution envisaged for displaying the legend :
                // tickFormatter={(day) => modelisationData.getDayOfWeek(day)}

                // 2) Second solution, to obtain a margin in the legend:
                tick={false} // Cacher la barre native
                // We mask style if we hide the native bar :
                // style={{
                //     fill: "rgba(255, 255, 255, 0.5)",
                // }}
            />

            <YAxis
                hide
                domain={["dataMin - 10", "dataMax + 10"]}
            />
                        
            <Tooltip // Display a tooltip on mouse-over
                cursor={<CustomCursor />}
                content={<CustomTooltip />}
            />

            <Legend
                align="left"
                verticalAlign="top"
                iconSize={0}
                content={() => (
                    <span style={{
                        color: "rgba(255, 255, 255, 0.5)",
                        fontSize: "15px",
                        fontWeight: "500",
                        position: "absolute",
                        top: "-10px",
                        left: "20px"
                    }}>
                        Durée moyenne des sessions
                    </span>
                )}
            />
            
            <Line
                dataKey="sessionLength"
                type="natural"
                dot={false}
                activeDot={{ fill: "#fff", stroke: "none", r: 5 }}
                stroke="url(#lineGradient)"
                strokeWidth={2}
            />
            
            </LineChart>
        </ResponsiveContainer>
        </div>
    )
}

export default WeeklySessionsLineChart