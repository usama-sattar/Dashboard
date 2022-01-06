import "./css/content.css";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";
import { bar } from "../data";

export default function LineGraph() {
  return (
    <div className="line-gr-container">
      <h2 style={{ padding: "10px" }}>Trending NFT's</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          width={500}
          height={200}
          style={{ overflow: "hidden" }}
          data={bar}
          syncId="anyId"
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
          <Line type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
