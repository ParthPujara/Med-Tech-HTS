import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import brushMan from '../../../Images/brushman.png';
import HeroMainBg1 from '../../../Images/HeroMainBg1.png';
import injectTool from '../../../Images/inject-tool.png';
import inject from '../../../Images/injection.png';
import staircaseMan from '../../../Images/staircase.png';
import computer from '../../../Images/Computerdesk.png'
import patientDesk from '../../../Images/Hospital-patient-anim.png'
import './Banner.css';

const Banner = () => {
    return (
        <section className="banner-all text-white">
            <Container>
                <Row className="align-items-center">
                    <Col md={6} lg={6} sm={12}>
                        <div className="section-title">
                            <h1>About Us</h1>
                        </div>
                        <div className="breadcrumb-nav">
                            <a href="/" className="text-decoration-none text-white border p-2 rounded">Home Page</a>

                            {/* <span href="/" className="text-decoration-none text-white border p-2 rounded ml-2 cursor-pointer"> About Us</span>   */}
                        </div>
                    </Col>
                    <Col md={6} lg={6} sm={12}>
                        <div className="hero-slide-right text-start"style={{marginLeft:'7rem'}} >
                            <div className="banner-animate">
                                <img src={HeroMainBg1} style={{height:'20rem'}} alt=""   className="img-fluid" />
                                <img  src={computer}style={{height:200,left:'200px'}} alt=""   className="img-fluid a2" />
                                <img  alt=""   className="img-fluid a3" />
                                <img src={patientDesk} style={{height:200, left:'-148px', top:'5rem'}} alt=""   className="img-fluid a4" />
                                <img alt=""   className="img-fluid a5" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Banner;