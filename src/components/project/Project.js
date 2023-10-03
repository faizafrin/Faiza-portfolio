import React, { useState } from "react";
import { Element } from "react-scroll";
import Card from "./Card";
import "./Project.css";

function Project() {
  const [value, setValue] = useState("all");
  let data = [
    {
      key: ["react", "redux", "all", "mern", "node"],
      img: "./asset/project/bulkmail.png",
      title: "Bulk-Email",
      githubFrontEnd:
        "https://github.com/faizafrin/Bulk-Email-Frontend",
      githubBackEnd: "https://github.com/faizafrin/Bulk-Email-Backend",
      sourceCode: "https://main--luxury-kangaroo-208623.netlify.app/",
      
      
      shortNote:
        "A bulk email, also known as a mass email or email blast, refers to sending a single email message to a large group of recipients simultaneously.",
      longNote: [
        " This is often done for marketing, communication, or informational purposes. Bulk emails are commonly used by businesses and organizations to reach a wide audience efficiently.",
        " However, it's essential to follow best practices to ensure that bulk email campaigns are well-targeted, contain relevant content, and comply with email regulations to avoid being marked as spam."
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
      img: "./asset/project/akgstore.jpeg",
      title: "AK Grocery Store",
      githubFrontEnd: "https://github.com/faizafrin/AK---Grocery-Store",
      githubBackEnd: "https://github.com/faizafrin/AK-Grocery-Backend",
      sourceCode: "https://coruscating-sfogliatella-bf8131.netlify.app/",
      shortNote:
        "Grocery stores play a crucial role in ensuring communities have access to essential supplies and groceries.",
      longNote: [
          "A grocery store is a retail establishment where customers can purchase various food and household items. It typically offers a wide range of products, including fresh produce, dairy, meat, canned goods, snacks, and cleaning supplies. Grocery stores are essential for daily life, providing a convenient one-stop-shop for consumers to fulfill their food and household needs. "
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
      
      ],
    },
    {
      key: ["react", "express","html", "all", "restApi", "mern", "node"],
      img: "./asset/project/rental.jpeg",
      title: "Rental Equipment",
      githubFrontEnd: "https://github.com/faizafrin/Rental-Equipment---FrontEnd",
      githubBackEnd: "https://github.com/faizafrin/Equipment---Backend",
      sourceCode: "https://main--imaginative-rolypoly-4dbfab.netlify.app/",
      shortNote:
        "An equipment rental website is an online platform that facilitates the renting of various tools, machinery, and equipment for short-term or long-term use..",
      longNote: [
        // "This is  **fullstack** web application",
        "These websites provide a convenient way for individuals and businesses to access a wide range of equipment without the need for ownership or long-term commitments. Users can typically browse the website's inventory, check equipment availability, and make reservations or bookings online. Many rental websites offer detailed information about each item, including specifications, rental rates, and pick-up/delivery options. These platforms have become increasingly popular in construction, home improvement, and event planning industries, providing cost-effective solutions for temporary equipment needs."
        
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
      
      
      ],
    },
  //   {
  //     key: ["javascript", "html", "all"],
  //     img: "./asset/project/content.png.jpeg",
  //     title: "YouTube-Clone",
  //     githubFrontEnd: "https://github.com/faizafrin/Youtube-Clone",
  //     githubBackEnd: "",
  //     sourceCode: "https://main--steady-selkie-8b5c3d.netlify.app/",
  //     shortNote:
  //       "A YouTube clone project involves recreating the fundamental features of YouTube.",
  //     longNote: [
  //       "This is my first **JavaScript DOM rendering** project. And main feature of the website is the **search option** and **HTML** elements are **rendered only JavaScript DOM**.",
  //       "The application is made using **HTML** and styled using **CSS** and this website uses **JavaScript** for **dynamic loading**.",
       
  //       "This  **website is responsive** for **all screen size**.",
  //     ],
  //     skills: [
  //       {
  //         name: "HTML5",
  //         link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  //         color: "#945915",
  //       },
  //       {
  //         name: "CSS3",
  //         //  link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
  //         link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  //         color: "#0C3A80",
  //       },
  //       {
  //         name: "Javascript",
  //         link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  //         color: "#858626",
  //       },
  //     ],
  //   },
  //   {
  //     key: ["mockApi", "html", "css", "all", "javascript", "React"],
  //     img: "./asset/project/ip.png",
  //     title: "Indian-post",
  //     githubFrontEnd: "https://github.com/faizafrin/Indian-Post",
  //     githubBackEnd: "",
  //     sourceCode: "https://heroic-tarsier-446aac.netlify.app/",
  //     shortNote:
  //       "",
  //     longNote: [
        
  //       "The application is made using **HTML** and styled using **CSS** and this website uses **JavaScript** for **dynamic loading**.",
        
  //       "All **HTML** elements are **rendered only in JavaScript DOM**.",
        
  //     ],
  //     skills: [
  //       {
  //         name: "HTML5",
  //         link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  //         color: "#945915",
  //       },
  //       {
  //         name: "CSS3",
  //         link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  //         color: "#0C3A80",
  //       },
  //       {
  //         name: "Javascript",
  //         link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  //         color: "#858626",
  //       },
  //     ],
  //   },
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
