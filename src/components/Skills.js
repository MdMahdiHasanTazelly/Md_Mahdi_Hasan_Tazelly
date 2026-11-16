import { Element } from "react-scroll";

function Skills() {
  return (
    <Element name="skills">
      <div className="skill-section">
        <h2>Skills</h2>
        <div className="skillsContainer">
          <div className="skills">
            <h3>Frontend</h3>
            <ul className="skill-list">
              <li>
                <img src="/images/react.svg" alt="react image" />
                &nbsp; React
              </li>
              <li>
                <img src="/images/html.svg" alt="html image" />
                &nbsp; HTML
              </li>
              <li>
                <img src="/images/css.svg" alt="css image" />
                &nbsp; CSS
              </li>

              <li>
                <img src="/images/bootstrap.png" alt="bootstrap image" />&nbsp;
                Bootstrap
              </li>
              <li>
                <img src="/images/tailwind-css.svg" alt="tailwind image" />&nbsp;
                Tailwind
              </li>
            </ul>
          </div>

          <div className="skills">
            <h3>Backend & Databases</h3>
            <ul className="skill-list">
              <li>
                <img src="/images/express.svg" alt="express image" />
                &nbsp; Express
              </li>
              <li>
                <img src="/images/nodejs.svg" alt="nodejs image" />
                &nbsp; Node
              </li>
              <li>
                <img src="/images/mysql.svg" alt="mysql image" />
                &nbsp; MySQL
              </li>
              <li>
                <img src="/images/mongodb.svg" alt="mongodb image" />
                &nbsp; MongoDB
              </li>
            </ul>
          </div>

          <div className="skills">
            <h3>Languages</h3>
            <ul className="skill-list">
              <li>
                <img src="/images/java.svg" alt="java image" />&nbsp;
                Java
              </li>
              <li>
                <img src="/images/c++.svg" alt="c++ image" />&nbsp;
                C++
              </li>
              <li>
                <img src="/images/c.svg" alt="c image" />&nbsp;
                C
              </li>
              <li>
                <img src="/images/javascript.svg" alt="javascript image" />&nbsp;
                JavaScript
              </li>
              <li>
                <img src="/images/python.svg" alt="python image" />&nbsp;
                Python
              </li>
            </ul>
          </div>

          <div className="skills">
            <h3>Tools & Others</h3>
            <ul className="skill-list">
              <li>
                <img src="/images/git.svg" alt="git image" />&nbsp;
                Git
              </li>
              <li>
                <img src="/images/github.svg" alt="github image" />&nbsp;
                GitHub
              </li>
              <li>
                <img src="/images/jest.svg" alt="jest image" />&nbsp;
                JEST
              </li>
              <li>
                <img src="/images/redux.svg" alt="redux image" />&nbsp;
                Redux
              </li>
              <li>
                <img src="/images/docker.svg" alt="docker image" />&nbsp;
                Docker
              </li>

            </ul>
          </div>
        </div>


        <div className="slider-container">
          <div className="slider-animation">
            <img src="/images/python.svg" alt="python logo" />
            <img src="/images/TensorFlow.svg" alt="tensorflow logo" />
            <img src="/images/scikit-learn.svg" alt="scikit-learn logo" />
            <img src="/images/numpy.svg" alt="numpy logo" />
            <img src="/images/bootstrap.png" alt="bootstrap logo" />
            <img src="/images/c.svg" alt="c logo" />
            <img src="/images/c++.svg" alt="c++ logo" />
            <img src="/images/css.svg" alt="css logo" />
            <img src="/images/html.svg" alt="html logo" />
            <img src="/images/express.svg" alt="express logo" />
            <img src="/images/git.svg" alt="git logo" />
            <img src="/images/github.svg" alt="github logo" />
            <img src="/images/java.svg" alt="java logo" />
            <img src="/images/spring-boot.svg" alt="spring-boot logo" />
            <img src="/images/javascript.svg" alt="javascript logo" />
            <img src="/images/jest.svg" alt="jest logo" />
            <img src="/images/mongodb.svg" alt="mongodb logo" />
            <img src="/images/mysql.svg" alt="mysql logo" />
            <img src="/images/nodejs.svg" alt="nodejs logo" />
            <img src="/images/react.svg" alt="react logo" />
            <img src="/images/redux.svg" alt="redux logo" />
            <img src="/images/tailwind-css.svg" alt="tailwind-css logo" />
            <img src="/images/mui.svg" alt="mui logo" />
            <img src="/images/docker.svg" alt="docker logo" />
            <img src="/images/ubuntu.svg" alt="ubuntu logo" />
          </div>

        </div>

      </div>


    </Element>
  );
}

export default Skills;
