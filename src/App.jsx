import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
// import Certificates from "./Components/Certificates";
import TechStack from "./Components/TechStack";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Portfolio />
              <Contact />
            </>
          }
        />
        {/* <Route path="/certificates" element={<Certificates />} /> */}
        <Route path="/techstack" element={<TechStack />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;