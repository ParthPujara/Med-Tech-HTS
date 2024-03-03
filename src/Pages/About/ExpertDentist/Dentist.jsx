import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import expertDentist from '../../../Images/experienceddentist.png';
import './Dentist.css';

const Dentist = () => {
    return (
        <section className='expert-dentist'>
            <Container>
                <Row className="align-items-center">
                    <Col lg={6}>
                        <img src={expertDentist} alt="expertDentist" className="img-fluid rounded" />
                    </Col>
                    <Col lg={6}>
                        <div className="expertDentist-txt mt-5 mt-lg-0">
                            <h2>Experienced multispecialty doctors</h2>
                            <p>Smiling comes naturally to Dr. Harrie, author of ‘HealthSphere’. He has embraced Multispecialty Medicine and has redesigned the lives for thousands of patients.</p>
                            <p>Our Doctors believes in providing his patients with more than just world-class medical care. He also helps patients recognize the vital connection between overall health and whole-body wellness. A graduate of the University of California’s School of Medicine, Dr. Harrie is a leader in the movement to bring environmental sanity and well-being into the medical world for the future</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Dentist;