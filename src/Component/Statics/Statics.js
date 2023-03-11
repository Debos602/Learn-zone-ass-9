import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const Statics = () => {
  const data = useLoaderData().data;
  console.log(data);

  return (
    <div className='container text-white d-flex align-items-center justify-content-center'>
      <div>
        <h1 className='my-5'>Rechart</h1>
        <LineChart width={600} height={500}>
          <XAxis dataKey='name' />
          <YAxis />
          <CartesianGrid strokeDasharray='3 3' />
          <Tooltip />
          <Legend />
          {data.map((chart) => (
            <Line
              key={chart.id}
              type='monotone'
              dataKey='total'
              data={[{ name: chart.name, total: chart.total }]}
              stroke='#82ca9d'
            />
          ))}
        </LineChart>
      </div>
    </div>
  );
};

export default Statics;
