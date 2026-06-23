import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#222",
        padding: "15px",
      }}
    >
      <Link
        to="/"
        style={{
          color: "white",
          marginRight: "20px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Dashboard
      </Link>

      <Link
        to="/generate"
        style={{
          color: "white",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Generate Content
      </Link>
    </nav>
  );
}

export default Navbar;