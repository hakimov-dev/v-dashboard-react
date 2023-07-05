// Items
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Layouts
import Dashboard from "./layouts/Dashboard";
// Pages
import Home from "./pages/auth/login";
import AdminIndex from './pages/admin/Dashboard'
import Elements from './pages/admin/Elements'

const App = () => {
  const currentLocation = window.location.pathname;

  return (
    <div>
      {currentLocation === "/" ? (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      ) : (
        <Router>
             <Dashboard>
           <Routes>
               <Route path="/admin-dashboard" element={<AdminIndex />} />
               <Route path="/ui-elements" element={<Elements />} />
           </Routes>
             </Dashboard>
        </Router>
      )}
    </div>
  );
};

export default App;
