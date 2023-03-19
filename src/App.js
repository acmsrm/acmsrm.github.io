import "./App.css";
import Home from "./Home";
import Event from "./Event";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Common/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Event />} />
      </Routes>
    </div>
  );
}

export default App;
