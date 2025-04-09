import MainNav from "../components/MainNav";
import { Link } from "react-router-dom";

export default function Header({
  children,
  isMobileNavOpen,
  setIsMobileNavOpen,
}) {
  return (
    <header className="site-header container">
      <div className="site-header__container ">
        <Link to="/">
          <img src="./images/Logo.svg" alt="Little Lemon"></img>
        </Link>

        <div className="desktop-nav show-desktop">
          <MainNav />
        </div>

        <div className="hide-desktop">
          <div
            className="mobile-toggle"
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          >
            {isMobileNavOpen ? (
              <i className="fa fa-times"></i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </div>
        </div>
        {children}
      </div>
    </header>
  );
}
