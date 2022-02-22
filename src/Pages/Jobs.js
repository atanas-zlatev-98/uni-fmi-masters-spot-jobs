import { Col } from 'react-bootstrap';
import JobsList from "../Components/Jobs/JobsList";
import JobFilters from '../Components/Filters/JobFilters';
import {JobsProvider} from '../Components/Jobs/JobsContext';

function Jobs(props){

    return(
        <JobsProvider>

        <Col>
        
        <JobsList/> 
     
        </Col>

        <Col md={3}>
         
        <JobFilters></JobFilters>

        </Col>
        </JobsProvider>
      
    )
}

export default Jobs;