import React from 'react';

class SmurfForm extends React.Component {

    render() {
        return (
            <div className="smurf-form-container">
                <h2 className="smurf-form-heading">Add a Smurf the the Village!</h2>
                <form className="smurf-form">
                    <input type="text"/>
                </form>
            </div>
        ); 
    }
}

export default SmurfForm;
