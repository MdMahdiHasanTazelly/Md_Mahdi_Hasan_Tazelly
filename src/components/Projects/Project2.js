import { useState } from "react";

function Project2(){

    return(
    <div className="project">
        
        <div className="description">
            <h3>Wanderlust</h3>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto 
                possimus eaque necessitatibus hic reprehenderit, quisquam excepturi 
                nam, debitis itaque adipisci sequi odio dolores accusamus voluptatibus 
                quam! Eius aspernatur sapiente fuga!
            </p>

            <a 
            href="https://github.com/MdMahdiHasanTazelly/wanderlust"
            target="_blank"
            >
                <button type="button" class="btn btn-primary btn-pro">GitHub</button>
            </a>
            
            <a
            href=""
            target="_blank">
                <button type="button" class="btn btn-primary btn-pro">Demo Video</button>
            </a>    

            <a 
            href="https://wanderlust-sw2l.onrender.com/listings"
            target="_blank"
            >
                <button type="button" class="btn btn-primary btn-pro">Live Link</button>
            </a>

        </div>
        <img src="/images/wanderlust.png"/>
    </div>
    );
}


export default Project2;