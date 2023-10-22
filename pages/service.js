import React from "react";

const Service = () => {
  const frontendServices = [
    {
      title: "JavaScript Development",
      description:
        "Expertise in modern JavaScript frameworks and libraries for dynamic web applications.",
    },
    {
      title: "React Development",
      description:
        "Building interactive user interfaces and single-page applications using React framework.",
    },
    {
      title: "HTML/CSS Coding",
      description:
        "Creating responsive and visually appealing web layouts with HTML5 and CSS3.",
    },
  ];

  return (
    <div className="service">
      <div className="container">
        <h2 className="description">Frontend Development Services</h2>
        <ul>
          {frontendServices.map((service, index) => (
            <li className="projectItem" key={index}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Service;
