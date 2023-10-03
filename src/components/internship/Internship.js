import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Element } from "react-scroll";
 import "./intern.css";
function Internship() {
  const para = [
    " From July 2023 – September 2023: Python Full Stack Developer  -  Shiash Info Solutions Private Limited - Chennai.",

    "Assisted in the development of new webpages, using Python and relevant web frameworks, such as Django and database Mysql",
    
  ];

  return (
    <Element id="internship"> 
      <div className="internship-main">
        <div className="internship">
          <div className="row a_contains mx-auto">
            <div className=" col-sm-12 col-md-12 col-lg-6  about-left-contain">
           
              <img
                src="https://storage.googleapis.com/pai-images/02730c55a78d4f8dbbb48bf3ab589120.jpeg"  
                alt = "Internship"
                
          />
              
              
            </div>
           
            <div className=" col-sm-12 col-md-12 col-lg-6 about-right-contain">
              <h2>
                <span className="internship-highlight">Internship</span>
              </h2>
              {para.map((para, index) => {
                return (
                  <p key={index}>
                    <ReactMarkdown
                      components={{
                        strong: ({ node, ...props }) => (
                          <span className="internship-highlight" {...props} />
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

export default Internship;
