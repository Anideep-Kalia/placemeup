import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";
import "../styles/Header.css"
import { Headerconfig } from "../config"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: "1150px" });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMobileMenu = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const renderNavLinks = () => {
    const listClassName = isMobile ? "nav__list" : "nav__list__web";
    const linkClassName = "nav__link";
// for the menu with buttons for both small and large devices
    return (
      <>
        <ul className={listClassName}>
          {Headerconfig.navItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.to}
                className={linkClassName}
                onClick={closeMobileMenu}
              >
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>
        <ul className={listClassName}>
          {Headerconfig.buttons.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.to}
                className={linkClassName}
                onClick={closeMobileMenu}
              >
                <button className="btn px-3 py-3 lg:mt-0 mt-2">{item.text}</button>

              </NavLink>
            </li>
          ))}
        </ul>
      </>
    );
  };


  //For logo and responsiveness of the whole header i.e. burger menu and close button
  return (
    <header className="header">
      <nav className="nav">
        <NavLink to="/" className="nav__logo">
          {Headerconfig.title}
        </NavLink>

        {isMobile && (
          <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
            <IoMenu />
          </div>
        )}

        {isMobile ? (
          <div
            className={`nav__menu  ${isMenuOpen ? "show-menu" : ""}`}
            id="nav-menu"
          >
            {renderNavLinks()}
            <div className="nav__close" id="nav-close" onClick={toggleMenu}>
              <IoClose />
            </div>
          </div>
        ) : (
          renderNavLinks()
        )}
      </nav>
    </header>
  );
};

export default Header;