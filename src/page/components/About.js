import React from "react";
import me from '../../images/me.jpg'

function About() {
    return (
        <div className="about container-fluid d-flex flex-column text-center">
            <h className="about"><strong>About Me</strong></h>
            <p><br></br>Well I was born and raised in Minnesota, Saint Paul. I live here all of my life, I lived in the same
            house for the past 28 years. With a few modern fixer upper except for central air, which is a must
            have to have in Minnesota. I graduate from Mahtomedi High School 2007, I graduate from Minneapolis
            Community Technical College(MCTC) with a certificate in Central Sterilization. After graduating, I
            work at Saint John Hospital. The computers' system wasn't not excuting the right application to
            Sterile the instrument. Informing the "IT" support. They would reinstall or reprogram the app.
            After watching and learning the steps of how to reinstall the application, I pick up the steps of
            how to re-initiate the app. If I can learn how to reinstall the app, I can increase my knowledge in
            in IT field.
            </p>
            <div className="me">
                <img className="picture-me" src={me} alt="me"></img>
            </div>
        </div>
    )
}

export default About;