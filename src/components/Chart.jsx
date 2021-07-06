import React from "react";
import {
    CartesianGrid,
    Line,
    LineChart,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

const Chart = ({ data, width, height }) => {
    return (
        <LineChart
            width={width}
            height={height}
            data={data}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
            <Line type="monotone" dataKey="no_ventas" stroke="#689bf5" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
        </LineChart>
    );
};

export default Chart;
