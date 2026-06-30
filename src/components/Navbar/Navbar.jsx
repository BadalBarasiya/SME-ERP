import "./Navbar.css";
import { LuUser, LuLogOut } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-right">
        <div className="user-info">
          <LuUser className="user-icon" />
          <span>Raj Ajudiya</span>
        </div>

        <div className="divider"></div>

        <button className="logout-btn">
          <LuLogOut />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;