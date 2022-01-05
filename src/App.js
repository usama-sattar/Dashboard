import "./styles.css";
import SideBar from "./component/SideBar";
import Content from "./component/Content";
import Navbar from "./component/Navbar";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="layout">
        <SideBar />
        <Content />
      </div>
    </div>
  );
}
