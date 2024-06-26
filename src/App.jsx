import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Profile from "./pages/Profile.jsx"; // Import the Profile component

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/profilo" element={<Profile />} /> {/* Add the Profile route */}
      </Routes>
    </Router>
  );
}

export default App;