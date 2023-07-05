// Items
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
// Layouts
import Dashboard from "./layouts/Dashboard";
// Pages
import Home from "./pages/auth/login";
import AdminIndex from './pages/admin/Dashboard'
import Elements from './pages/admin/Elements'
import Tables from './pages/admin/Tables'
import Forms from "./pages/admin/Forms";
import Cards from './pages/admin/Cards'
import Modal from './pages/admin/Modal'
import Blank from "./pages/admin/Blank";
// Packages
// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  const currentLocation = window.location.pathname;

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <a title="Support project" target="blank" className="fixed bottom-5 right-4 z-50" href="https://www.buymeacoffee.com/hakimovDev"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=hakimovDev&button_colour=FFDD00&font_colour=000000&font_family=Lato&outline_colour=000000&coffee_colour=ffffff" /></a>
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
               <Route path="/tables" element={<Tables />} />
               <Route path="/forms" element={<Forms />} />
               <Route path="/cards" element={<Cards />} />
               <Route path="/modal" element={<Modal />} />
               <Route path="/blank" element={<Blank />} />
           </Routes>
             </Dashboard>
        </Router>
      )}
    </div>
  );
};

export default App;
