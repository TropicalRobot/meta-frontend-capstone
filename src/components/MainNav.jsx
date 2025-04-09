import Nav from "./Nav";
import { Link } from "react-router";

export default function MainNav() {
  return (
    <Nav>
      <ul className="main-nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        {/* <li>
          <a href="/">Menu</a>
        </li> */}
        <li>
          <Link to="/booking">Reservations</Link>
        </li>
        {/* <li>
          <a href="/">Order Online</a>
        </li>
        <li>
          <a href="/">Login</a>
        </li> */}
      </ul>
    </Nav>
  );
}
