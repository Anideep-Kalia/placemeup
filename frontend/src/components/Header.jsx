import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu, IoPerson } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";
import "../styles/Header.css"
import { Headerconfig } from "../config"
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const Header = ({val}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: "1150px" });
  const [isUser, setIsUser] = useState(true);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleProfile =() => {
    setIsProfileOpen(!isProfileOpen)
  }

  const closeMobileMenu = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };
  console.log(val)
  const listClassName = isMobile ? "nav__list" : "nav__list__web";
  const linkClassName = "nav__link";

  const renderNavLinks = () => {
    const listClassName = isMobile ? "nav__list" : "nav__list__web";
    const linkClassName = "nav__link";
// for the menu with buttons for both small and large devices
    return (
      <>
        <ul className={`${listClassName} `}>
          {Headerconfig.navItems.map((item, index) => (
            
            <li key={index}>
              <NavLink
                to={item.to}
                className={` ${linkClassName} `}
                onClick={closeMobileMenu}
              >
                <p className={`${val === index ? "text-[#FFC727]" : ""}`}>
                {item.text}
                </p>
                
              </NavLink>
            </li>
          ))}
          <li className="fixed right-0 bg-red-600 text-white p-6 pl-8 text-[#FFC727] rounded-l-lg">admin</li>
        </ul>
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

        {isMobile && (
          <>
          <div className="nav__toggle md:w-[40%] w-[34%] lg:w-full  flex flex-row justify-start" id="nav-toggle" onClick={toggleMenu}>
            <IoMenu className="text-4xl" />
          </div>

        </>
        )
      }

  
      </nav>
    </header>
  );
};

export default Header;