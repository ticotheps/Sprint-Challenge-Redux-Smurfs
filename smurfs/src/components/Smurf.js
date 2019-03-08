import React from 'react';

const Smurf = (props) => { 
    return (
        <div className="smurf-card-container">
           <h2>{props.name}</h2>
           <img src={props.imageUrl} alt={props.name} />
           <h3>{props.age}</h3>
           <h3>{props.height}</h3>
        </div>
    );        
}

export default Smurf;