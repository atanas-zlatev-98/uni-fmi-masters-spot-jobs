import { useJobs } from '../Jobs/JobsContext';
import {Form} from 'react-bootstrap';
import checkboxs from '../Filters/JobCheckboxes';

function HasJobType(props){

    const {checkedState,setCheckedState} = useJobs();

    function handleChange(index){
        checkedState[index] =!checkedState[index]
        setCheckedState(checkedState);
    }


    function getCheckedBoxes(){
       return props.checkboxs.map((checkbox, index ) => { 
            return <Form.Group className="mb-3" key={checkbox.value} controlId={`checkbox-${checkbox.id}`}>
            <Form.Check 
            value={checkedState[index]} 
            onChange={() => handleChange(index)} 
            type="checkbox" 
            label={checkbox.label} />
          </Form.Group>
        })
    }


    return(
        <Form.Group className="mb-3" controlId="filterForm.ControlCheckboxes">
        <Form.Label>Job Type</Form.Label>
            {getCheckedBoxes()}
       
    </Form.Group>
    )
}

export default HasJobType;