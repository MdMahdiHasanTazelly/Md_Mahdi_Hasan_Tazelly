import { Element } from "react-scroll";

function About() {
    return (
        <Element name="about">
            <div className="aboutContainer">
                <h2>Wanna know more?</h2>
                <p>
                    Well!  <br /> <br />


                    I often find myself as a seeker of "why?" By figuring out many many "whys", I discovered myself as
                    a software engineer. Arguing with compilers makes me happier than a human can.
                    <br /> <br />
                    The journey actually started when I was in my 12th grade. Back then, finding the GCD, LCD, and Prime
                    Numbers, Fibonacci series, Even-Odd using C gave me much fun. I really enjoyed that! And, this drove
                    me to pursue my undergrad in Computer Science and Engineering. Later on, I got myself admitted to
                    North South University.
                    <br /> <br />
                    In my academia, I've learned many fundamental things about Computer Science. I've learned a few
                    programming language principles, Object Oriented Programming, how various design patterns are used in
                    large applications, how OS talks and manages storage, how behind the scenes of computational things
                    are managed by 0s & 1s at hardware level, ML models workflows for supervised and unsupervised learning,
                    Image processing of DL models, how transformer models are evolved so on and forth.
                    <br /> <br />
                    Moving apart from academia, I'm experienced in building secure and scalable web applications.
                    Proficient in Express, React, MongoDB, MySQL & Node.js. Again, I'm proficient in using some JS
                    libraries, e.g, Bootstrap, Tailwind, Material-UI, and Redux. For version controlling and collaborating,
                    I use Git & GitHub.
                    <br /> <br />
                    My career goal is to work in a cooperative team and on impactful projects, where I can grow my
                    expertise & contribute to my fullest.

                    <br /><br />
                    I&#39;m <span className="highlighted" style={{ fontWeight: "bold" }}
                    >open to collaborate and new opportunities</span>, so feel free to reach out!
                </p>
            </div>
        </Element>
    );
}

export default About;