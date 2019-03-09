import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class SmurfForm extends React.Component {
    state = {
        newSmurf: {
            name: '',
            age: '',
            height: '',
            image: ''
        }
    };

    handleInputChange = e => {
        console.log("The handleInputChange() function is working!!!");
        this.setState({
            newSmurf: {
                ...this.state.newSmurf,
                [e.target.name]: e.target.value
            }
        });
    };

    addSmurf = e => {
        console.log("The addSmurf() function is running! AWESOME!");
        e.preventDefault();
        this.props.addSmurf(this.state.newSmurf);
        this.setState({ 
            newSmurf: {
                name: '',
                age: '',
                height: '',
                image: ''
            }
        });
    };

    render() {
        return (
            <div className="smurf-form-container">
                <h2 className="smurf-form-heading">Add a NEW Smurf to the Village!</h2>
                <form className="smurf-form" onSubmit={this.addSmurf}>
                    <input 
                        type="text"
                        onChange={this.handleInputChange}
                        placeholder="Name"
                        value={this.state.newSmurf.name}
                        name="name"
                    />
                    <input 
                        type="text"
                        onChange={this.handleInputChange}
                        placeholder="Age"
                        value={this.state.newSmurf.age}
                        name="age"
                    />
                    <input 
                        type="text"
                        onChange={this.handleInputChange}
                        placeholder="Height"
                        value={this.state.newSmurf.height}
                        name="height"
                    />
                    <input 
                        type="text"
                        onChange={this.handleInputChange}
                        placeholder="Image URL"
                        value={this.state.newSmurf.image}
                        name="image"
                    />
                    <button className="add-smurf-button" type="submit">Add Smurf</button>
                </form>
            </div>
        ); 
    }
}

const mapStateToProps = state => {
    // console.log(state);
    return {
        smurfForm: state.smurfs,
        smurfs: state.smurfs,
        fetchingSmurfs: state.fetchingSmurfs,
        error: null
    }
};

export default connect(
    mapStateToProps,
    { addSmurf }
)(SmurfForm);
