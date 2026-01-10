function MedFinder() {
    return (
        <div className="project">

            <div className="description">
                <h3>MedFinder</h3>
                <p>
                    It has 2 views(user and admin).
                    Only admin can add, delete, update doctors information and doctors chamber.
                    Only technical team can define admins. By that defined credentials admin can log into this application.
                    User can only view the hospitals and doctors information.
                    User can search for hospitals and doctors information based on name.
                    Implemented custom error handling to show messages via a toast.
                    <br />
                    <span style={{ fontWeight: "bold" }}>Tehnologies:</span> &nbsp;
                    Express, Node, MongoDB, React.
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
                            href="https://github.com/MdMahdiHasanTazelly/MedFinder_Frontend"
                        >Frontend</a>
                        </li>

                        <li><a
                            target="_blank"
                            class="dropdown-item"
                            href="https://github.com/MdMahdiHasanTazelly/MedFinder_Backend"
                        >Backend</a>
                        </li>


                    </ul>
                </span>

                {/* <a
                    href="https://wanderlust-sw2l.onrender.com/listings"
                    target="_blank"
                >
                    <button type="button" class="btn btn-primary btn-pro">Live Link</button>
                </a> */}

                <a
                    href="https://www.youtube.com/watch?v=XLJKFxgCcJc&t=1s"
                    target="_blank">
                    <button type="button" class="btn btn-primary btn-pro">Demo Video</button>
                </a>



            </div>
            <img src="/images/MedFinder.png" />
        </div>
    );
}

export default MedFinder;