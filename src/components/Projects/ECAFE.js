function EFCAFE() {
    return (

        <div className="project">
            <img src="/images/ECAFE.png" />
            <div className="description">
                <h3>ECAFE</h3>
                <p>
                    This is built on intention to manage an university cafetaria virtually. Students
                    can see the food items, prices and the can order through this application.
                    Student can register, login, add food items to cart, update item quantity from
                    cart and remove any item from cart.
                    <br />
                    <span style={{ fontWeight: "bold" }}>Tehnologies:</span> &nbsp;
                    Express, Node, MongoDB, React, Bootstrap.
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
                            href="https://github.com/MdMahdiHasanTazelly/ECAFE_Frontend"
                        >Frontend</a>
                        </li>

                        <li><a
                            target="_blank"
                            class="dropdown-item"
                            href="https://github.com/MdMahdiHasanTazelly/ECAFE_Backend"
                        >Backend</a>
                        </li>


                    </ul>
                </span>

                <a
                    target="_blank"
                    href="https://www.youtube.com/watch?v=lQwkz5rLnLc"
                >
                    <button type="button" class="btn btn-primary btn-pro">Demo Video</button>
                </a>




            </div>

        </div>

    );
}

export default EFCAFE;