import "@fontsource/josefin-sans";
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import doctorfinding from '../../../Images/doctorfinding.c2532ac3.png';
import heroTeeth from '../../../Images/hero-theeth.54c2c4e9.png';
import womanbrush from '../../../Images/woman-brush.c4158ac5.png';
import robot from '../../../Images/robot(png).png'
import computerDesk from '../../../Images/Computerdesk.png'
import doctorTeach from '../../../Images/doctorTeach.png'

import './Banner.css';


// Empowering Doctors, Empowering Lives: Where Cutting-edge Technology Meets Compassionate Care."
const Banner = () => {
    return (
            <section className="single-hero-slide text-white d-flex justify-content-center align-items-center">
                <Container>
                    <Row className="align-items-center">
                        <Col md={12} sm={12} lg={6}>
                            <div className="hero-slide-left justify-content-end align-items-center text-center text-lg-start">
                                <h2>Empowering Doctors</h2>
                                <h1>Empowering Lives</h1>
                                <p className="mb-xs-5">Where Cutting-edge Technology Meets Compassionate Care.</p>
                                <div className="banner-btn m-sm-auto">
                                    <Link to="/login"><button className="theme-btn btn-fill">Appoinment</button></Link>
                                    {/* <button className='theme-btn bth-blank'>Learn More</button> */}
                                </div>
                            </div>
                        </Col>
                        <Col md={12} sm={12} lg={6} className="mt-sm-5">
                            <div className="hero-slide-right text-center text-lg-start mt-sm-5">
                                <div className="animate-img">
                                    <img src={robot}  alt="" className="img-fluid aimg1" />
                                    <img src={doctorTeach} style={{height:300}} alt="" className="img-fluid aimg2" />
                                </div>
                                <img src={computerDesk} alt="" className="heroTeeth"/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
    );
};

export default Banner;