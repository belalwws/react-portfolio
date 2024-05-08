import { useState } from "react";
import Header from "./components/1-header/Header";
import Hero from "./components/2-hero/Hero";
import Main from "./components/3-main/Main";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setscrol(true);
      } else {
        setscrol(false);
      }
    });
  }, []);
  const [scrol, setscrol] = useState(false);

  return (
    <div id="up" className="container">
      <Header />

      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />

      <Contact />
      <div className="divider" />

      <Footer />
      <a href="#up">
        {" "}
        <button
          style={{ opacity: scrol ? 1 : 0, transition: "0.5s" }}
          className="scrolup icon-arrow-outline-up"
        ></button>
      </a>
    </div>
  );
}

export default App;
