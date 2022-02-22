import React,{useContext, useState} from 'react';
import axios from 'axios';
import constanst from '../../Constants';
const JobsContext = React.createContext();

export function useJobs(){
    return useContext(JobsContext);
}

export function JobsProvider(props){
   const [sortByCompany, setSortByCompany] = useState();
   const [checkedState,setCheckedState] = useState(
    new Array(7).fill(false)
);

const [listView,setListView] = useState(true);
const [jobs,setJobs] = useState([]);
   

const fetchJobs = (path,params) => {
    axios.get(`${constanst.baseUrl}${path}`,{
        params: {...params}
    })
    .then(response => {
       setJobs(response.data.jobs);
    })
}


   return (
       <JobsContext.Provider value={{
           sortByCompany,
           setSortByCompany,
           checkedState,
           setCheckedState,
           jobs,
           setJobs,
           fetchJobs,
           listView,
           setListView}}>
       {props.children}
       </JobsContext.Provider>
   )
}