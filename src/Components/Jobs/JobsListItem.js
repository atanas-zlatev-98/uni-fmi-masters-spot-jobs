import moment from "moment";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter,faStar,faSuitcase,faClock, faGlobeEurope } from '@fortawesome/free-solid-svg-icons';
import AddRemoveFav from "./AddRemoveFav";

function JobsListItem({job}){
    
function getPublishDate(){
    return moment(job.publication_date).format("YYYY-MM-DD");
}
    return(
        <>
        <div className="d-flex py-1 mb-3" id="template-list">
           
            <div className="px-3 flex-grow-1">
               
                <div className="d-flex align-items-start justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                        <img className="rounded-circle" src={job.company_logo}/>
                        <div className="d-flex flex-column ps-3">

                        <div className="d-flex flex-row ">
                        <div className="" id="job-title">{job.title} </div>
                        <div className="ps-2 fw-bold" id="job-title">@{job.company_name}</div>
                        </div>

                        <div className=" d-flex flex-row justify-content-start mt-2" id="list-view-text">

                        <div className="publish-date" id="list-view-text"><span><FontAwesomeIcon icon={faClock}/> </span> <span className="ps-1" >{getPublishDate()}</span></div>

                        <div className="ps-3"id="list-view-text"><span><FontAwesomeIcon icon={faFilter}/></span><span className="ps-1">{job.category}</span></div>

                        <div className="ps-3"id="list-view-text"><span><FontAwesomeIcon icon={faSuitcase}/> </span><span className="ps-1" >{job.job_type}</span></div>

                        <div className="ps-3"id="list-view-text"><span><FontAwesomeIcon icon={faGlobeEurope}/></span><span className="ps-1" >{job.candidate_required_location}</span></div>

                        </div>
                        </div>
                    </div>
                    <span className="fw-bold m-2 me-0"><AddRemoveFav job={job}/></span>
                </div>

            </div>



        </div>


    </>
    )
}

export default JobsListItem;