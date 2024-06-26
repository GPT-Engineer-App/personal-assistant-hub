import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Profile from "./pages/Profile.jsx"; // Import the Profile component
import AssistentePersonale from "./pages/AssistentePersonale.jsx"; // Import the AssistentePersonale component

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/profilo" element={<Profile />} /> {/* Add the Profile route */}
        <Route path="/assistente" element={<AssistentePersonale />} /> {/* Add the AssistentePersonale route */}
      </Routes>
    </Router>
  );
}

export default App;