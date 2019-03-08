import React from 'react';

class SmurfForm extends React.Component {
    state = {
        newSmurf: {
            newName: '',
            newAge: '',
            newHeight: '',
            newImage: ''
        }
    }

    render() {
        return (
            <div className="smurf-form-container">
                <h2 className="smurf-form-heading">Add a NEW Smurf the the Village!</h2>
                <form className="smurf-form">
                    <input 
                        type="text"
                        onChange={this.handleInputChange}
                        placeholder="Name"
                        value={this.state.newName}
                        name="newName"
                    />
                    <input 
                        type="text"
                        onChange={this.handleInputChange}
                        placeholder="Age"
                        value={this.state.newAge}
                        name="newAge"
                    />
                    <input 
                        type="text"
                        onChange={this.handleInputChange}
                        placeholder="Height"
                        value={this.state.newHeight}
                        name="newHeight"
                    />
                    <input 
                        type="text"
                        onChange={this.handleInputChange}
                        placeholder="Image URL"
                        value={this.state.newImage}
                        name="newImage"
                    />
                </form>
            </div>
        ); 
    }
}

export default SmurfForm;
