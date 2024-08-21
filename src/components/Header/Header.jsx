import "./Header.css";

function Header() {
  return (
    <div className="main-header">
      <div className="header-shadow">
        <section className="header-container container">
          <h1 className="main-title header-title">
            Nasza firma oferuje najwyższej jakości produkty.
          </h1>
          <p className="main-subtitle subtitle">
            Nie wierz nam na słowo - sprawdź
          </p>
          <a href="#offer" className="offer-link header-offer">
            Oferta
          </a>
        </section>
      </div>
    </div>
  );
}

export default Header;
