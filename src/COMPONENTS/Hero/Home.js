import React from "react";
import "./Home.css";
import hero from "../pic/usha1.png";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="container f_flex top">
          <div className="left top">
            <h1>
              Hi, I’m <br/><span>Ganthula Usha Rani</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter
                  words={[" Academic Achiever "]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>

            <p>
              Seeking a challenging role where I can leverage my skills to
              contribute effectively to a dynamic team. Committed to continuous
              learning, I aim to deliver innovative solutions and achieve
              measurable results.{" "}
            </p>
          </div>
          <div className="right">
            <div className="right_img">
              <img src={hero} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
