import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Element } from "react-scroll";
import "./About.css";
function About() {
  const para = [
    " 💻Hello! I'm Faiza Afrin, a passionate Full Stack Developer with a knack for turning ideas into digital reality.",
    " 💻My passion for problem-solving fuels my enthusiasm for tackling complex challenges. I'm also committed to lifelong learning, as technology is ever-evolving..",
    " 💻I'm always excited to collaborate on new projects and explore innovative ideas. If you'd like to work together, have a chat, or feel free to contact",
    " 💻Thanks for visiting my page. I invite you to explore the projects and work samples in my portfolio to get a better sense of my skills and expertise..",
  ];

  return (
    <Element id="about"> 
      <div className="about-main">
        <div className="about">
          <div className="row a_contains mx-auto">
            <div className=" col-sm-12 col-md-12 col-lg-6  about-left-contain">
              <img
                src="https://www.21kschool.com/blog/wp-content/uploads/2023/04/Girls-coding-myth.png"
                alt="about"
              />
            </div>
            <div className=" col-sm-12 col-md-12 col-lg-6 about-right-contain">
              <h2>
                Know Who I <span className="about-highlight">AM</span>
              </h2>
              {para.map((para, index) => {
                return (
                  <p key={index}>
                    <ReactMarkdown
                      components={{
                        strong: ({ node, ...props }) => (
                          <span className="about-highlight" {...props} />
                        ),
                      }}
                      children={para}
                    />
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default About;
