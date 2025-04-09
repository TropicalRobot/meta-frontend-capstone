import "./App.css";
import Header from "./layout/Header";
import Main from "./layout/Main";
import Footer from "./layout/Footer";
import { useState } from "react";
import MainNav from "./components/MainNav";

function App() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <>
      <Header
        isMobileNavOpen={isMobileNavOpen}
        setIsMobileNavOpen={setIsMobileNavOpen}
      />
      {isMobileNavOpen && (
        <div className="hide-desktop mobile-nav">
          <MainNav />
        </div>
      )}
      <Main />
      <Footer />
    </>
  );
}

export default App;
