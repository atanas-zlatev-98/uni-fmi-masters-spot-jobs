import moment from "moment";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter,faStar,faSuitcase,faClock, faGlobeEurope } from '@fortawesome/free-solid-svg-icons';
import AddRemoveFav from "./AddRemoveFav";
function JobsGridItem({job})

{
    function getPublishDate(){
        return moment(job.publication_date).format("YYYY-MM-DD");
    }
    return(
        <>
      <div className="col-md-4 ps-0 ms-1 me-2 mb-2 grid-width" id="template-grid">
          <div className="grid-jobs-container mb-3">
              <div className="">

              <div className="d-flex justify-content-between ps-0 text-white" id="grid-job">
             
                  <span className="bg-custom mt-3 ps-2 pe-2 d-flex align-items-center">@{job.company_name}</span>
                  <span className="fw-bold text-black m-2"><AddRemoveFav job={job}></AddRemoveFav></span>
                  
                  
                  </div>
                  <div className="d-flex flex-column align-items-center flex-wrap">
                     <img className="rounded-circle" id="company-logo" src={job.company_logo}/>
                        <div className="d-flex flex-column ps-3">

                        <div className="">
                        <div className="d-flex flex-column align-items-center" id="grid-job">{job.title} </div>
                     
                        </div>

                        <div className=" d-flex flex-column align-items-center mt-2" id="grid-view-text">

                        <div className="ps-3"id="grid-view-text"><span><FontAwesomeIcon icon={faGlobeEurope}/></span><span className="ps-1" >{job.candidate_required_location}</span></div>
                        <div className="ps-3"id="grid-view-text"><span><FontAwesomeIcon icon={faFilter}/></span><span className="ps-1">{job.category}</span></div>

                        <div className="d-flex">
                        <div className="publish-date" id="grid-view-text"><span><FontAwesomeIcon icon={faClock}/> </span> <span className="ps-1" >{getPublishDate()}</span></div>
                        <div className="ps-3"id="grid-view-text"><span><FontAwesomeIcon icon={faSuitcase}/> </span><span className="ps-1" >{job.job_type}</span></div>
                        </div>



                        </div>
                        </div>
                        </div>

              </div>
        
          </div>
      </div>

    </>
    )
}

export default JobsGridItem;