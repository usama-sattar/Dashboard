import "./css/content.css";
import {
  BarChart,
  Bar,
  Cell,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import { bar } from "../data";
export default function BottomStats() {
  return (
    <div className="bottom-stats-container">
      <div className="bottom-bar">
        <h2 style={{ padding: "10px" }}>Bar NFT's</h2>

        <ResponsiveContainer width={500} height={300}>
          <BarChart
            width={500}
            height={300}
            data={bar}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" stackId="a" fill="#8884d8" />
            <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="bottom-line">
        <h2 style={{ padding: "10px" }}>Line NFT's</h2>

        <ResponsiveContainer width={500} height={300}>
          <AreaChart
            width={500}
            height={400}
            data={bar}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
