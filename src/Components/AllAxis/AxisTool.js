import React from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './AxisTool.css';

const AxisTool = () => {
    const data = [
        {
            name: "Bengali",
            marks: 70,
            quiz: 24
        },
        {
            name: "English",
            marks: 55,
            quiz: 20
        },
        {
            name: "Math",
            marks: 90,
            quiz: 30
        },
        {
            name: "Physics",
            marks: 60,
            quiz: 28
        },
        {
            name: "Chemistry",
            marks: 90,
            quiz: 25
        },
        {
            name: "Biology",
            marks: 62,
            quiz: 20
        },
        {
            name: "Science",
            marks: 75,
            quiz: 25
        }
    ];
    return (
        <div>
            <h3>Axis With Tooltip</h3>
            <div className='axis-tool'>
                <LineChart width={600} height={400} data={data}>
                    <Line type="monotone" dataKey="marks" stroke="#82ca9d" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip></Tooltip>
                </LineChart>
            </div>
        </div>
    );
};

export default AxisTool;