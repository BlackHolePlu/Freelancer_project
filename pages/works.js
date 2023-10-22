import React from "react";
import starImg from "../img/star.png";
import todolist from "../img/todolist.png";
import portfol from "../img/portfoli.png";

const Works = () => {
  const starImage = starImg;
  const todoList = todolist;
  const portfoli = portfol;

  const projects = [
    {
      id: 1,
      title: "Todolist",
      description: "Description of Project 1",
      technologies: ["React", "JavaScript", "HTML", "CSS"],
      image: todoList,
    },
    {
      id: 2,
      title: "StarDB",
      description: "Description of Project 2",
      technologies: ["React", "JavaScript", "HTML", "CSS"],
      image: starImage,
    },
    {
      id: 3,
      title: "Portfolio",
      description: "Description of Project 3",
      technologies: ["React", "JavaScript", "HTML", "CSS"],
      image: portfoli,
    },
  ];

  return (
    <div className="works">
      <div className="container">
        <h2 className="description">Completed projects</h2>
        <ul>
          {projects.map((project) => (
            <li className="projectItem" key={project.id}>
              <div className="projectCard">
                <div className="projectCardText">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <p>Technologies used: {project.technologies.join(", ")}</p>
                </div>
                <img src={project.image} alt={project.title} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Works;
