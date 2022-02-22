import { Container,Row,Col,InputGroup,FormControl,Form,Select,Button,ListGroup, Card,Nav } from 'react-bootstrap';
import '../Style/custom_style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Home(props){
    return(
        
        <div className="main-page">
        <Container className='d-flex justify-content-center mt-5'>
        <Row>
        <Col>
         <h1 className='h1-main'>The #1 Job Board for Hiring Creative Professionals</h1>
         <p className='p-main'>Each month, more than 3 million job seekers turn to website in their search for work, making over 140,000 applications every single day</p>
        </Col>

       <Row className='d-flex justify-content-center mt-3'>
         <Col>
         <FormControl  placeholder="Job,Title,Company..." aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
         </Col>
         <Col>
         <Form.Select aria-label="Default select example">
          <option>Select Region...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
         </Form.Select>
         </Col>
         <Col>
         <Form.Select aria-label="Default select example">
          <option>Select Job Type</option>
          <option value="1">Full Time</option>
          <option value="2">Part Time</option>
         </Form.Select>
         </Col>
         <Col>
         <Button variant="primary" className="me-2 text-light button-search"> <FontAwesomeIcon icon={faSearch}/> Search</Button>
         </Col>
       </Row>
       <p className="p-trending d-flex align-items-center mt-3 ps-1">Trending KeyWords:
        <ul className="d-flex flex-row m-0 ps-1">
            <a href="#" className="a-trending"><li>UI/UX DESIGNER</li></a>
            <a href="#" className="a-trending"><li>WORDPRESS</li></a>
            <a href="#" className="a-trending"><li>SEO</li></a>
            <a href="#" className="a-trending"><li>JAVASCRIP</li></a>
            <a href="#" className="a-trending"><li>REACT</li></a>
        </ul>
        </p>
        </Row>

        </Container> 
        <Container className='mt-5'>
        <Row className='mt-5 d-flex flex-column'>
        <Col className='mt-5'></Col>
        </Row>
        </Container>

       
        <Container className='mt-5'>
        {/*<Row className='mt-5 d-flex flex-column'>
        <Col className=''>

                <Card>
        <Card.Body>This is some text within a card body.</Card.Body>
            </Card>


        </Col>
        <Col className='mt-5'>

        

        </Col>
        <Col className='mt-5'>1 of 1</Col>
        </Row>*/}
        </Container>
        </div>
        
    );
}

export default Home;