import React from 'react';
import { CartesianGrid, Legend, Scatter, ScatterChart, Tooltip, XAxis, YAxis, ZAxis } from 'recharts';

const ScatterCharts = () => {

    const data01 = [
        {
            total: 200,
            marks: 350,
            quiz: 150
        },
        {
            total: 180,
            marks: 265,
            quiz: 130
        },
        {
            total: 250,
            marks: 190,
            quiz: 200
        },
        {
            total: 270,
            marks: 120,
            quiz: 180
        },
        {
            total: 135,
            marks: 175,
            quiz: 140
        },
        {
            total: 170,
            marks: 122,
            quiz: 200
        },
        {
            total: 145,
            marks: 95,
            quiz: 180
        }
    ];

    const data02 = [
        {
            total: 400,
            marks: 400,
            quiz: 180
        },
        {
            total: 350,
            marks: 255,
            quiz: 140
        },
        {
            total: 360,
            marks: 250,
            quiz: 150
        },
        {
            total: 280,
            marks: 240,
            quiz: 160
        },
        {
            total: 345,
            marks: 155,
            quiz: 140
        },
        {
            total: 330,
            marks: 182,
            quiz: 140
        },
        {
            total: 300,
            marks: 175,
            quiz: 130
        }
    ];

    return (
        <div>
            <h3>Scatter chart Show</h3>
            <div className='bar-chart'>
                <ScatterChart
                    width={730}
                    height={250}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 10,
                        left: 10,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="total" type="number" name="stature" unit="cm" />
                    <YAxis dataKey="marks" type="number" name="weight" unit="kg" />
                    <ZAxis dataKey="quiz" type="number" range={[64, 144]} name="score" unit="km" />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    <Legend />
                    <Scatter name="Physics" data={data01} fill="#8884d8" />
                    <Scatter name="Chemistry" data={data02} fill="#82ca9d" />
                </ScatterChart>
            </div>
        </div>
    );
};

export default ScatterCharts;