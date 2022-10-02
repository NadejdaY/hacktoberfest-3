import React, { useEffect, useRef, useState } from "react";
import headerLogo from "../../images/Headerlogo.svg";
import themeSwitcher from "../../images/ThemeSwitch.svg";
import MagnifyingGlass from "../../images/MagnifyingGlass.svg";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const goToCountryPage = (e) => {
    e.preventDefault();
    navigate(`/${e.target[0].value}`);
    e.target[0].value = "";
    ref.current.classList.remove("header-controls__form--active");
  };

  let LSTheme = localStorage.getItem("theme");

  if (LSTheme === null) {
    LSTheme = 'light';
    localStorage.setItem("theme", "light");
  }

  const [theme, setTheme] = useState(LSTheme);

  const toggleTheme = () => {
    setTheme(LSTheme === "light" ? "dark" : "light");
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  });
  const ref = useRef();
  const toggleSearchForm = () =>
    ref.current.classList.toggle("header-controls__form--active");
  return (
    <header className="header">
      <div className="header__container container">
        <Link className="header-logo" to="/">
          <img src={headerLogo} alt="logo icon" className="header-logo__icon" />
          <h1 className="header-logo__title">REACT WEATHER</h1>
        </Link>
        <div className="header-controls">
          <img
            onClick={toggleTheme}
            src={themeSwitcher}
            alt="switch theme"
            className="header-controls__theme-switcher"
          />
          {window.innerWidth < 768 && (
            <button
              className="header-controls__search-button"
              onClick={toggleSearchForm}
            >
              <img src={MagnifyingGlass} alt="search icon" />
            </button>
          )}
          <form
            ref={ref}
            className={`header-controls__form ${
              window.innerWidth < 768 && "header-controls__form--collapsed"
            }`}
            onSubmit={(e) => goToCountryPage(e)}
          >
            <input type="text" className="header-controls__input" />
          </form>
        </div>
      </div>
    </header>
  );
}

export default Header;
