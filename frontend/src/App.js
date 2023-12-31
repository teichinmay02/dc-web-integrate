import logo from "./logo.svg";
import "./App.css";
import SideNav from "./components/SideNav";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import home from "./components/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExifTool from "./components/ExifTool";
import FFmpeg from "./components/FFmpeg";
import "react-toastify/dist/ReactToastify.css";
import Steghide from "./components/Steghide";
import Sherloq from "./components/Sherloq";
import Index from "./pages/index";

function App() {
  return (
    <div className="App flex">
      <Router>
        <div>
          <Routes>
            <Route path="/index" element={<Index />} />
          </Routes>
        </div>

        <div className="flex flex-col relative left-60">
          {window.location.pathname !== '/index' && <SideNav />}
          {window.location.pathname !== '/index' && <Navbar />}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/home" element={<home />} />
            <Route path="/sherloq" element={<Sherloq />} />
            <Route path="/exiftool" element={<ExifTool />} />
            <Route path="/ffmpeg" element={<FFmpeg />} />
            <Route path="/steghide" element={<Steghide />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
