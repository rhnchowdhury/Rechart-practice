import React from 'react';
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';
import './Axis.css';

const Axis = () => {

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
        <div className='axis-div'>
            <h3>Axis Showing Chart</h3>
            <div className='axis'>
                <LineChart width={600} height={400} data={data}>
                    <Line type="monotone" dataKey="marks" stroke="#82ca9d" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                </LineChart>
            </div>
        </div>
    );
};

export default Axis;