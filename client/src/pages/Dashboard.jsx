import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <>
      <Navbar />

      <div
        style={{
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h1>AI Content Manager Dashboard</h1>

        <h2>Quick Stats</h2>

        <div
          style={{
            marginTop: "20px",
          }}
        >
          <p>Total Content: 0</p>
          <p>Generated Today: 0</p>
          <p>Saved Drafts: 0</p>
        </div>
      </div>
    </>
  );
}

export default Dashboard;