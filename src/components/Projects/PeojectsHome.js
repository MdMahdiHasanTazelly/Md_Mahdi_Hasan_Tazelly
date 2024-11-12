import { Element } from "react-scroll";
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";


function ProjectsHome(){
    return(
        <Element name="projects">
            <div className="projects-container">
                <h2>Projects</h2>
                <Project1/>
                <Project2/>
                <Project3/>
            </div>
        </Element>
    );
}

export default ProjectsHome;