import { Container } from 'react-bootstrap';
import '../css/home.css'
const Home: React.FC = () =>{
   
  return (
    <div className="Home home">
      <Container>
          <div className="home-head">
            Welcome to ReactChat
          </div>
          <div className="home-head-footer">
            websocket
          </div>
      </Container>
    </div>   
  );
}

export default Home;