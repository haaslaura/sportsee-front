import {
    ResponsiveContainer,
    RadialBarChart,
    RadialBar
} from "recharts"
import modelisationData from "../utils/modelisationData"


function GoalRadialBarChart ({ score }) { 
    
    // On multiplie le score par 100 pour avoir le chiffre attendu
    const scoreData = [{ name: 'Score', score: score.score * 100, fill: '#FF0101' }]
    console.log(scoreData)    
    
    return (
        
        <div style={{ position: 'relative', textAlign: 'center' }}>
        <h4 style={{ position: 'absolute', top: '10%', left: '10%', fontWeight: 700, color: '#333' }}>
        Score
        </h4>
        <ResponsiveContainer width="100%" height="100%">

            <RadialBarChart
                // width={250}
                // height={200}
                cx="50%"
                cy="50%"
                innerRadius="70%"
                outerRadius="80%"
                // startAngle={-20}
                // endAngle={-20 + (score * 2.2)}
                startAngle={90}
                endAngle={450}
                data={scoreData}
                >

                <RadialBar
                minAngle={15}
                background={{ fill: '#eee' }}
                clockWise={false}
                dataKey="score"
                cornerRadius={10} // Arrondir les coins de la barre
                barSize={10} // Épaisseur de la barre
                />

            </RadialBarChart>
            
            {/* <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="70%"
            outerRadius="80%"
            startAngle={90}
            endAngle={450}
            data={[{ name: 'Score', score: 80, fill: '#FF0101' }]}
            >
            <RadialBar
            minAngle={15}
            clockWise
            dataKey="score"
            cornerRadius={10}
            barSize={10}
            background={{ fill: '#eee' }}
            />
            </RadialBarChart> */}
            
            
            </ResponsiveContainer>
            
            {/* Texte au centre */}
            <div
            style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
            }}
            >
            <p style={{ fontSize: '24px', fontWeight: 700, margin: 0, color: '#000' }}>
            {scoreData[0].score}%
            </p>
            <p style={{ fontSize: '14px', fontWeight: 500, color: 'gray', margin: 0 }}>
            de votre objectif
            </p>
            </div>
            </div>
        )
    }
    
    export default GoalRadialBarChart