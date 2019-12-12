import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <div className="App">
      <section className="hero">
        <div className="hero-inner">
          <h1>Walter Ishevanesu Marikwa</h1>
          <h2>Jr Software Developer</h2>
          <a href="https://waltermarikwa.netlify.com/contact" className="btn">
            Know More...
          </a>
        </div>
      </section>
      <div className="skills">
        <div className="skils_header">
          <h2>Technolgies</h2>
        </div>
        <div className="skills_icons">
          <i class="devicon-html5-plain-wordmark colored"></i>

          <i class="devicon-css3-plain-wordmark colored"></i>

          <i class="devicon-sass-original colored"></i>

          <i class="devicon-bootstrap-plain-wordmark colored"></i>

          <i class="devicon-javascript-plain colored"></i>

          <i class="devicon-jquery-plain-wordmark colored"></i>

          <i class="devicon-react-original-wordmark colored"></i>

          <i class="devicon-nodejs-plain-wordmark colored"></i>

          <i class="devicon-dot-net-plain-wordmark colored"></i>

          <i class="devicon-mongodb-plain-wordmark colored"></i>

          <i class="devicon-csharp-line colored"></i>

          <i class="devicon-mysql-plain-wordmark colored"></i>

          <i class="devicon-mocha-plain colored"></i>

          <i class="devicon-git-plain-wordmark colored"></i>

          <i class="devicon-github-plain-wordmark colored"></i>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg">
            <img className="img" src={require("../../images/walter.jpg")} alt="walter"/>
            <ul></ul>
          </div>
          <div className="col-lg">
            <div className="intro-header">
              <h1>About Me</h1>
            </div>
            <p className="intro_paragraph">
              Hello Good Humans, I'm a driven professional with a broad of
              technical skill set. I'm passionate about learning new
              technologies, bringing ideas to life, and working in teams to
              build cool applications for users. I am open minded and always
              ready to learn new things whether it's tech related or just life
              in general.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
