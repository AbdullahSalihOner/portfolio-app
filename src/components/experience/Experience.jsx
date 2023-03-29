import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">


        <div className="experience_frontend">
          <h3> Frontend Developmet </h3>

          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>HTML</h4>
                <small>Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>CSS</h4>
                <small>Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>JavaScript</h4>
                <small>Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>Bootstrap</h4>
                <small>Basic</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>React</h4>
                <small>Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>Angular</h4>
                <small>Basic</small>
              </div>
            </article>
          </div>
        </div>





        <div className="experience_backend">
          <h3> Backend Developmet </h3>

          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>Java</h4>
                <small>Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>C#</h4>
                <small>Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>Spring</h4>
                <small>Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>MySql</h4>
                <small>Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>Python</h4>
                <small>Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>PostgreSql</h4>
                <small>Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill  className="experience_details-icon"/>
              <div>
                <h4>.NET</h4>
                <small>Intermediate</small>
              </div>
            </article>
          </div>
        </div>





        <div className="experience_backend">
          <h3> Mobile Developmet </h3>

          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>Java</h4>
                <small>Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>Flutter</h4>
                <small>Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>React Native</h4>
                <small>Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
