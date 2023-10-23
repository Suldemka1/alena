import React from "react";
import Skills from "../skills/SkillsAnimation";

const AboutAnimation = () => {
  return (
    <>
      <div className="about_inner">
        <div className="left">
          <img src="img/thumbs/1-1.jpg" alt="thumb" />
          <div
            className="image"
            data-aos="fade-right"
            data-aos-duration="1200"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/slider/me.jpg"
              })`,
            }}
          ></div>
        </div>
        <div
          className="right"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="50"
        >
          <div className="short">
            <h3>Сендажи Алена Федоровна</h3>
            <h5>
              A Lead <span className="theme-color"> Visual Artist </span>
              based in <span className="theme-color">America</span>
            </h5>
            <p>
              I design and develop services for customers specializing creating
              stylish, modern websites, web services and online stores. My
              passion is to design digital user experiences through meaningful
              interactions. Check out my Portfolio
            </p>
          </div>
          <div className="extra">
            <h3 className="title">Personal Info</h3>
            <div className="list">
              <ul>
                <li>
                  <p>
                    <span>Имя :</span> Сендажи Алена Федоровна
                  </p>
                </li>
                <li>
                  <p>
                    <span>Phone :</span> +79233818117
                  </p>
                </li>
                <li>
                  <p>
                    <span>Email :</span> yourmail@gmail.com
                  </p>
                </li>
                <li>
                  <p>
                    <span>Языки :</span> Английский
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <Skills /> */}
    </>
  );
};

export default AboutAnimation;
