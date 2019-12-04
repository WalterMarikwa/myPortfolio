import React from "react";
import Data from "../../components/data/ProjectsList";
import "../styles/Projects.css";

function Projects() {
  return (
    <div className="Header-prod">
      <h2 className="head-name">My Portfolio</h2>
      <div className="work-container">
      {Data.map((postData, index) => {
        return (
          <div className="product__card">
            <img className="product-img" src={postData.img} alt="project thumbnail"/>
            <h3 className="product-name">{postData.name}</h3>
            <h4 className="product-skill">{postData.Skill}</h4>
            <a href={postData.btn} target="_blank" rel="noopener noreferrer"><button className="code-btn">View Code</button></a>
          </div>
        );
      })}
      </div>
    </div>
  );
}

export default Projects;