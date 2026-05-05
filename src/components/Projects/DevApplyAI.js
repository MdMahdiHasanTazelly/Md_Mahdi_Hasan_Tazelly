import { useState } from "react";

function DevApplyAI() {

    return (
        <div className="project">

            <div className="description">
                <h3>Dev Apply AI</h3>
                <p>
                    DevApplyAI is a full-stack AI-powered job application assistant designed to 
                    streamline and automate the job application process. It helps users generate 
                    tailored cover letter suggestions, matching score between job description and 
                    resume, missing and matching skills.
                    <br />
                    <b>Tehnologies:</b> Next JS, Bootstrap, Fast API, BERT, TinyLLAMA
                    <br />
                    <br />
                    <b> NB: To see the project live, feel free to reach me out! </b>
                </p>

                <span className="dropdown">
                    <button
                        type="button" class="btn btn-primary btn-pro dropdown-toggle"
                        data-bs-toggle="dropdown" aria-expanded="false"
                    >GitHub</button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item"
                            target="_blank"
                            href="https://github.com/MdMahdiHasanTazelly/DevApplyAI"
                        >Frontend</a>
                        </li>

                        <li><a
                            target="_blank"
                            class="dropdown-item"
                            href="https://github.com/MdMahdiHasanTazelly/DevApplyAI_backend"
                        >Backend</a>
                        </li>


                    </ul>
                </span>


                <a
                    href="https://www.youtube.com/watch?v=naogP2kXhk8"
                    target="_blank">
                    <button type="button" class="btn btn-primary btn-pro">Demo Video</button>
                </a>



            </div>
            <img src="/images/DevApplyAI.png" />
        </div>
    );
}


export default DevApplyAI;