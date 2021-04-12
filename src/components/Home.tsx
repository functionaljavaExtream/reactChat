import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/home.css'
const Home: React.FC = () =>{
  const somthin = "some";
  const hello ="hello";
  return (
    <div className="Home home">
      <Container>
          <div className="home-head">
            Select the room
          </div>
          <div className="wrapper">
          <div className="home-head-footer">
            <Link className="link" to="/chat">
              <div className="room-select">
                MainServer
              </div>
            </Link>

          </div>
          </div>
      </Container>
    </div>   
  );
}

export default Home;