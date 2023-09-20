import React, { useState } from "react";
import { Element } from "react-scroll";
import Card from "./Card";
import "./Project.css";

function Project() {
  const [value, setValue] = useState("all");
  let data = [
    {
      key: ["react", "redux", "all", "mern"],
      img: "./asset/project/bg1.png",
      title: "E-Commerce Website",
      githubFrontEnd:
        "https://github.com/faizafrin/Ecommercem---LA-collection",
      githubBackEnd: "",
      sourceCode: "https://lambent-kheer-5c541f.netlify.app/",
      
      
      shortNote:
        "I built a ecommerce web application.",
      longNote: [
        "This repository contains the source code for an eCommerce website built using React.",
        "The website provides users with a platform to browse and purchase various products from different categories.",
        "It includes features such as product listings, product details, shopping cart functionality, and checkout process.",
      ],
      skills: [
        // {
        //   name: "React",
        //   link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
        // },
        // {
        //   name: "redux-toolkit",
        //   link: "./asset/redux.svg",
        // },
        // {
        //   name: "Node",
        //   link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        // },
        // {
        //   name: "Express",
        //   link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        // },
        // {
        //   name: "Mongo DB",
        //   link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg",
        // },

        // {
        //   name: "Bootstrap",
        //   link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        // },
        // {
        //   name: "Chart JS",
        //   link: "./asset/chartjs.svg",
        // },
        // {
        //   name: "JWT",
        //   link: "./asset/jwt.svg",
        // },
        // {
        //   name: "Razorpay",
        //   link: "./asset/razorpay.svg",
        // },
      ],
    },
    {
      key: ["react", "express", "all", "restApi", "mern", "node"],
      img: "./asset/project/dashboard.png",
      title: "Mentor & Student Management",
      githubFrontEnd:
        "https://github.com/faizafrin/Zen-Capstone-Fe",
      githubBackEnd: "https://github.com/faizafrin/Capstone-ZEN-BE",
      sourceCode: "https://flourishing-bunny-7e391f.netlify.app/",
      shortNote:
        "The app is used to store class Event Management for students.",
      longNote: [
        "This is  **fullstack** web application.",
        "The frontend is built using **React** with **React-Bootstrap** for styling.",
        "The backend is build with **Node.js** , **Express.js** and used **MongoDB** as database.",
        "Main concept of the app is use to **store class Event Management for students** details. And **particular student** for **database**and **how many completed individual tasks**.",
      ],
      skills: [
        {
          name: "React",
          link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
        },
        {
          name: "Node",
          link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Express",
          link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        },
        {
          name: "Mongo DB",
          link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg",
        },

        {
          name: "Bootstrap",
          link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        },
      ],
    },
   
     {
      key: ["react", "react hook", "all", "mern",],
      img: "./asset/project/regform.webp",
      title: "Registration Form",
      githubFrontEnd: "https://github.com/faizafrin/React-Hook-Form",
      githubBackEnd: "",
      sourceCode: "https://taupe-fox-7929e8.netlify.app/",
      shortNote:
        "Creating a basic react application which has a form by done in react-hook-form.",
      longNote: [
        "A basic react application which has a form with name,email,password,mobile,gender.",
        " All these validations and form are done by react-hook-form.",
      ],
      skills: [
        {
          name: "React",
          link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
        },
       
       
        {
          name: "Bootstrap",
          link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        },
      
      ],
    },
    {
      key: ["react", "express","html", "all", "restApi", "mern", "node"],
      img: "./asset/project/tac.jpeg",
      title: "TIK TAC TOE",
      githubFrontEnd: "https://github.com/faizafrin/Tik-Tac-Toe",
      githubBackEnd: "",
      sourceCode: "https://cheery-snickerdoodle-b2b6f3.netlify.app/",
      shortNote:
        "Creating a Tic Tac Toe game using React is a popular beginner's project in web development. It's a simple game that involves two players taking turns to mark cells in a 3x3 grid until one of them wins or the game ends in a draw.",
      longNote: [
        // "This is  **fullstack** web application",
        "The frontend is built using **JavaScript**,**HTML**,**CSS**,**React**.",
        
      ],
      skills: [
        {
          name: "HTML5",
          link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
          color: "#945915",
        },
        {
          name: "CSS3",
          //  link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
          link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
          color: "#0C3A80",
        },
        {
          name: "Javascript",
          link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          color: "#858626",
        },
        
      
      ],
    },
    {
      key: ["javascript", "html", "all"],
      img: "./asset/project/content.png.jpeg",
      title: "YouTube-Clone",
      githubFrontEnd: "https://github.com/faizafrin/Youtube-Clone",
      githubBackEnd: "",
      sourceCode: "https://main--steady-selkie-8b5c3d.netlify.app/",
      shortNote:
        "A YouTube clone project involves recreating the fundamental features of YouTube.",
      longNote: [
        "This is my first **JavaScript DOM rendering** project. And main feature of the website is the **search option** and **HTML** elements are **rendered only JavaScript DOM**.",
        "The application is made using **HTML** and styled using **CSS** and this website uses **JavaScript** for **dynamic loading**.",
       
        "This  **website is responsive** for **all screen size**.",
      ],
      skills: [
        {
          name: "HTML5",
          link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
          color: "#945915",
        },
        {
          name: "CSS3",
          //  link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
          link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
          color: "#0C3A80",
        },
        {
          name: "Javascript",
          link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          color: "#858626",
        },
      ],
    },
    {
      key: ["mockApi", "html", "css", "all", "javascript", "React"],
      img: "./asset/project/ip.png",
      title: "Indian-post",
      githubFrontEnd: "https://github.com/faizafrin/Indian-Post",
      githubBackEnd: "",
      sourceCode: "https://heroic-tarsier-446aac.netlify.app/",
      shortNote:
        "",
      longNote: [
        
        "The application is made using **HTML** and styled using **CSS** and this website uses **JavaScript** for **dynamic loading**.",
        
        "All **HTML** elements are **rendered only in JavaScript DOM**.",
        
      ],
      skills: [
        {
          name: "HTML5",
          link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
          color: "#945915",
        },
        {
          name: "CSS3",
          link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
          color: "#0C3A80",
        },
        {
          name: "Javascript",
          link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          color: "#858626",
        },
      ],
    },
  ];

  let datas = data.filter((item) => item.key.some((items) => items === value));
  return (
    <Element name="project">
      <div className=" project">
        <h1>
          My Recent <span className="project-highlight">Works</span>
        </h1>
        <div className="dropdown">
          <select
            name=""
            id=""
            value={value}
            onChange={(e) => setValue(e.target.value)}
          >
            <option value="all">All</option>
            <option value="javascript">JavaScript DOM</option>
            <option value="react">React JS</option>
            <option value="node">Node JS</option>
            <option value="mockApi">Mock Api</option>
            <option value="restApi">Rest Api</option>
            <option value="mern">MERN</option>

          </select>
        </div>
        <div className="row project-container">
          {datas.length > 0 &&
            datas.map((item, index) => {
              return <Card data={item} key={index} />;
            })}
        </div>
      </div>
    </Element>
  );
}

export default Project;
