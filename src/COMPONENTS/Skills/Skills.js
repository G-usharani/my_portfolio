import React from "react";
import "./Skills.css";
import Card from "./Card";
import Skills_data from "./Skills_data";

const Skills = () => {
  return (
    <>
      <section className='skills top' id='skills'>
        <div className='container'>
          <div className='heading text-center'>
            <h1>Skills</h1>
          </div>

          <div className='content'>
            <Card skills={Skills_data.skills}  />
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
