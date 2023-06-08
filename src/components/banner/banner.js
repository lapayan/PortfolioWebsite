import { Container, Row, Col } from "react-bootstrap";
import {ReactComponent as Panda} from '../../assets/personalBrandLogo.svg';

const Banner = () =>{ 
    return (
        <section className="banner" id="home">   
            <Container>
                <Row className = 'aligh-items-center'> 
                    <Col xs={12} md={6} xl={7}>
                        <span className = "introduction">Hi my name is Luis</span>
                        <p>Lorem ipsum</p>
                    </Col> 
                </Row>
            </Container>
        </section>
    )
};

export default Banner; 
