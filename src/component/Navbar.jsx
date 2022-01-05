import "./css/navbar.css";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">KIND</div>
      <div className="nav-search">
        <div className="search-bar">
          <input type="text" />
        </div>
      </div>
      <div className="profile">
        <div className="avatar">John</div>
      </div>
    </div>
  );
}
