import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "15px", background: "#222" }}>
      <Link to="/" style={{ color: "white", marginRight: "20px" }}>
        Dashboard
      </Link>

      <Link to="/generate" style={{ color: "white" }}>
        Generate Content
      </Link>
    </nav>
  );
}

export default Navbar;