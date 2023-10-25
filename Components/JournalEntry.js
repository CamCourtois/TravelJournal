import React from 'react'

export default function JournalEntry(props){
    
    return(
        <div className="journal-entry">
            <img className="journal-img" src={props.imageUrl} />
            <div>
                <div className="entry-location-container">
                    <i className="fa-solid fa-location-dot"></i>
                    <h3>{props.location}</h3>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="entry-title">{props.title}</h1>
                <div className="entry-time-period">
                    <h4>{props.startDate} - </h4>
                    <h4>{props.endDate}</h4>
                </div>
                <p>
                    {props.description}
                </p>
            </div>
        </div>
    )
}