
import "./Navigation.css";

function Nav() {
  return (
    <nav className="main-nav">
      <div className="nav-container container">
        <a href="#">Moja firma</a>
        <ul className="nav-list">
          <li className="nav-item nav-link">
            <a href="#about">O nas</a>
          </li>
          <li className="nav-item nav-link">
            <a href="#offer">Oferta</a>
          </li>
          <li className="nav-item link-contact">
            <span>Kontakt</span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
