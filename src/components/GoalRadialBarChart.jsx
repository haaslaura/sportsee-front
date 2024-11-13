import {
    ResponsiveContainer,
    RadialBarChart,
    RadialBar,
    Tooltip,
    Legend
} from "recharts"


function CustomLabel({ props }) {
    // console.log(props);
    
    return (
        <p>pouet</p>
    )   
}

function GoalRadialBarChart ({ score }) {

    const scoreArray = [score]
    // console.log(scoreArray);
        
    return (
        <ResponsiveContainer>

            <RadialBarChart 
                width={730} 
                height={250} 
                innerRadius="90%" 
                outerRadius="80%"
                // borderRadius={5}
                // cornerRadius={10}
                data={scoreArray} 
                startAngle={220} 
                endAngle={-40}

                // barCategoryGap={0}
            >
            <RadialBar
                // minAngle={15}
                // label={{ fill: '#282D30', position: 'insideStart' }}
                label={<CustomLabel />}
                background
                clockWise={true}
                dataKey='score' />
            
            {/* <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" /> */}
            {/* <Tooltip /> */}
            </RadialBarChart>

        </ResponsiveContainer>
    )
}

export default GoalRadialBarChart