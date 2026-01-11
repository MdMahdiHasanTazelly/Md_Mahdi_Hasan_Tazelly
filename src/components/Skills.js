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
                <img src="/images/react.svg" />
                &nbsp; React
              </li>
              <li>
                <img src="/images/html.svg" />
                &nbsp; HTML
              </li>
              <li>
                <img src="/images/css.svg" />
                &nbsp; CSS
              </li>

              <li>
                <img src="/images/bootstrap.png" />&nbsp;
                Bootstrap
              </li>
              <li>
                <img src="/images/tailwind-css.svg" />&nbsp;
                Tailwind
              </li>
            </ul>
          </div>

          <div className="skills">
            <h3>Backend & Databases</h3>
            <ul className="skill-list">
              <li>
                <img src="/images/express.svg" />
                &nbsp; Express
              </li>
              <li>
                <img src="/images/nodejs.svg" />
                &nbsp; Node
              </li>
              <li>
                <img src="/images/mysql.svg" />
                &nbsp; MySQL
              </li>
              <li>
                <img src="/images/mongodb.svg" />
                &nbsp; MongoDB
              </li>
            </ul>
          </div>

          <div className="skills">
            <h3>Languages</h3>
            <ul className="skill-list">
              <li>
                <img src="/images/java.svg" />&nbsp;
                Java
              </li>
              <li>
                <img src="/images/c++.svg" />&nbsp;
                C++
              </li>
              <li>
                <img src="/images/c.svg" />&nbsp;
                C
              </li>
              <li>
                <img src="/images/javascript.svg" />&nbsp;
                JavaScript
              </li>
              <li>
                <img src="/images/python.svg" />&nbsp;
                Python
              </li>
            </ul>
          </div>

          <div className="skills">
            <h3>Tools & Others</h3>
            <ul className="skill-list">
              <li>
                <img src="/images/git.svg" />&nbsp;
                Git
              </li>
              <li>
                <img src="/images/github.svg" />&nbsp;
                GitHub
              </li>
              <li>
                <img src="/images/jest.svg" />&nbsp;
                JEST
              </li>
              <li>
                <img src="/images/redux.svg" />&nbsp;
                Redux
              </li>
              <li>
                <img src="/images/docker.svg" />&nbsp;
                Docker
              </li>

            </ul>
          </div>
        </div>


        <div className="slider-container">
          <div className="slider-animation">
            <img src="/images/python.svg" />
            <img src="/images/TensorFlow.svg" />
            <img src="/images/scikit-learn.svg" />
            <img src="/images/numpy.svg" />
            <img src="/images/bootstrap.png" />
            <img src="/images/c.svg" />
            <img src="/images/c++.svg" />
            <img src="/images/css.svg" />
            <img src="/images/html.svg" />
            <img src="/images/express.svg" />
            <img src="/images/git.svg" />
            <img src="/images/github.svg" />
            <img src="/images/java.svg" />
            <img src="/images/spring-boot.svg" />
            <img src="/images/javascript.svg" />
            <img src="/images/jest.svg" />
            <img src="/images/mongodb.svg" />
            <img src="/images/mysql.svg" />
            <img src="/images/nodejs.svg" />
            <img src="/images/react.svg" />
            <img src="/images/redux.svg" />
            <img src="/images/tailwind-css.svg" />
            <img src="/images/mui.svg" />
            <img src="/images/docker.svg" />
            <img src="/images/ubuntu.svg" />
          </div>

        </div>

      </div>


    </Element>
  );
}

export default Skills;
