import './App.css';
import NavBar from './Components/NavBar/NavBar';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Home from '../src/Pages/Home';
import Jobs from '../src/Pages/Jobs';
import Favorites from '../src/Pages/Favorites';
import FAQ from '../src/Pages/Faq';
import { Container, Row } from 'react-bootstrap';
import './Style/Images/bg.jpg';


const routes = [
  {
    path: '/',
    component: <Home/>,
    exact: true,
  },
  {
    path: '/jobs',
    component: <Jobs/>,
  },
  {
    path: '/FAQ',
    component: <FAQ/>,
  },
  {
    path: '/favorites',
    component: <Favorites/>,
  }
]


function App() {

  const getRoutes = () =>{
    return routes.map((route,index) => {
      return <Route key={index} exact={route.exact} path={route.path} element={route.component}/>
    })
  }
  return (
    <div className='bg-app'>
<Router>
     <NavBar></NavBar>
    <Container>
      <Row className='mt-5'>
        <Routes>
          {getRoutes()}
        </Routes>
      </Row>
    </Container>
    </Router>
    </div>
   
  );
}

export default App;
