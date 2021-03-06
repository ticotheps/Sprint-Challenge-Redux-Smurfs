import React from 'react';

const Smurf = (props) => { 
    return (
        <div className="smurf-card-container">
           <h2>{props.name}</h2>
           <img className="smurf-card-image" src={props.image} alt={props.name}/>
           <h3>Age: {props.age}</h3>
           <h3>Height: {props.height}</h3>
        </div>
    );        
}

export default Smurf;