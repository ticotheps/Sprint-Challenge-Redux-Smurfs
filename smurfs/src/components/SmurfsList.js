import React from 'react';
import { connect } from 'react-redux';

import { getSmurfs } from '../actions';

class SmurfsList extends React.Component { 

    componentDidMount() {
        console.log("CDM is running!");
        this.props.getSmurfs();
    }

    render() {
        return (
            <div className="smurfs-list-container">
                <h1>Checkout the Smurfs!</h1>
                <h2>{this.state.smurfs.name}</h2>
            </div>
        );  
    }
 
}

const mapStateToProps = state => {
    console.log(state);
    return {
        smurfs: [],
        fetchingSmurfs: state.fetchingSmurfs,
        addingSmurf: state.addingSmurf,
        updatingSmurf: state.updatingSmurf,
        deletingSmurf: state.deletingSmurf,
        error: null
    }
  };

export default connect(
    mapStateToProps,
    { getSmurfs }
)(SmurfsList);
