import React from 'react';

class SmurfForm extends React.Component {
    state = {
        smurf: {
            name: '',
            age: '',
            height: '',
            image: ''
        }
    };

    handleInputChange = e => {
        console.log("The handleInputChange() function is working!!!");
        this.setState({
            smurf: {
                ...this.state.smurf,
                [e.target.name]: e.target.value
            }
        });
    }

    render() {
        return (
            <div className="smurf-form-container">
                <h2 className="smurf-form-heading">Add a NEW Smurf to the Village!</h2>
                <form className="smurf-form">
                    <input 
                        type="text"
                        onChange={this.handleInputChange}
                        placeholder="Name"
                        value={this.state.name}
                        name="name"
                    />
                    <input 
                        type="text"
                        onChange={this.handleInputChange}
                        placeholder="Age"
                        value={this.state.age}
                        name="age"
                    />
                    <input 
                        type="text"
                        onChange={this.handleInputChange}
                        placeholder="Height"
                        value={this.state.height}
                        name="height"
                    />
                    <input 
                        type="text"
                        onChange={this.handleInputChange}
                        placeholder="Image URL"
                        value={this.state.image}
                        name="image"
                    />
                    <button className="add-smurf-button" type="submit">Add Smurf</button>
                </form>
            </div>
        ); 
    }
}

export default SmurfForm;
