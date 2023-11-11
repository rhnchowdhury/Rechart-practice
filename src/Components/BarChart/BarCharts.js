import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import './BarCharts.css';

const BarCharts = () => {
    const data = [
        {
            name: "Bengali",
            marks: 70,
            quiz: 42,
        },
        {
            name: "English",
            marks: 55,
            quiz: 30,
        },
        {
            name: "Math",
            marks: 90,
            quiz: 60,
        },
        {
            name: "Physics",
            marks: 60,
            quiz: 38,
        },
        {
            name: "Chemistry",
            marks: 90,
            quiz: 50,
        },
        {
            name: "Biology",
            marks: 62,
            quiz: 40,
        },
        {
            name: "Science",
            marks: 75,
            quiz: 55,
        }
    ];
    return (
        <div>
            <h3>Simple Bar chart</h3>
           <div className='bar-chart'>
           <BarChart width={730} height={250} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="marks" fill="#8884d8" />
                <Bar dataKey="quiz" fill="#82ca9d" />
            </BarChart>
           </div>
        </div>
    );
};

export default BarCharts;