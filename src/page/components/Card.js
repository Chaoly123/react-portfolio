import React from 'react'

const Card = ({object}) => {
    return (
        
        <div>
            <h1>{object.name}</h1>
            <h1>{object.name1}</h1>
            <h1>{object.name2}</h1>
            <h2>{object.description}</h2>
            <a href={object.link}>The Link to {object.linkName}</a>
        </div>
        
    )
}

export default Card
