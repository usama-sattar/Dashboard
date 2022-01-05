import "./css/content.css";
import TopStats from "./TopStats";
import MiddleStats from "./MiddleStats";
import BottomStats from "./BottomStats";
import LineGraph from "./LineGraph";

export default function Content() {
  return (
    <div className="content-container">
      <h3>SUMMARY</h3>
      <div>
        <TopStats />
      </div>
      <div>
        <MiddleStats />
      </div>
      <LineGraph />
      <div className="bottom-stats-container">
        <BottomStats />
      </div>
    </div>
  );
}
