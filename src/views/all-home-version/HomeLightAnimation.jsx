import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Slider from "../../components/slider/SliderAnimation";
import About from "../../components/about/AboutAnimation";
import Service from "../../components/service/ServiceAnimation";
import Portfolio from "../../components/portfolio/PortfolioAnimation";
import Testimonial from "../../components/testimonial/Testimonial";
import Blog from "../../components/blog/BlogAnimation";
import Contact from "../../components/Contact";
import Footer from "../../components/footer/Footer";
import Address from "../../components/Address";

const HomeLightAnimation = () => {
  document.body.classList.add("light");
  return (
    <div className="home-light">
      {/* <div
        className="demo-fixed-wrapper"
        data-aos="fade-left"
        data-aos-duration="1200"
        data-aos-delay="50"
      >
        <button className="demo-button">
          <Link to="/">
            <span className="text">Demos</span>
          </Link>
        </button>
      </div> */}
      {/* demo show wrapper  */}

      <Header />
      {/* End Header */}

      <Slider />
      {/* End Slider */}

      <div className="beny_tm_about" id="about">
        <div className="container">
          <div className="beny_tm_title_holder">
            <span>Обо мне</span>
            <h2>Обо мне</h2>
            <p>Здравствуйте,</p>
          </div>
          {/* End .beny_tm_title */}
          <About />
          {/* End Slider */}
        </div>
      </div>
      {/* /ABOUT */}

      {/* SERVICES */}
      <div className="beny_tm_services" id="service">
        <div className="container">
          <div className="beny_tm_title_holder">
            <span>Мои услуги</span>
            <h2></h2>
            <p>Работаю с детьми любого возвраста от трех лет</p>
          </div>
          {/* End beny_tm_title */}
          <Service />
        </div>
      </div>
      {/* /SERVICES */}

      {/* PORTFOLIO
      <div className="beny_tm_portfolio" id="portfolio">
        <div className="container">
          <div className="beny_tm_title_holder">
            <span>Portfolio</span>
            <h2>My Portfolio</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
              egestas. Id fermentum nullam ipsum massa.
            </p>
          </div>
           End beny_tm_title 
          <Portfolio />
        </div>
      </div>*/}
      {/* /PORTFOLIO */}

      {/* TESTIMONIALS */}
      <div className="beny_tm_testimonials">
        <div className="container">
          <div className="beny_tm_title_holder">
            <span>Отзывы</span>
            <h2>Что говорят мои клиенты.</h2>
            <p>
              Всегда рада вашим отзывам
            </p>
          </div>
          {/* End beny_tm_title */}
          <div
            className="testimonials_list"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <Testimonial />
          </div>
        </div>
      </div>
      {/* /TESTIMONIALS */}

      {/* NEWS */}
      <div className="beny_tm_news" id="news">
        <div className="container">
          <div className="beny_tm_title_holder">
            <span>Блог</span>
            <h2>Последние новости</h2>
            <p>
              Всегда делюсь своим опытом и позитивом
            </p>
          </div>
          {/* End beny_tm_title */}
          <Blog />
        </div>
      </div>
      {/* /NEWS */}

      {/*  CONTACT */}
      <div className="beny_tm_contact" id="contact">
        <div className="container">
          <div className="contact_inner">
            <div
              className="left"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <div className="beny_tm_title_holder">
                <span>Контакты</span>
                <h2>Со мной всегда легко связаться</h2>
              </div>
              <div className="short_list">
                <Address />
              </div>
            </div>
            {/* End .left */}

            <div
              className="right"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="150"
            >
              <div className="title">
                <p>
                  Всегда открыта к вашим предложениям
                  <br />
                  <span>достаточно оставить заявку.</span>
                </p>
              </div>
              <div className="fields">
                <Contact />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /CONTACT */}

      {/* COPYRIGHT */}
      <div className="beny_tm_copyright">
        <div className="container">
          <Footer />
        </div>
      </div>
      {/* /COPYRIGHT */}
    </div>
  );
};

export default HomeLightAnimation;
