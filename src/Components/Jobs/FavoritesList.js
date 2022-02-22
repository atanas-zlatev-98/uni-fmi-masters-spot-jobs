import {Card } from "react-bootstrap";
import {useSelector} from 'react-redux';
import ErrorNotFound from '../Jobs/ErrorNotFound';
import JobsListItem from '../Jobs/JobsListItem';

function FavoritesList(props){

    const favoriteJob = useSelector(state => state.favoriteJob);

    function renderFavJobs(){

        if(!favoriteJob.length){
           return <ErrorNotFound></ErrorNotFound>
        }

        return favoriteJob.map(job => {
            return <JobsListItem key={job.id} job={job}/>
        })
    }

    return(
       <Card className="border-0">
          <Card.Body>
              <Card.Title className="mb-3">Favorite Job Offers</Card.Title>
              {renderFavJobs()}
          </Card.Body>
     </Card>
    )

    }
export default FavoritesList;