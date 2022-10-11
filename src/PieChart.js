import React from "react";
import { Colors, Data } from "../Data/Data";

import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

export default function PieChartDiagram() {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "#ffff",
            padding: "5px",
            border: "1px solid #cccc",
          }}
        >
          <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
        </div>
      );
    }
    return null;
  };

  return (
    <PieChart width={730} height={300}>
      <Tooltip />
      <Pie
        data={Data}
        color="#000000"
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={120}
        fill="#8884d8"
      >
        {Data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={Colors[index % Colors.length]} />
        ))}
      </Pie>
      <Tooltip content={<CustomTooltip />} />
      <Legend />
    </PieChart>
  );
}
