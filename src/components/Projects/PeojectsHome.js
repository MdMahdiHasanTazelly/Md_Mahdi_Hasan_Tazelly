import { Element } from "react-scroll";
import ZerodhaClone from "./ZerodhaClone";
import Wanderlust from "./Wanderlust";
import Spotify from "./Spotify";
import EFCAFE from "./ECAFE";
import MedFinder from "./MedFinder";


function ProjectsHome() {
    return (
        <Element name="projects">
            <div className="projects-container">
                <h2>Projects</h2>
                <ZerodhaClone />
                <Wanderlust />
                <EFCAFE />
                <MedFinder />



                <Spotify />


            </div>
        </Element>
    );
}

export default ProjectsHome;