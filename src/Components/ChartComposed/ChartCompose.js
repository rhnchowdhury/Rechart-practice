import React from 'react';
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, Tooltip, XAxis, YAxis } from 'recharts';

const ChartCompose = () => {

    const data = [
        {
            name: "Bengali",
            marks: 70,
            quiz: 42,
            amt:50
        },
        {
            name: "English",
            marks: 55,
            quiz: 30,
            amt:55
        },
        {
            name: "Math",
            marks: 90,
            quiz: 60,
            amt:60
        },
        {
            name: "Physics",
            marks: 60,
            quiz: 38,
            amt:50
        },
        {
            name: "Chemistry",
            marks: 90,
            quiz: 50,
            amt:60
        },
        {
            name: "Biology",
            marks: 62,
            quiz: 40,
            amt:50
        },
        {
            name: "Science",
            marks: 75,
            quiz: 55,
            amt:50
        }
    ];
    return (
        <div>
            <h3>Composed chart Show</h3>
            <div className='bar-chart'>
                <ComposedChart width={730} height={250} data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                    <Bar dataKey="marks" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="quiz" stroke="#ff7300" />
                </ComposedChart>
            </div>
        </div>
    );
};

export default ChartCompose;