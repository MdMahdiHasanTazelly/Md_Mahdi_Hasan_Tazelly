import { Element } from "react-scroll";
import ZerodhaClone from "./ZerodhaClone";
import Wanderlust from "./Wanderlust";
import Spotify from "./Spotify";
import EFCAFE from "./ECAFE";
import MedFinder from "./MedFinder";
import DevApplyAI from "./DevApplyAI";


function ProjectsHome() {
    return (
        <Element name="projects">
            <div className="projects-container">
                <h2>Projects</h2>
                <DevApplyAI />
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