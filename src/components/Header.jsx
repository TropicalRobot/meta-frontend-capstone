import Nav from "./Nav";

export default function Header({ children }) {
  return (
    <header className="site-header">
      <div className="site-header__container container">
        <img src="./images/Logo.svg" alt=""></img>

        <Nav>
          <ul className="site-header-menu">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Menu</a>
            </li>
            <li>
              <a href="/">Reservations</a>
            </li>
            <li>
              <a href="/">Order Online</a>
            </li>
            <li>
              <a href="/">Login</a>
            </li>
          </ul>
        </Nav>
        {children}
      </div>
    </header>
  );
}
