import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SimulationPage from "./screens/simulation/simulation";
import LandingPage from "./screens/landing";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/prediction" element={<SimulationPage />} />
      </Routes>
    </BrowserRouter>
  );
}
