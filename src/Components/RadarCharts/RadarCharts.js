import React from 'react';
import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from 'recharts';

const RadarCharts = () => {
    const data = [
        {
            name: "Bengali",
            marks: 130,
            quiz: 102,
            amt: 150
        },
        {
            name: "English",
            marks: 115,
            quiz: 95,
            amt: 150
        },
        {
            name: "Math",
            marks: 100,
            quiz: 90,
            amt: 150
        },
        {
            name: "Physics",
            marks: 90,
            quiz: 80,
            amt: 150
        },
        {
            name: "Chemistry",
            marks: 80,
            quiz: 70,
            amt: 150
        },
        {
            name: "Biology",
            marks: 70,
            quiz: 40,
            amt: 50
        },
        {
            name: "Science",
            marks: 85,
            quiz: 75,
            amt: 150
        }
    ];
    return (
        <div>
            <h3>Radar chart Show</h3>
            <div className='bar-chart'>
                <RadarChart outerRadius={90} width={730} height={250} data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="name" />
                    <PolarRadiusAxis angle={30} domain={[0, 150]} />
                    <Radar name="Mike" dataKey="marks" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                    <Radar name="Lily" dataKey="quiz" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                    <Legend />
                </RadarChart>
            </div>
        </div>
    );
};

export default RadarCharts;