import React from 'react';
import { connect } from 'react-redux';
import Smurf from "./Smurf";
import { getSmurfs } from '../actions';

class SmurfsList extends React.Component { 

    componentDidMount() {
        // console.log("CDM is running!");
        this.props.getSmurfs();
    }

    render() {
        return (
            <div className="smurfs-list-container">
                <h1>Checkout the Smurfs!</h1>
                {this.props.smurfs.map(smurf => {
                    return (
                        <Smurf 
                            name={smurf.name} 
                        />
                    );
                })}
            </div>
        );  
    }
 
}

const mapStateToProps = state => {
    // console.log(state);
    return {
        smurfs: state.smurfs,
        fetchingSmurfs: state.fetchingSmurfs,
        error: null
    }
  };

export default connect(
    mapStateToProps,
    { getSmurfs }
)(SmurfsList);
