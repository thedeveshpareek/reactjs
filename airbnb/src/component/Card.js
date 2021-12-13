import React from 'react'
import "./Card.css";


const card = (props) => {

let badgeText
if(badgeText === 0)
{
    badgeText="Sold Out";
}
else if(props.location === "Online"){
    badgeText="Online";
}
    return (

        <div className="card">
        {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={props.img} className="card-photo"/>
        <div className="stats">
                {/* <img src="https://images.unsplash.com/photo-1542665174-31db64d7e0e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3RhciUyMHNoYXBlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"/> */}
                <span>{props.rating}</span>
                <span>{props.review}</span>
                <span>{props.country}</span> 
            </div>
            <p>{props.title}</p>
            <p className="bold">{props.price}</p>

        </div>
    )
}

export default card
