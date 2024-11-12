import { Element, Link } from "react-scroll";

function Hero(){
    return(
      <Element name="home">
       <div className=" heroContainer ">
           <div className="heroDescription ">
              <h2>Hey, I'm Mahdi! &#128075;</h2>
              <br/>
              <h3>
                 <span>MERN</span> Stack <br/>
                 Developer
              </h3>
              <p className="heroPara">I'm a Full-stack MERN Developer. I use mainly React for frontend, 
                 Express for backend and MongoDB as Database. Dedicated to crafting 
                 seamless user experiences and scalable backend solutions.
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
                    <img src="/images/gray.jpg"/>
                </div>
           
           </div>
       </div>
       </Element>
    );
}

export default Hero;