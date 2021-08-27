import React from "react";
import github from '../images/github.png';
import linkIn from '../images/linkIn.png';
// import 'bootstrap'


function Footer() {
    return (
        <div className="contain-fluid footer">
            <div className="row justify-content-center">


                <a href="https://github.com/Chaoly123" target="_blank" rel="noreferrer"><img className="icon-img" alt="contact" src={github}></img></a>
                <a href="https://www.linkedin.com/in/chao-sengsai-ly-a47372110/" target="_blank" rel="noreferrer"><img className="icon-img" alt="contact" src={linkIn}></img></a>

            </div>
        </div>
    );
}

export default Footer;