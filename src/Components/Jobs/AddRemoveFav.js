import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter,faStar,faSuitcase,faClock, faGlobeEurope } from '@fortawesome/free-solid-svg-icons';
import {useSelector, useDispatch} from 'react-redux';
import {addFavoriteJob,removeFavoriteJob} from '../../Redux/Actions';

function AddRemoveFav({job}){

    const dispatch = useDispatch();
    const favoriteJob = useSelector(state => state.favoriteJob);


    function isInFavorites(){
        return favoriteJob.some(favJob => {
            return favJob.id === job.id
        });
    }

   function toggleMyFavorites(){
   
        if(isInFavorites()){

            dispatch(removeFavoriteJob(job));
            return;

        }

            dispatch(addFavoriteJob(job));

    }

    return (
        <>
          <FontAwesomeIcon onClick={()=>toggleMyFavorites()} className={`add-remove-button ${isInFavorites() ? 'active':''}`} onClick={() => toggleMyFavorites()} icon={faStar}/>
        </>
    )
}

export default AddRemoveFav;