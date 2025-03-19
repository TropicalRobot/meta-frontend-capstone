import MainNav from "../components/MainNav";

export default function Footer({ children }) {
  return (
    <footer className="site-footer">
      <div className="site-footer__container container">
        <img src="./images/Logo.svg" alt=""></img>
        <MainNav />
        {children}
      </div>
    </footer>
  );
}
