import React from 'react';

class SmurfForm extends React.Component {
    state = {
        smurf: {
            name: '',
            age: '',
            height: '',
            image: ''
        }
    }

    render() {
        return (
            <div className="smurf-form-container">
                <h2 className="smurf-form-heading">Add a Smurf the the Village!</h2>
                <form className="smurf-form">
                    <input 
                        type="text"
                        onChange={this.handleInputChange}
                        placeholder="New Smurf's Name"
                        value={this.state.name}
                        name="name"
                    />
                </form>
            </div>
        ); 
    }
}

export default SmurfForm;
