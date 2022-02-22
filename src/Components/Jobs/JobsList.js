import JobsListItem from "./JobsListItem";
import JobsGridItem from "./JobsGridItem";
import ErrorNoResults from '../Jobs/ErrorNotFound';
import { Button, ButtonGroup, Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripHorizontal,faThList } from '@fortawesome/free-solid-svg-icons';
import {useSelector, useDispatch} from 'react-redux';
import {setListView} from '../../Redux/Actions';


function JobsList(props){

  const listView = useSelector((state) => state.listView);
  const dispatch = useDispatch();

  const jobs = useSelector((state) => state.jobs);
  
    const renderJobs = () => {
      if(!jobs.length){
        return <ErrorNoResults/>

      }
      return listView ? getJobsListItems() : getJobsGridItems();
        } 

      
    function getJobsListItems(){
      return jobs.map(job => {
        return <JobsListItem key={job.id}
        job={job}
         >
        </JobsListItem>
    })

    }

    function getJobsGridItems(){
      return jobs.map(job => {
        return <JobsGridItem key={job.id} job={job}
         >
        </JobsGridItem>
    })

    }

    return(
<>
      <Card className="border-0" id="container-width">
  <Card.Body>
  <div className="d-flex justify-content-between align-items-center mb-2">
          <Card.Title>Results</Card.Title>

          <ButtonGroup aria-label="Basic Example">
            <Card.Title className="me-2">List View:
            <Button className="ms-2" variant={listView ? 'primary': 'outline-primary'} 
            onClick={()=> dispatch(setListView(true))}>
              
              <FontAwesomeIcon icon={faThList}/>

            </Button>
            </Card.Title>
            
             <Card.Title>
               Grid View: 
             <Button className="ms-2" variant={listView ? 'outline-primary': 'primary'} 
            onClick={()=> dispatch(setListView(false))} >
           
              <FontAwesomeIcon icon={faGripHorizontal}/></Button>
             </Card.Title>
           
          </ButtonGroup>

        </div>

        <div className="row">
        {renderJobs()}
        </div>
  
  </Card.Body>
</Card>

      </>
    )

    }
export default JobsList;