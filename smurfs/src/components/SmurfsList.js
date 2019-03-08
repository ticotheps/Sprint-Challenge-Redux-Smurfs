import React from 'react';
import { connect } from 'react-redux';

import { getSmurfs } from '../actions';

const SmurfsList = props => { 
    const getSmurfs = e => {
        e.preventDefault();
        props.getSmurfs();
    };

    return (
        <div className="smurfs-list-container">
            <h1>Checkout the Smurfs!</h1>
            <h2>{this.state.smurfs.name}</h2>
        </div>
    );        
}

const mapStateToProps = state => ({
    smurfs: [],
    fetchingSmurfs: state.fetchingSmurfs,
    addingSmurf: state.addingSmurf,
    updatingSmurf: state.updatingSmurf,
    deletingSmurf: state.deletingSmurf,
    error: null
  });

export default connect(
    mapStateToProps,
    { getSmurfs }
)(SmurfsList);
