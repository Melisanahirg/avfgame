import './App.css';
import {Container} from 'react-bootstrap'
import {HomeComponent} from './components/HomeComponent/HomeComponent'

function App() {
  return (
   <Container className='containerApp'>
   <HomeComponent/>
   </Container>
  );
}

export default App;
