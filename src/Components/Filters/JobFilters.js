import SortByCompanyName from "./SortByCompanyName";
import HasJobType from "./HasJobType";
import {Card, Button, Form} from 'react-bootstrap';
import {useJobs} from '../Jobs/JobsContext';
import { useEffect } from "react";
import checkboxs from './JobCheckboxes';
import {useDispatch} from 'react-redux';
import {getJobs} from '../../Redux/Actions';
function JobFilters(props){

  const dispatch = useDispatch();
    const {sortByCompany,checkedState} = useJobs();
 
    useEffect(()=>{
       fetchJobs();
    },[]);


    function filtersOnSubmit(e){
      e.preventDefault();
      fetchJobs();
    }

    function fetchJobs(){
     dispatch(getJobs('remote-jobs', {
      "limit": 10,
      "category" : getCheckedOptions(),
      "company_name": sortByCompany,

    }));
    }
  
    function getCheckedOptions(){
    const checkedOptions = checkedState.reduce((acc, curr,index) => {
        if(curr){

          return[...acc,checkboxs[index].value]

        }
        return acc;
      }, [])
      return checkedOptions.toString();
    }


    return(

        <Card className="mt-2 mt-md-0">
          <Card.Body>
            <Card.Title>Filters</Card.Title>
            <Form onSubmit={filtersOnSubmit}>

            <SortByCompanyName></SortByCompanyName>
            
            <HasJobType checkboxs={checkboxs}></HasJobType>
            <Button variant="primary" type="submit">Find</Button>
  

            </Form>
            
  </Card.Body>
</Card>
    )
}

export default JobFilters;