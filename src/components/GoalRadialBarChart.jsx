import {
    ResponsiveContainer,
    RadialBarChart,
    RadialBar,
} from "recharts"


/**
 * GoalRadialBarChart is a component that displays a radial bar chart representing a score relative to a goal
 * 
 * @param {Object} props.userInfo - the user information object containing the score value
 * @param {number} props.userInfo.score - a value between 0 and 1 representing the score (0 = 0%, 1 = 100%)
 * @returns {JSX.Element} A radial bar chart showing the score progress toward the 100% goal
 */
function GoalRadialBarChart ({ userInfo }) { 
    
    // Multiply the score by 100 to get the expected figure
    const scoreData = [{ name: 'Score', score: userInfo.score * 100, fill: '#FF0101' }] 

    // Calculate the end angle (so that it is proportional to the score)
    const startAngle = 100
    const endAngle = startAngle + (userInfo.score * 360)
    
    return (
        <>
            <div style={{ position: 'relative' }}>
                <h4 style={{
                        position: 'absolute',
                        top: 15,
                        left: 20,
                        fontSize: "15px",
                        fontWeight: 500,
                        color: "#20253A"
                    }}
                >
                    Score
                </h4>
            </div>
            <ResponsiveContainer width="100%" height="100%">

                <RadialBarChart
                    cx="50%"
                    cy="50%"
                    innerRadius="70%"
                    outerRadius="80%"
                    startAngle={startAngle}
                    endAngle={endAngle}
                    data={scoreData}
                    >

                    <circle
                        cx="50%"
                        cy="50%"
                        r="27%"
                        fill="#FFF"
                    />

                    <text
                        x="50%"
                        y="46%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        style={{ fontSize: '24px', fontWeight: 700, fill: '#000' }}
                    >
                        {scoreData[0].score}%
                    </text>
                    <text
                        x="50%"
                        y="56%" // Position slightly below the first text
                        textAnchor="middle"
                        dominantBaseline="middle"
                        style={{ fontSize: '14px', fontWeight: 500, fill: 'gray' }}
                    >
                        de votre objectif
                    </text>

                    <RadialBar
                        minAngle={15}
                        background={false}
                        dataKey="score"
                        barSize={10}
                        cornerRadius={10}
                    />
                </RadialBarChart>               
            </ResponsiveContainer>
        </>
    )
}
    
export default GoalRadialBarChart