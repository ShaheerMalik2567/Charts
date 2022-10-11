import BarChartDiagram from "../src/BarChart";
import PieChartDiagram from "../src/PieChart";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <PieChartDiagram />
      <BarChartDiagram />
    </React.Fragment>
  );
}
