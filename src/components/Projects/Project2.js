import { useState } from "react";

function Project2(){

    return(
    <div className="project">
        
        <div className="description">
            <h3>Wanderlust</h3>
            <p>
                    Wanderlust is a property rental platform for vacation outings. Anyone can list own 
                    property, add a review, see property location on map.
                    <br/>
                    Main Tehnologies: HTML, Vanilla CSS, JavaScript, MongoDB, Bootstrap
                    <br/>
                    <br/>
                    <b> NB: If you have any queries, then feel free to reach me out! </b>
            </p>

            <a 
            href="https://github.com/MdMahdiHasanTazelly/wanderlust"
            target="_blank"
            >
                <button type="button" class="btn btn-primary btn-pro">GitHub</button>
            </a>

            <a 
            href="https://wanderlust-sw2l.onrender.com/listings"
            target="_blank"
            >
                <button type="button" class="btn btn-primary btn-pro">Live Link</button>
            </a>
            
            <a
            href="https://youtu.be/fPR0tZMDGZs?si=X3qyxZDrGuV2MWHP"
            target="_blank">
                <button type="button" class="btn btn-primary btn-pro">Demo Video</button>
            </a>    

           

        </div>
        <img src="/images/wanderlust.png"/>
    </div>
    );
}


export default Project2;