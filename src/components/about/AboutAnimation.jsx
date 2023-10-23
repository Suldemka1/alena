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
            <h3>Сендажы Алена Федоровна</h3>
            <h5>
              Профессиональный{" "}
              <span className="theme-color">
                {" "}
                преподаватель английского языка{" "}
              </span>
              в городе <span className="theme-color">Кызыле</span>
            </h5>
            <p>
              "Добро пожаловать на мой сайт! Рада приветствовать Вас здесь, где
              Вы сможете освоить английский язык на высоком уровне. Независимо
              от Вашего опыта и возраста, у нас есть готовое решение для Вас.
              Уникальная методика обучения, индивидуальный подход и
              разнообразные программы помогут Вам достичь своих целей в изучении
              английского. Дайте нам возможность помочь Вам стать свободными и
              уверенными в использовании английского языка. Присоединяйтесь к
              моим ученикам, которые уже оценили качественное преподавание. "
            </p>
            <p>Добро пожаловать в мир языковых возможностей!</p>
          </div>
          <div className="extra">
            <h3 className="title">Personal Info</h3>
            <div className="list">
              <ul>
                <li>
                  <p>
                    <span>Имя :</span> Сендажы Алена Федоровна
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
