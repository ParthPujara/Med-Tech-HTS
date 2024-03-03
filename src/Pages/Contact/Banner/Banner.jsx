import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import brushMan from '../../../Images/doc2.png';
import staircaseMan from '../../../Images/doc1.png';
import heroMainbg2 from '../../../Images/HeroMainBg2.png'


const Banner = () => {
    return (
        <section className="banner-all text-white">
            <Container>
                <Row className="align-items-center">
                    <Col md={6} lg={6} sm={12}>
                        <div className="section-title">
                            <h1>Contact Us</h1>
                        </div>
                        <div className="breadcrumb-nav">
                            <a href="/" className="text-decoration-none text-white">Home Page</a>
                            <span href="/" className="text-decoration-none text-white ml-2">Contact Us</span>
                        </div>
                    </Col>
                    <Col md={6} lg={6} sm={12}>
                        <div className="hero-slide-right text-start">
                            <div className="banner-animate">
                                <img src={heroMainbg2} style={{height:300,top:'20px',marginLeft:'100px'}} alt="" className="img-fluid" />
                                <img src={staircaseMan} style={{height:200,marginRight:100}} alt="" className="img-fluid a2" />
                                <img src={brushMan} style={{height:200 ,marginLeft:100}} alt="" className="img-fluid a3" />
                                {/* <img src={inject} alt="" className="img-fluid a4" />
                                <img src={injectTool} alt="" className="img-fluid a5" /> */}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Banner;