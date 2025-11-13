import React from "react";
import {
    PieChart,
    Pie,
    Cell,
    XAxis,
    Tooltip,
    ResponsiveContainer, LineChart, CartesianGrid, YAxis, Line,
} from "recharts";
import "./Chart.css"

const Chart = ({ title, data, type = "pie", color = "#007bff" }) => {
    return (
        <div className="chart-card">
            <h2>{title}</h2>
            <div className="chart-container">
                {type === "pie" ? (
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={data}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={60}
                                fill={color}
                                // Render "value name" together (e.g., "50 Planning")
                                label={({ name, value }) => `${name}: ${value}`}
                                labelLine={false}
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color || color} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                ) : (
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Line
                                type="monotone"
                                dataKey="value"
                                stroke={color}
                                strokeWidth={2}
                                dot={{ r: 3 }}
                                activeDot={{ r: 5 }}
                            />
                        </LineChart>

                    </ResponsiveContainer>
                )}
            </div>
        </div>
    );
};

export default Chart;