import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import ContentGenerator from "./pages/ContentGenerator";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/generate" element={<ContentGenerator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;