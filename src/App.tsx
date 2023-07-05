// Items
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Layouts
import Dashboard from "./layouts/Dashboard";
// Pages
import Home from "./pages/login";

const App = () => {
  const currentLocation = window.location.pathname;
  return (
    <div>
      {currentLocation == "/" ? (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      ) : (
        <Dashboard>
        <BrowserRouter>
           <Routes>
             <Route path="/" element={<Home />} />
           </Routes>
        </BrowserRouter>
        </Dashboard>
      )}
    </div>
  );
};

export default App;
