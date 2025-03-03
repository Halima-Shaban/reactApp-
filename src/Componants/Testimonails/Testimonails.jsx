import React, { useRef } from "react";
import "./Testimonails.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

export default function Testimonails() {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translatex(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translatex(${tx}%)`;
  };

  return (
    <div className=" Testimonails">
      <img
        src={next_icon}
        alt=""
        className="next-btn img-fluid"
        onClick={slideForward}
      />
      <img
        src={back_icon}
        alt=""
        className="back-btn img-fluid"
        onClick={slideBackward}
      />

      <div className=" slider row">
        <ul className=" col-12 col-md-6 col-lg-3 " ref={slider}>
          <li className="col-12 col-md-6 ">
            <div className="  slide">
              <div className="user-info ">
                <img className="img-fluid" src={user_1} alt="" />
                <div>
                  <h3>William jackson 1</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate doloremque enim rem saepe debitis quod, voluptates,
                blanditiis porro necessitatibus nesciunt nam. Aperiam,
                inventore. Sit, maiores.
              </p>
            </div>
          </li>
          <li className="col-12 col-md-6 ">
            <div className="  slide">
              <div className="user-info">
                <img className="img-fluid" src={user_2} alt="" />
                <div>
                  <h3>William jackson 2</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate doloremque enim rem saepe debitis quod, voluptates,
                blanditiis porro necessitatibus nesciunt nam. Aperiam,
                inventore. Sit, maiores.
              </p>
            </div>
          </li>
          <li className="col-12 col-md-6 ">
            <div className=" slide">
              <div className="user-info">
                <img className="img-fluid" src={user_3} alt="" />
                <div>
                  <h3>William jackson 3</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate doloremque enim rem saepe debitis quod, voluptates,
                blanditiis porro necessitatibus nesciunt nam. Aperiam,
                inventore. Sit, maiores.
              </p>
            </div>
          </li>
          <li className="col-12 col-md-6  ">
            <div className=" slide">
              <div className="user-info">
                <img className="img-fluid" src={user_4} alt="" />
                <div>
                  <h3>William jackson 4</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate doloremque enim rem saepe debitis quod, voluptates,
                blanditiis porro necessitatibus nesciunt nam. Aperiam,
                inventore. Sit, maiores.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
