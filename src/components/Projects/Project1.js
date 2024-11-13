

function Project1(){
    return(
        <div className="project">
            <img src="/images/Zerodha.png"/>
            <div className="description">
                <h3>Zerodha Clone</h3>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto 
                    possimus eaque necessitatibus hic reprehenderit, quisquam excepturi 
                    nam, debitis itaque adipisci sequi odio dolores accusamus voluptatibus 
                    quam! Eius aspernatur sapiente fuga!
                </p>


                <span className="dropdown">
                    <button 
                    type="button" class="btn btn-primary btn-pro dropdown-toggle"
                    data-bs-toggle="dropdown" aria-expanded="false"
                    >GitHub</button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" 
                            target="_blank"
                            href="https://github.com/MdMahdiHasanTazelly/Zerodha_clone_frontend"
                            >Frontend</a>
                        </li>

                        <li><a
                            target="_blank"
                            class="dropdown-item" 
                            href="https://github.com/MdMahdiHasanTazelly/Zerodha_clone_backend"
                            >Backend</a>
                        </li>

                        <li><a
                            target="_blank"
                            class="dropdown-item" 
                            href="https://github.com/MdMahdiHasanTazelly/Zerodha_clone_dashboard"
                            >Dashboard</a>
                        </li>
                    </ul>
                </span>

                <a
                target="_blank"
                href="https://zerodha-clone-frontend-z5y3.onrender.com/"
                >
                    <button type="button" class="btn btn-primary btn-pro">Live Link</button>
                </a>

                <button type="button" class="btn btn-primary btn-pro">Demo Video</button>

                               
            </div>
            
        </div>
    );
}

export default Project1;