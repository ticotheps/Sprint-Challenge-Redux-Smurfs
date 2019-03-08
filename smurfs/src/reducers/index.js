import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAILURE
} from '../actions';


const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   error: null
};

export const smurfsReducer = (state = initialState, action) => {
  console.log("The reducer function is firing! Yay!", action);
  switch (action.type) {
    case FETCH_SMURFS_START:
      return {
        ...state,
        error: "",
        fetchingSmurfs: true
      };
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        error: "",
        fetchingSmurfs: false,
      };
    case FETCH_SMURFS_FAILURE:
      return {
        ...state,
        error: "Whoops, someting went wrong",
        fetchingSmurfs: false
      };
    default:
      return state;
  }
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
