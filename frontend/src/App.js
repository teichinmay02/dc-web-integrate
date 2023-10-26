import logo from "./logo.svg";
import "./App.css";
import SideNav from "./components/SideNav";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import home  from "./components/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExifTool from "./components/ExifTool";
import FFmpeg from "./components/FFmpeg";
import 'react-toastify/dist/ReactToastify.css';
import Steghide from "./components/Steghide";
import Sherloq from "./components/Sherloq";
import Index from "./pages";

function App() {
  return (
    <div className="App flex">
      <SideNav />
      <div className="flex flex-col relative left-60">
        <Router>
        <Navbar />
          <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/home' element={<home />} />
          <Route path='/sherloq' element={<Sherloq />} />
          <Route path='/exiftool' element={<ExifTool />} />
          <Route path='/ffmpeg' element={<FFmpeg />} />
          <Route path='/steghide' element={<Steghide />} />
          <Route path="/index" element={<Index />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
