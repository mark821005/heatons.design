import { Routes, Route, useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Methodology from "./pages/Methodology";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="popLayout">
      <Header />
      <div className="container mx-auto px-4">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/methodology" element={<Methodology />} />
        </Routes>
      </div>
      <Footer />
    </AnimatePresence>
  );
}

export default App;
