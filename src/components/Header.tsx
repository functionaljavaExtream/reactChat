import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/header.css'
const Header: React.FC = () =>{

  return (
    <div className="header">
        <Row className="header">
            <Container>
                <Row className="header">
                    <div className="headerdiv">
                        <Link className="linkfont" to="/">home</Link>
                    </div>
                    <div className="headerdiv">
                        <Link className="linkfont" to="/chat">chat</Link>
                    </div>
                </Row>
            </Container>
        </Row>
    </div>
  );
}

export default Header;