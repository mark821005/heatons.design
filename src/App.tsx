import { Routes, Route, useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";
import { ScrollProgress } from "./components/ui/ScrollProgress";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <div className="container mx-auto px-4">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <div className="fixed right-0 bottom-0 left-0 z-50 w-full">
        <ScrollProgress />
      </div>
    </AnimatePresence>
  );
}

export default App;
