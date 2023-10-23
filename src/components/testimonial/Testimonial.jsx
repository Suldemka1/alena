import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          arrow: false,
          autoplay: true,
        },
      },
    ],
  };

  const testimonialContent = [
    {
      img: "mother",
      desc: `Преподаватель Английского языка был очень профессионален и компетентен. Во время занятий он всегда подготовлен и структурирован. Методы обучения, которые он использовал, были разнообразными и интересными, что позволяло мне легче усваивать материал. Он также был терпеливым и всегда готов помочь, если что-то не понималось. Благодаря его учебным подходам и открытому отношению, я смог значительно улучшить свои навыки в изучении английского языка.`,
      name: "Эльвира Иванова",
      designation: "Marketing Manager",
    },
    {
      img: "mother",
      desc: `Мой преподаватель Английского языка был отличным мотиватором и великим источником вдохновения. Он всегда поддерживал и поощрял меня в моей учебе. Он создавал дружественную и доверительную атмосферу, которая помогала мне чувствовать себя комфортно и свободно выражаться на английском языке. Благодаря его энтузиазму и страсти к преподаванию, я стал более уверенным в своих способностях и получил большое удовольствие от изучения английского языка.`,
      name: "Аржаана Саая",
      designation: "Photographer",
    },
    {
      img: "mother",
      desc: `К сожалению, мой преподаватель Английского языка не оправдал моих ожиданий. Уроки были скучными и неинтересными, и я часто не мог сосредоточиться на материале. Он не обладал достаточным объяснительным навыком и не смог эффективно передать информацию. Было заметно, что ему не хватало педагогического опыта и индивидуального подхода к ученикам. Я считаю, что трата времени и ресурсов на эти уроки была нецелесообразной.`,
      name: "Анай-Хаак Монгуш",
      designation: "App Developer",
    },
  ];

  return (
    <Slider {...settings}>
      {testimonialContent.map((val, i) => (
        <div className="item" key={i}>
          <div className="list_inner">
            <div className="left">
              <img src="img/thumbs/1-1.jpg" alt="tumb" />
              <div
                className="main"
                style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + `img/testimonials/${val.img}.jpg`
                  })`,
                }}
              ></div>
            </div>
            <div className="right">
              <img className="svg" src="img/svg/quote.svg" alt="quote" />
              <p className="text">{val.desc}</p>
              <div className="details">
                <h3 className="name">
                  <span>{val.name}</span>
                </h3>
                <span className="job">{val.designation}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
