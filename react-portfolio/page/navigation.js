import React from "react";

function Navigation() {
    return (
        <ul className="nav-tabs">
            <li className="nav-link">
                <a href ="about-me" onClick="">About Me</a>
            </li>

            <li className="nav-link">
                <a href ="portfolio" onClick="">Portfolio</a>
            </li>

            <li className="nav-link">
                <a href ="resume" onClick="">Resume</a>
            </li>

            <li className="nav-link">
                <a href ="contact" onClick="">Contact</a>
            </li>
        </ul>
    );
}

export default Navigation;