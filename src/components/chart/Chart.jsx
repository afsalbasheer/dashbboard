import "./Chart.css"
import { LineChart, Line, XAxis, CartesianGrid, Tooltip,ResponsiveContainer } from 'recharts';

function Chart() {

    const users = [
        {
          name: 'Jan',
          "Active User" : 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Feb',
          "Active User": 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Mar',
          "Active User": 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Apr',
          "Active User": 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Ma',
          "Active User": 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Jun',
          "Active User": 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Jul',
          "Active User": 3490,
          pv: 4300,
          amt: 2100,
        },
        {
            name: 'Aug',
            "Active User": 3200,
            
          },
          {
            name: 'Sep',
            "Active User": 3500,
           
          },
          {
            name: 'Nov',
            "Active User": 3000,
           
          },
          {
            name: 'Dec',
            "Active User": 2500,
            
          },
          

        
      ];

  return (
    <div className="chart">
        <h3 className="chartTitle">Sales Analytics</h3>
        <ResponsiveContainer width="100%" aspect={4/1}>
        <LineChart data={users}>
            <XAxis dataKey="name" stroke="#5550bd"/>
            <Line type="monotone" dataKey="Active User" stroke="#5550bd"/>
            <Tooltip />
            <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>
        </LineChart>
        </ResponsiveContainer>
        
    </div>
  )
}

export default Chart