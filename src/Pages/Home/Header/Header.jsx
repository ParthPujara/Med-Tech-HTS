import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import medicon from '../../../Images/med-iconbtn.png';
import logo from '../../../Images/logo.png';


import './Header.css';

const Header = () => {

    const { user, logout } = useAuth();

    //For navbar(container-head) to change color on scroll
const [navbarColor, setNavbarColor] = useState(false);

//function to check scroll
const NavbarChanger = ()=>{
    if(window.scrollY>500){
        setNavbarColor(true);
    }
    else{
        setNavbarColor(false);
    }
}
 useEffect(()=>{
    window.addEventListener('scroll',NavbarChanger);
 },[]);
    return (
        <div className="head-bg">
            <Navbar className="navbar" collapseOnSelect expand="lg">
                <Container className={navbarColor?' container-head active ':'container-head'}>
                    {/* <Navbar.Brand href="/home"><img className='btn-image'  alt="logo" /></Navbar.Brand> */}
                    <Link to="/home" className='list-item text-decoration-none' style={{fontSize:30,color:'#fc5185',fontWeight:600}}>EaseCare</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" expand="lg"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Link to="/home" className='list-item text-decoration-none'>Home</Link>
                            <Link to="/about" className='list-item text-decoration-none'>About</Link>
                            {/* <Link to="/service" className='list-item text-decoration-none'>Service</Link>
                            <Link to="/dentist" className='list-item text-decoration-none'>Dentist</Link> */}
                            <Link to="/contact" className='list-item text-decoration-none'>Contact</Link>
                            {user.email 
                            ?
                            <button type="button" className="btn btn-danger" onClick={logout}>Log Out</button>
                            :
                            <Link to="/login" type="button" className="btn btn-danger">Login +</Link>
                            } 
                            {user.email &&
                                <Navbar.Text><FontAwesomeIcon icon={faUser} /><span className="userName">{user.displayName}</span></Navbar.Text>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;