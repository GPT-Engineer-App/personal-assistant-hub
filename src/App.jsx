import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Profilo from "./pages/Profile.jsx"; // Import the Profilo component
import AssistentePersonale from "./pages/AssistentePersonale.jsx"; // Import the AssistentePersonale component
import Iniziative from "./pages/Iniziative.jsx"; // Import the Iniziative component
import Servizi from "./pages/Servizi.jsx"; // Import the Servizi component

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/profilo" element={<Profilo />} />
        <Route path="/assistente" element={<AssistentePersonale />} />
        <Route path="/iniziative" element={<Iniziative />} /> {/* Add the Iniziative route */}
        <Route path="/servizi" element={<Servizi />} /> {/* Add the Servizi route */}
      </Routes>
    </Router>
  );
}

export default App;