import { 
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  Brush,
  LabelList
} from "recharts"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import modelisationData, { converToDate } from "../utils/modelisationData"





function DailyBarChart ({daily}) {
   
  
  return (
    <ResponsiveContainer width="100%" height={320}>
    <BarChart
      width="100%"
      height={180}
      data={daily}
      margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
      barSize={7}
    >
    
    <CartesianGrid  stroke="#dedede" strokeDasharray="2 2" />
    
    <XAxis

      dataKey="day"
      stroke="false"
      padding={{ left: 10, right: 10 }}

    />
    <YAxis
      stroke="false"
      orientation="right"

      // DEFAULT: [0, 'auto']
      // domain={['69', 'auto']}
      // domain={['69', 'dataMax + 10']}
    />
    
    <Tooltip
      filterNull
      // wrapperStyle={{ background: red, top: '200px' }}

      // formatter={(value, name, props) => {
      //   console.log(value); // 160 ce sont les calories
      //   console.log(name); // c'est le nom "calories"
      //   console.log(props); // ce sont toutes les infos de la bar : fill, radius, dataKey...
        
      // }}
    />
    
    <Legend verticalAlign="top" align="right" /> 
    <Bar
      dataKey="kilogram"
      fill="#282D30"
      legendType="circle"
      radius={[20, 20, 0, 0]}
      unit="kg"
    
    />
    <Bar
      dataKey="calories"
      fill="#FF0000"
      legendType="circle"
      radius={[20, 20, 0, 0]}
      unit="Kcal"
      // name={none}

    />
    
    </BarChart>
    </ResponsiveContainer>
  )
}


export default DailyBarChart