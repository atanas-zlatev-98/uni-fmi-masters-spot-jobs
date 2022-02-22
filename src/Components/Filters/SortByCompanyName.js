import {Form} from 'react-bootstrap';
import {useJobs} from '../Jobs/JobsContext';
import options from './CompanyNames';
function SortByCompanyName(props){

const {sortByCompany,setSortByCompany} = useJobs();

function getOption(){
    return options.map(option => {
        return <option
        key={option.value}
        value={option.value}>{option.title}</option>
    })
}

    return(
    <Form.Group className="mb-3" controlId="filterForm.ControlSelect1">
        <Form.Label>Sort By</Form.Label>

        <Form.Select value={sortByCompany}
        onChange={e => setSortByCompany(e.target.value)}>
            {getOption()}
        </Form.Select>
    </Form.Group>
    )
}

export default SortByCompanyName;