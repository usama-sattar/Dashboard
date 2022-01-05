import "./css/content.css";
import Card from "./Card";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import { pieCOLORS, fullPie, RADIAN } from "../data";
export default function TopStats() {
  return (
    <div className="top-stats-container">
      <div className="lh-stats">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="rh-graph">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Pie
              data={fullPie}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {fullPie.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={pieCOLORS[index % pieCOLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
