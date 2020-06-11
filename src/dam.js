import React from 'react'

function dam(props) {
    return (
        <div>
         <h2>My name is: {props.name}</h2>
         <hr/>
         <h2>From: {props.place}</h2>
         <hr/>
         <h4>My Assignment is: {props.assignment}</h4>          
        </div>
    )
}

export default dam
