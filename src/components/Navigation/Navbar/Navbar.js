import { useState } from "react";
import logo from './logo.png';
import Contact from '../../.././containers/Contact/Contact';
import Home from '../../.././containers/Home/Home';
import About from '../../.././containers/About/About';
import "./Navbar.css";

const Navbar = ({onRouteChange}) => {

  const onAboutButtonClick = () => {
      onRouteChange('about');
  }
  const onHomeButtonClick = () => {
    onRouteChange('home');
  }
  const onContactButtonClick = () => {
    onRouteChange('contact');
  }
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <nav className="navigation">
      <img className='w4 h4' alt='logo' src={logo}/>
        <button className="hamburger" onClick={() => { setIsNavExpanded(!isNavExpanded)}} >
          <div id="menu"></div>
          <div id="menu"></div>
          <div id="menu"></div>
          {/* hamburger svg code... */}
        </button>
      <div className={ isNavExpanded ? "navigation-menu expanded" : "navigation-menu" } >
        <ul>
          <li onClick={onHomeButtonClick}>
            <a href={Home} className="dim grow">Home</a>
          </li>
          <li onClick={onAboutButtonClick}>
            <a href={About} className="dim grow">About</a>
          </li>
          <li onClick={onContactButtonClick}>
            <a href={Contact} className="dim grow">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;