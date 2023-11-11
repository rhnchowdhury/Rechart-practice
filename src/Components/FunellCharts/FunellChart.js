import React from 'react';
import { Funnel, FunnelChart, LabelList, Tooltip } from 'recharts';

const FunellChart = () => {

    const data = [
        {
            name: "Bengali",
            marks: 130,      
            fill: "#8884d8"
        },
        {
            name: "English",
            marks: 115,
            
            fill: "#83a6ed"
        },
        {
            name: "Math",
            marks: 100, 
            fill: "#8dd1e1"
        },
        {
            name: "Physics",
            marks: 90,      
            fill: "#82ca9d"
        },
        {
            name: "Chemistry",
            marks: 80,          
            fill: "#a4de6c"
        },
        {
            name: "Biology",
            marks: 70,
            fill: "#d0ed57"
        },
        {
            name: "Science",
            marks: 60,
            fill: "#ffc658"
        }
    ];
    return (
        <div>
            <h3>Funnel chart Show</h3>
            <div className='bar-chart'>
                <FunnelChart width={730} height={250}>
                    <Tooltip />
                    <Funnel
                        dataKey="marks"
                        data={data}
                        isAnimationActive
                    >
                        <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
                    </Funnel>
                </FunnelChart>
            </div>
        </div>
    );
};

export default FunellChart;