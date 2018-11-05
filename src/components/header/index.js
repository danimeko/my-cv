import React ,{Component}from 'react'
import { Link } from 'react-router-dom';

import './style.css'


class Header extends Component{
    render (){
        return(
        <div>
            <nav className="navbar navbar-expand-lg fixed-top ">  
            <Link className="navbar-brand" to="/home">Home</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">  
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">     <ul className="navbar-nav mr-4">
            <li className="nav-item">
                <Link className="nav-link" data-value="about" to="/about">About</Link>        </li>  
            <li className="nav-item">
                <Link className="nav-link " data-value="portfolio"  to="/projects">Project</Link>    
            </li>
            <li className="nav-item"> 
            <Link className="nav-link " data-value="contact" to="/contact">Contact</Link>       </li> 
            </ul> 
            </div></nav>

        </div>
           
        )
    }
}

export default Header