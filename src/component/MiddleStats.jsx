import "./css/content.css";
import TrendingTable from "./TrendingTable";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import { pie, COLORS } from "../data";
import ProgressBar from "@ramonak/react-progress-bar";
import { tabledata } from "../data";
export default function MiddleStats() {
  return (
    <div className="middle-stats-container">
      <div className="lh-table">
        <TrendingTable />
      </div>
      <div className="rh-trending">
        <div className="lg-box">
          <PieChart width={250} height={400}>
            <Pie
              data={pie}
              cx={120}
              cy={200}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {pie.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Pie
              data={pie}
              cx={420}
              cy={200}
              startAngle={180}
              endAngle={0}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {pie.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>
        <div className="prog-lg-box">
          <h2>Trending NFT's</h2>
          {tabledata.map((row, i) => {
            return (
              <div className="prog-container">
                <span>
                  <ProgressBar
                    completed={60}
                    customLabel=" "
                    width="300px"
                    height="8px"
                    bgColor={row.color}
                  />
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
