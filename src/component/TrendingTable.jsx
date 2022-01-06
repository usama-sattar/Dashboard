import "./css/content.css";
import { tabledata } from "../data";
import ProgressBar from "@ramonak/react-progress-bar";
export default function TrendingTable() {
  return (
    <div className="trending-table">
      <div className="header">
        <h2>NFT's</h2>
      </div>
      {tabledata.map((row, i) => {
        return (
          <div className="row">
            <span>{row.name}</span>
            <span>{row.price}</span>
            <span>
              <ProgressBar
                completed={60}
                customLabel=" "
                width="100px"
                height="10px"
                bgColor={row.color}
              />
            </span>
          </div>
        );
      })}
    </div>
  );
}
