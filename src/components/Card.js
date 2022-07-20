import React from "react"

export default function Card(props) {

    return (
        <div className="card">
            <img className="pic" src={`${props.item.imageUrl}`}></img>
        <div className="cardInfo">
            
            <p className="location">{props.item.location}<a className="maplink" href={`${props.item.googleMapsUrl}`} ><span>View On Google Maps</span></a></p>
            <h2 className="title">{props.item.title}</h2>
            <span className="date">{`${props.item.startDate} - ${props.item.endDate}`}</span>
            <p className="description">{props.item.description}</p>
        </div>
        </div>
    )
}