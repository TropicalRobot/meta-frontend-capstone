import MainNav from "../components/MainNav";

export default function Header({ children }) {
  return (
    <header className="site-header">
      <div className="site-header__container container">
        <img src="./images/Logo.svg" alt=""></img>
        <MainNav />
        {children}
      </div>
    </header>
  );
}
