import React, { useState } from "react";
import Modal from "react-modal";
import Social from "../Social";

Modal.setAppElement("#root");

const BlogAnimation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }

  return (
    <>
      <div className="news_list">
        <ul>
          <li data-aos="fade-right" data-aos-duration="1200">
            <div className="list_inner">
              <div className="image" onClick={toggleModalOne}>
                <img src="img/slider/me.jpg" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + "img/slider/me.jpg"
                    })`,
                  }}
                ></div>
              </div>
              {/* End image */}

              <div className="details">
                <span>
                  Апрель 07,2021 <a href="#">Путешествие</a>
                </span>
                <h3 className="title" onClick={toggleModalOne}>
                  Приятные воспоминания
                </h3>
              </div>
              {/* End details */}

              {/* Start Modal */}
              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModalOne}
                contentLabel="My dialog"
                className="custom-modal"
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}
              >
                <div className="beny_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalOne}>
                    <img src="/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="image">
                        <img src="img/slider/me.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: `url(${
                              process.env.PUBLIC_URL + "img/slider/me.jpg"
                            })`,
                          }}
                        ></div>
                      </div>
                      {/* End image */}

                      <div className="details">
                        <span>
                          April 07,2023 <a href="#">Travel Landing</a>
                        </span>
                        <h3 className="title" onClick={toggleModalOne}>
                          Dostie Memorie
                        </h3>
                      </div>
                      {/* End details */}

                      <div className="main_content">
                        <div className="descriptions">
                          <p className="bigger">
                            Just because we can't get out and about like we
                            normally would, doesn’t mean we have to stop taking
                            pictures. There’s still plenty you can do, provided
                            you're prepared to use some imagination. Here are a
                            few ideas to keep you shooting until normal life
                            resumes.
                          </p>
                          <p>
                            Most photographers love to shoot the unusual, and
                            you don’t get much more unusual than These
                            Unprecedented Times. Right now everything counts as
                            out of the ordinary. There are a number of
                            remarkable things about these lockdown days that are
                            worth photographing now so we can remember them when
                            it is all over.
                          </p>
                          <p>
                            Streets empty that are usually busy are remarkable
                            and can evoke the sense of historical pictures from
                            before the invention of the motorcar. Other things
                            that are different at the moment will be queues to
                            get into stores and the lines marked out on the
                            floor to show how far apart we should be.
                          </p>
                          <div className="quotebox">
                            <p>
                              Most photographers find it hard to see interesting
                              pictures in places in which they are most
                              familiar. A trip somewhere new seems always
                              exactly what our photography needed, as shooting
                              away from home consistently inspires us to new
                              artistic heights.
                            </p>
                          </div>
                          <p>
                            Pretend everything is new and that you haven’t seen
                            it before, and then you will be free to notice the
                            leading lines, the places where one edge meets
                            another in delightful geometric harmony, and how the
                            ordinary things in the kitchen are transformed when
                            the light is on or off.
                          </p>
                          <p>
                            The trick here is to look slowly, and then look
                            again. Take the time to look in detail and to look
                            at the same thing from different angles, with
                            different light, long lenses and wide lenses. Then
                            move to the left a bit. You may never feel the need
                            to leave the house again.
                          </p>
                        </div>
                        {/* End description */}
                        <div className="news_share ">
                          <span>Share:</span>
                          <Social />
                        </div>
                        {/* End news share */}
                      </div>
                    </div>
                  </div>
                  {/* End box inner */}
                </div>
                {/* End modal box news */}
              </Modal>
              {/* End modal */}
            </div>
          </li>
          {/* End single blog */}

          <li
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="150"
          >
            <div className="list_inner">
              <div className="image" onClick={toggleModalTwo}>
                <img src="/img/placeholders/4-3.jpg" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + "img/slider/me.jpg"
                    })`,
                  }}
                ></div>
              </div>
              {/* End image */}

              <div className="details">
                <span>
                  April 07,2022 <a href="#">Вдохновение</a>
                </span>
                <h3 className="title" onClick={toggleModalTwo}>
                  Утренние ритуалы
                </h3>
              </div>
              {/* End details */}

              <Modal
                isOpen={isOpen2}
                onRequestClose={toggleModalTwo}
                contentLabel="My dialog"
                className="custom-modal"
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}
              >
                <div className="beny_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalTwo}>
                    <img src="/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close modal */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="image">
                        <img src="/img/placeholders/4-3.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: `url(${
                              process.env.PUBLIC_URL + "img/slider/me.jpg"
                            })`,
                          }}
                        ></div>
                      </div>
                      {/* End image */}

                      <div className="details">
                        <span>
                          April 07,2021 <a href="#">Inspiration</a>
                        </span>
                        <h3 className="title">Chul Urina</h3>
                      </div>
                      {/* End details */}
                      <div className="main_content">
                        <div className="descriptions">
                          <p className="bigger">
                            Утренние ритуалы являются важной частью нашего
                            ежедневного распорядка. Они помогают нам начать день
                            с позитивным настроением, энергией и готовностью к
                            новым вызовам. Вот несколько причин, почему утренние
                            ритуалы так важны:
                          </p>
                          <p>
                            Установление плана дня: Утренние ритуалы позволяют
                            нам определить свои приоритеты и составить план
                            действий на весь день. Это позволяет нам
                            структурировать свои задачи и улучшить нашу
                            продуктивность.
                          </p>
                          <p>
                            Поддержание физического и эмоционального
                            благополучия: Утренние ритуалы, такие как
                            упражнения, медитация или чтение, помогают нам
                            заботиться о своем физическом и эмоциональном
                            здоровье. Они позволяют нам расслабиться, укрепить
                            наше тело и ум, а также подготовиться к стрессовым
                            ситуациям, с которыми мы можем столкнуться в течение
                            дня.
                          </p>

                          <p>
                            Улучшение концентрации и фокусировки: Утренние
                            ритуалы помогают нам сфокусироваться и настроиться
                            на работу. Они позволяют нам избежать отвлекающих
                            факторов и улучшить нашу концентрацию на задачах.
                          </p>
                          <p>
                            Подготовка к социальным взаимодействиям: Утренние
                            ритуалы также помогают нам подготовиться к
                            взаимодействию с другими людьми. Они позволяют нам
                            подготовиться к встречам, собраться внутренне и
                            улучшить наше эмоциональное состояние, что, в свою
                            очередь, влияет на наше общение с окружающими.
                          </p>
                          <div className="quotebox">
                            <p>
                              В целом, утренние ритуалы предоставляют нам
                              возможность начать день сознательно и
                              целенаправленно. Они дают нам контроль над нашей
                              жизнью и позволяют нам создавать основу для
                              успешного и продуктивного дня. Таким образом,
                              важно уделить время для развития личных утренних
                              ритуалов, которые будут поддерживать наш
                              физический и эмоциональный благополучие, улучшать
                              нашу концентрацию и фокусировку, а также готовить
                              нас к успешному социальному взаимодействию.
                            </p>
                          </div>
                        </div>
                        {/* End description */}
                        <div className="news_share">
                          <span>Share:</span>
                          <Social />
                        </div>
                        {/* End news share */}
                      </div>
                    </div>
                  </div>
                </div>
              </Modal>
              {/* End modal */}
            </div>
            {/* End list inner */}
          </li>
          {/* End single blog */}

          <li
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            <div className="list_inner">
              <div className="image" onClick={toggleModalThree}>
                <img src="/img/placeholders/4-3.jpg" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + "img/slider/me.jpg"
                    })`,
                  }}
                ></div>
              </div>
              {/* END IMAGE */}

              <div className="details">
                <span>
                  April 07,2023 <a href="#">Наука</a>
                </span>
                <h3 className="title" onClick={toggleModalThree}>
                  Почему важно учить языки
                </h3>
              </div>
              {/* End details */}

              {/* Start Modal */}
              <Modal
                isOpen={isOpen3}
                onRequestClose={toggleModalThree}
                contentLabel="My dialog"
                className="custom-modal"
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}
              >
                <div className="beny_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalThree}>
                    <img src="/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE MODAL */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="image">
                        <img src="/img/placeholders/4-3.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: `url(${
                              process.env.PUBLIC_URL + "img/slider/me.jpg"
                            })`,
                          }}
                        ></div>
                      </div>
                      {/* END IMAGE */}
                      <div className="details">
                        <span>
                          April 07,2021 <a href="#">Inspiration</a>
                        </span>
                        <h3 className="title">Chul Urina</h3>
                      </div>
                      {/* End details */}
                      <div className="main_content">
                        <div className="descriptions">
                          <p className="bigger">
                            Just because we can't get out and about like we
                            normally would, doesn’t mean we have to stop taking
                            pictures. There’s still plenty you can do, provided
                            you're prepared to use some imagination. Here are a
                            few ideas to keep you shooting until normal life
                            resumes.
                          </p>
                          <p>
                            Most photographers love to shoot the unusual, and
                            you don’t get much more unusual than These
                            Unprecedented Times. Right now everything counts as
                            out of the ordinary. There are a number of
                            remarkable things about these lockdown days that are
                            worth photographing now so we can remember them when
                            it is all over.
                          </p>
                          <p>
                            Streets empty that are usually busy are remarkable
                            and can evoke the sense of historical pictures from
                            before the invention of the motorcar. Other things
                            that are different at the moment will be queues to
                            get into stores and the lines marked out on the
                            floor to show how far apart we should be.
                          </p>
                          <div className="quotebox">
                            <p>
                              Most photographers find it hard to see interesting
                              pictures in places in which they are most
                              familiar. A trip somewhere new seems always
                              exactly what our photography needed, as shooting
                              away from home consistently inspires us to new
                              artistic heights.
                            </p>
                          </div>
                          <p>
                            Pretend everything is new and that you haven’t seen
                            it before, and then you will be free to notice the
                            leading lines, the places where one edge meets
                            another in delightful geometric harmony, and how the
                            ordinary things in the kitchen are transformed when
                            the light is on or off.
                          </p>
                          <p>
                            The trick here is to look slowly, and then look
                            again. Take the time to look in detail and to look
                            at the same thing from different angles, with
                            different light, long lenses and wide lenses. Then
                            move to the left a bit. You may never feel the need
                            to leave the house again.
                          </p>
                        </div>
                        {/* END DESCRIPTION */}
                        <div className="news_share">
                          <span>Share:</span>
                          <Social />
                          {/* END SOCIAL SHARE */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
            {/* END LIST INNER */}
          </li>
          {/* End single blog */}
        </ul>
      </div>
    </>
  );
};

export default BlogAnimation;
