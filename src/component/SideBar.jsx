import "./css/sidebar.css";
const navitem = [
  { name: "Dashboard", icon: "fas fa-chart-line" },
  { name: "NFT", icon: "fab fa-bitcoin" },
  { name: "Article", icon: "far fa-newspaper" },
  { name: "Stats", icon: "fab fa-bitcoin" },
  { name: "Logout", icon: "fas fa-sign-out-alt" }
];
export default function SideBar() {
  return (
    <div className="sidebar-container">
      {navitem.map((item, i) => {
        return (
          <div className="nav-item">
            <span className="icon">
              <i className={item.icon}></i>
            </span>
            <span className="text">{item.name}</span>
          </div>
        );
      })}
    </div>
  );
}
