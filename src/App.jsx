import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pnf from "./pages/Pnf";
import Gallery from "./pages/Gallery";
import TrekkingGallery from "./pages/galleries/TrekkingGallery";
import './App.css'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery-tg" element={<TrekkingGallery />} />
          <Route path="/*" element={<Pnf />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
