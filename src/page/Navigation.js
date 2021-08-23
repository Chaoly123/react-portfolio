import React from "react";
import {Link} from "react-router-dom";

function Navigation() {
    return (
        // <ul className="nav-tabs">
        //     <li className="nav-link">
        //         <a href="about-me"
        //             className="About"
        //         >About Me</a>
        //     </li>

        //     <li className="nav-link">
        //         <a href="portfolio"
        //             className="Portfolio"
        //         >Portfolio</a>
        //     </li>

        //     <li className="nav-link">
        //         <a href="resume" 
        //             className="Resume"
        //         >Resume</a>
        //     </li>

        //     <li className="nav-link">
        //         <a href="contact"
        //             className="Contact"
        //         >Contact</a>
        //     </li>
        // </ul>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Chao SengSai Ly</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/portfolio">Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;