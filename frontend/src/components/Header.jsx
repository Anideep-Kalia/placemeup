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
        {/* <ul className={listClassName}>
        <li>
              <NavLink
                to="/signin"
                className={linkClassName}
                onClick={closeMobileMenu}
              >
                <button className="btn bg-white text-black px-3 py-2 lg:mt-0 mt-2">Sign In</button>

              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={linkClassName}
                onClick={closeMobileMenu}
              >
                <button className="btn px-3 py-2 lg:mt-0 mt-2 bg-[#FFC727] text-white">Register</button>

              </NavLink>
            </li>
        </ul> */}
      </>
    );
  };


  return (
    <header className="header">
      <nav className="nav flex flex-row justify-start">
        <NavLink to="/" className="nav__logo justify-start ">
          <div className="flex flex-row justify-start items-center gap-2 w-[40vw]">
          <div className="rounded-full w-8 h-8 bg-[#FFC727] text-white flex flex-col justify-center items-center"><p>P</p></div>
            <h1 className="text-[#FFC727] font-semibold text-4xl">PlaceMeUP</h1>
        
          </div>
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
        ) : (<div className="flex flex-row justify-center">
                    {renderNavLinks()}
        </div>

        )}
      </nav>
    </header>
  );
};

export default Header;