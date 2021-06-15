import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/header.css'
const Header: React.FC = () =>{

  return (
    <div className="header">
        <Row className="header">
            <Container>

                    <div className="wrapper">
                      <div className="headerdiv">
                        welcom to ReactChat
                      </div>
                    </div>

            </Container>
        </Row>
    </div>
  );
}

export default Header;