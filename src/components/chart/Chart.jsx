import "./chart.scss"
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: "January", Total: 1200 },
  { name: "February", Total: 2100 },
  { name: "March", Total: 800 },
  { name: "April", Total: 1600 },
  { name: "May", Total: 900 },
  { name: "June", Total: 1700 },
];

const Chart = () => {
  return (
    <div className="chart"> 
    <div className="title">Last 6 Months (Revenue)</div>
     <ResponsiveContainer width="100%" aspect={2 / 1 }>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <XAxis dataKey="name" stroke="gray"  />
          <Tooltip />
          <Legend />
          <Line id="total" type="monotone" dataKey="Total" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
  
  </div>
  )
}

export default Chart