import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Content.css';

const Content = () => {
    return (
        <section className="about-content-sec">
            <Container>
                <Row>
                    <Col md={12} lg={8} lg={{ order: 2 }} className="text-center">
                        <div className="section-title">
                   <h1>Our Multispecialty Practice</h1>
                        </div>
                        <p className="w-50 m-auto content-inner">HealthSphere Clinic has been proud to combine modern techniques and high-tech equipment. Dr. John Dae, Micha, and their team deliver a personalized and comfortable healthcare experience unlike any other in Mason.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Content;