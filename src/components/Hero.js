function Hero(){
    return(
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
              <button type="button" class="btn btn-primary btn-one">Contact me</button>
              <button type="button" class="btn btn-primary">Projects</button>
           </div>

           <div className="heroImage ">
                <div className="img-frame">
                    <img src="/images/gray.jpg"/>
                </div>
           
           </div>
       </div>
    );
}

export default Hero;