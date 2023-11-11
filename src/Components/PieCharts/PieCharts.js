import React from 'react';
import { Pie, PieChart } from 'recharts';

const PieCharts = () => {

    const data01 = [
        {
            name: "Bengali",
            marks: 70
        },
        {
            name: "English",
            marks: 55
        },
        {
            name: "Math",
            marks: 90
        },
        {
            name: "Physics",
            marks: 60
        },
        {
            name: "Chemistry",
            marks: 90
        },
        {
            name: "Biology",
            marks: 62
        },
        {
            name: "Science",
            marks: 75
        }
    ];

    const data02 = [
        {
            name: "Bengali",
            marks: 270
        },
        {
            name: "English",
            marks: 155
        },
        {
            name: "Math",
            marks: 180
        },
        {
            name: "Physics",
            marks: 160
        },
        {
            name: "Chemistry",
            marks: 190
        },
        {
            name: "Biology",
            marks: 162
        },
        {
            name: "Science",
            marks: 175
        }
    ];
    return (
        <div>
            <h3>Pie chart Show</h3>
            <div className='bar-chart'>
                <PieChart width={730} height={250}>
                    <Pie data={data01} dataKey="marks" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                    <Pie data={data02} dataKey="marks" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                </PieChart>
            </div>
        </div>
    );
};

export default PieCharts;