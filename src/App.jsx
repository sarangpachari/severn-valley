import './App.css'
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pnf from "./pages/Pnf";
import Gallery from "./pages/Gallery";
import TrekkingGallery from "./pages/galleries/TrekkingGallery";
import SightSeeTourGallery from "./pages/galleries/SightSeeTourGallery";
import JungleSafariGallery from "./pages/galleries/JungleSafariGallery";
import TeaGardenGallery from "./pages/galleries/TeaGardenGallery";
import Accomodation from "./pages/galleries/Accomodation";
import YogaMeditationGallery from "./pages/galleries/YogaMeditationGallery";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery-tg" element={<TrekkingGallery />} />
          <Route path="/gallery-ss" element={<SightSeeTourGallery />} />
          <Route path="/gallery-js" element={<JungleSafariGallery />} />
          <Route path="/gallery-teag" element={<TeaGardenGallery />} />
          <Route path="/gallery-ac" element={<Accomodation />} />
          <Route path="/gallery-ym" element={<YogaMeditationGallery />} />
          <Route path="/*" element={<Pnf />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
