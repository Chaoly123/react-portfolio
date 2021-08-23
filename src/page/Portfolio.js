// import React from 'react';


// const data = [
//     {
//         id: 1,
//         name: 'Project 1 Covid-Goal-Track',
//         description: "This is a web application that attempts to positively affect the American public's progress in attaining President Biden's goal of 70% of the nation vaccinated before the Fourth of July.",
//         deployed: 
//         <a 
//           href="https://jchosay.github.io/group-pj1-covid-goal-track/" 
//           className="btn-sm" 
//           target="_blank" 
//           rel="noreferrer">
//             Deployed App
//         </a>,
//       repository: 
//         <a 
//           href="https://github.com/JChosay/group-pj1-covid-goal-track" 
//           className="btn-sm" 
//           target="_blank" 
//           rel="noreferrer">
//             Repository
//         </a>
//     }
// ]

import React from 'react'
import Card from "./components/Card"
import objectArr from "../utils/projects.json"

const Portfolio = () => {
    return (
        <div className="container-fluid text-center d-flex column justify-content-center col-6-md col-3-sm portfolio">
        <div>
            <Card object={objectArr[0]} />
            <Card object={objectArr[1]} />
            <Card object={objectArr[2]} />
        </div>
       </div>
    )
}

export default Portfolio;
