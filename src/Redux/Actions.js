import actionTypes from "./Action-Types";
import axios from "axios";
import config from "../Constants";

export function setListView(value){
    return {
        type: actionTypes.SET_LIST_VIEW,
        payload: value,
    }
}

export function setJobs(value){
    return {
        type: actionTypes.SET_JOBS,
        payload: value,
    }
}

export function getJobs(path,params){
    return async (dispatch) => {

        try{ 
                axios.get(`${config.baseUrl}${path}`,{
                    params: {...params}
                })
                .then(response => {
                   dispatch(setJobs(response.data.jobs));
                })

        }catch(error){
            console.log(error);
        }

    }
}

export function addFavoriteJob(jobs){
    return{
        type: actionTypes.ADD_TO_FAVORITES,
        payload: jobs

    }
}

export function removeFavoriteJob(jobs){
    return{
        type: actionTypes.REMOVE_FROM_FAVORITES,
        payload: jobs
    }
}