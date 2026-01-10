import { Element, Link } from "react-scroll";

function Hero() {
    return (
        <Element name="home">
            <div className=" heroContainer ">
                <div className="heroDescription ">
                    <h2>Hey, I'm Mahdi! &#128075;</h2>
                    <br />
                    <h3>

                        {/* <span style={{ color: "#444744" }}>
                            A &nbsp;
                        </span>   */}
                        <span>Software</span>
                        <br></br>
                        <span
                            style={{ color: "#444744", marginLeft: "13rem" }}

                        >Engineer</span> <br />

                    </h3>

                    <p className="heroPara">
                        I am a passionate software engineer, figuring out the real-life problems

                        using tech. And, yeah it gives me joy! Dedicated to crafting seamless user experiences and scalable solutions.
                    </p>
                    <Link to="contact" smooth={true} duration={400}>
                        <button type="button" class="btn btn-primary btn-one">Contact me</button>
                    </Link>

                    <Link to="projects" smooth={true} duration={400}>
                        <button type="button" class="btn btn-primary">Projects</button>
                    </Link>
                </div>

                <div className="heroImage ">
                    <div className="img-frame">
                        <img src="/images/gray.jpg" />
                    </div>

                </div>
            </div>
        </Element>
    );
}

export default Hero;