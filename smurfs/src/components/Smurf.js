import React from 'react';

const Smurf = (props) => { 
    return (
        <div className="smurf-card-container">
           <h2>{props.name}</h2>
        </div>
    );        
}

export default Smurf;