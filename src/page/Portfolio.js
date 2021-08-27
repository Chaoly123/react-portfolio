
import React from 'react'
import Card from "./components/Card"
import objectArr from "../utils/projects.json"

const Portfolio = () => {
    return (
        <div className="container-fluid text-center d-flex column justify-content-center col-6-md col-3-sm portfolio">
        <div className="work">
            <Card object={objectArr[0]} />
            <Card object={objectArr[1]} />
            <Card object={objectArr[2]} />
        </div>
       </div>
    )
}

export default Portfolio;
