import actionTypes from "./Action-Types"
import {combineReducers} from 'redux';

export function listView(state = true,action){
    switch(action.type){
        case actionTypes.SET_LIST_VIEW:
            return action.payload;
            default: return state
    }
}

export function jobs(state =[],action){
    switch(action.type){
        case actionTypes.SET_JOBS:
            return [...action.payload];
            default: return state
    }
}


export function favoriteJob(state =[],action){

    switch(action.type){

        case actionTypes.ADD_TO_FAVORITES:
            return [...state,action.payload];

        case actionTypes.REMOVE_FROM_FAVORITES:
            return state.filter(job => action.payload.id !== job.id);
            default:
                return state
 
    }

}



export default combineReducers({listView,jobs,favoriteJob})