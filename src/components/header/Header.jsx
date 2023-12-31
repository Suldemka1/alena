import React, { useState } from "react";
import Scrollspy from "react-scrollspy";
import { Link } from "react-router-dom";
import {
  FiHome,
  FiUser,
  FiSettings,
  FiGrid,
  FiCast,
  FiPhoneOutgoing,
} from "react-icons/fi";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      {/* TOPBAR  */}
      <div className={navbar ? "beny_tm_topbar animate" : "beny_tm_topbar"}>
        <div className="in">
          <div className="topbar_inner">
            <div className="logo">
              <Link to="/">
                <img src="img/logo/dark.png" alt="brand" />
              </Link>
            </div>
            <div className="menu">
              <Scrollspy
                className="anchor_nav"
                items={[
                  "home",
                  "about",
                  "service",
                  "portfolio",
                  "news",
                  "contact",
                ]}
                currentClassName="current"
                offset={-88}
              >
                <li className="current">
                  <a href="#home">
                    <span className="first">Главная</span>
                    <span className="second">Главная</span>
                  </a>
                </li>
                <li>
                  <a href="#about">
                    <span className="first">Обо мне</span>
                    <span className="second">Обо мне</span>
                  </a>
                </li>
                <li>
                  <a href="#service">
                    <span className="first">Мои услуги</span>
                    <span className="second">Мои услуги</span>
                  </a>
                </li>
                {/* <li>
                  <a href="#portfolio">
                    <span className="first">Portfolio</span>
                    <span className="second">Portfolio</span>
                  </a>
                </li> */}
                <li>
                  <a href="#news">
                    <span className="first">Мои новости</span>
                    <span className="second">Мои новости</span>
                  </a>
                </li>
                <li>
                  <a href="#contact">
                    <span className="first">Контакты</span>
                    <span className="second">Контакты</span>
                  </a>
                </li>
                {/* <li>
                  <a href="https://themeforest.net/checkout/from_item/33910000?license=regular">
                    <span className="wrapper">
                      <span className="first">Записаться</span>
                      <span className="second">Записаться</span>
                    </span>
                  </a>
                </li> */}
              </Scrollspy>
            </div>
          </div>
        </div>
      </div>
      {/* /TOPBAR */}

      <div className="mobile-menu-wrapper">
        <Scrollspy
          className="mobile_menu-icon"
          items={["home", "about", "service", "portfolio", "news", "contact"]}
          currentClassName="current"
          offset={-65}
        >
          <li>
            <a href="#home">
              <FiHome />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#about">
              <FiUser />
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="#service">
              <FiSettings />
              <span>Serivce</span>
            </a>
          </li>
          <li>
            <a href="#portfolio">
              <FiGrid />
              <span>Portfolio</span>
            </a>
          </li>
          <li>
            <a href="#news">
              <FiCast />
              <span>News</span>
            </a>
          </li>
          <li>
            <a href="#contact">
              <FiPhoneOutgoing />
              <span>Contact</span>
            </a>
          </li>
        </Scrollspy>
      </div>
      {/* End mobile-menu */}
    </>
  );
};

export default Header;
