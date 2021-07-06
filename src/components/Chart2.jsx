import React from "react";
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";

const Chart2 = ({ data, width, height }) => {
    return (
        <BarChart width={width} height={height} data={data} >
            <XAxis dataKey="name" stroke="#5681cc" />
            <YAxis />
            <Tooltip wrapperStyle={{ width: 140, backgroundColor: "#ccc" }} />
            <Legend
            
                width={160}
                wrapperStyle={{
                    top: 40,
                    right: 20,
                    backgroundColor: "#f5f5f5",
                    border: "1px solid #d5d5d5",
                    borderRadius: 3,
                    lineHeight: "40px",
                }}
            />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Bar dataKey="no_ventas" fill="#689bf5" barSize={40} />
        </BarChart>
    );
};

export default Chart2;
