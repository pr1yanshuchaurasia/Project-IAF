import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./pages/Dashboard";
import Fighters from "./pages/Fighters";
import FutureAircraft from "./pages/FutureAircraft";
import CommandCenter from "./pages/CommandCenter";

function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/fighters" element={<Fighters />} />

        <Route path="/future" element={<FutureAircraft />} />

        <Route path="/command-center" element={<CommandCenter />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
