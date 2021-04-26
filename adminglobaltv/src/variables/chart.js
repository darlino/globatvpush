import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
  {
    name: 'Page A',
    utilisateur: 4000,
    souscriveur: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    utilisateur: 3000,
    souscriveur: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    utilisateur: 2000,
    souscriveur: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    utilisateur: 2780,
    souscriveur: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    utilisateur: 1890,
    souscriveur: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    utilisateur: 2390,
    souscriveur: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    utilisateur: 3490,
    souscriveur: 4300,
    amt: 2100,
  },
];
export const Chart = () =>{

  
    return (
        <ResponsiveContainer width="100%" height="100%">
        <BarChart
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
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="utilisateur" fill="#0255e3" />
          <Bar dataKey="souscriveur" fill="#e30218" />
        </BarChart>
      </ResponsiveContainer>
    );
  
}
