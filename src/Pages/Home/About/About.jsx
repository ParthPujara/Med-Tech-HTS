import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// import donto from '../../../Images/about-banner1.png';
import dontoAnimated from '../../../Images/cleaner.png';
import hospital from '../../../Images/Hospital.png';
import patientanim from '../../../Images/Hospital-patient-anim.png'
import ambulance from '../../../Images/ambulance.png'
import './About.css';

const About = () => {

    useEffect(() => {
        AOS.init({
                duration: 2000,
            });
        AOS.refresh();
      }, []);
    return (
        <section className="about-wrapper">
            <Container>
                <Row>
                    <Col md={12} lg={6}>
                        <div className="about-left">
                            <img src={hospital} alt="donto" className="img-fluid donto" />
                            <img src={ambulance} style={{height:'15rem'}} alt="donto" className="img-fluid animated dontoAnim" />
                        </div>
                    </Col>
                    <Col md={12} lg={6}>
                        <div className="about-right mt-5 mt-lg-0">
                            <div className="about-content text-start" data-aos="zoom-in">
                                <h1> Embrace Healing with Us</h1>
                                <p>Step into a community of care and compassion at [Hospital Name]. Here, we don't just treat patients; we welcome you into our hospital family. From the first handshake to the last goodbye, you'll experience the genuine warmth and dedication that defines our institution. At [Hospital Name], we believe in the power of connection – the bond between caregiver and patient, the support of fellow community members, and the strength found in unity. No matter your medical needs, rest assured that you're in capable hands. Together, let's build a healthier, happier tomorrow.</p>
                                <a href='/page/about'>About Us</a>
                            </div>
                            <div className="fun-fact-sec" data-aos="fade-right">
                                <div className="single-fun">
                                    <span>22000+</span>
                                    <span>+</span>
                                    <p>Happy Patients</p>
                                </div>
                                <div className="single-fun sp-fun" data-aos="fade-right">
                                    <span>88</span>
                                    <span>+</span>
                                    <p>Qualified Doctors</p>
                                </div>
                                <div className="single-fun" data-aos="fade-left">
                                    <span>25</span>
                                    <span>+</span>
                                    <p>Years Experience</p>
                                </div>
                                <div className="single-fun sp-fun" data-aos="fade-left">
                                    <span>50</span>
                                    <span>+</span>
                                    <p>Dental Awards</p>
                                </div>
                                <span className="line"></span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;