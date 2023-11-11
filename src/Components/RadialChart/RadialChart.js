import React from 'react';
import { Legend, RadialBar, RadialBarChart, Tooltip } from 'recharts';

const RadialChart = () => {

    const data = [
        {
            name: "Bengali",
            marks: 130,
            quiz: 102,
            fill: "#8884d8"
        },
        {
            name: "English",
            marks: 115,
            quiz: 95,
            fill: "#83a6ed"
        },
        {
            name: "Math",
            marks: 100,
            quiz: 90,
            fill: "#8dd1e1"
        },
        {
            name: "Physics",
            marks: 90,
            quiz: 80,
            fill: "#82ca9d"
        },
        {
            name: "Chemistry",
            marks: 80,
            quiz: 70,
            fill: "#a4de6c"
        },
        {
            name: "Biology",
            marks: 70,
            quiz: 40,
            fill: "#d0ed57"
        },
        {
            name: "Science",
            marks: 85,
            quiz: 75,
            fill: "#ffc658"
        }
    ];
    return (
        <div>
            <h3>Radial chart Show</h3>
            <div className='bar-chart'>
                <RadialBarChart
                    width={730}
                    height={250}
                    innerRadius="10%"
                    outerRadius="80%"
                    data={data}
                    startAngle={180}
                    endAngle={0}
                >
                    <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='quiz' />
                    <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
                    <Tooltip />
                </RadialBarChart>
            </div>
        </div>
    );
};

export default RadialChart;