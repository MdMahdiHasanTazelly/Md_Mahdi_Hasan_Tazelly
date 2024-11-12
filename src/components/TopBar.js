import { useState } from "react";
import { Link } from 'react-scroll';

function TopBar(){
    
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

  return (
    <nav className="navbar">
      <div className="nav-logo">
         <img src="/images/logo.png"/>
      </div>
      <button className="nav-toggle" onClick={toggleMenu}>
        <i class="fa-solid fa-bars"></i>
      </button>
      <ul className={`nav-menu ${isOpen ? "open" : ""}`}>

        <li>
          <a href="/">Home</a>
        </li>

        <li>
            <Link to="projects" smooth={true} duration={400}>
                Projects
            </Link>
        </li>
        <li>
            <Link to="skills" smooth={true} duration={400}>
               Skills
            </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={400}>
              Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default TopBar;