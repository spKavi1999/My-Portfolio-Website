import {Link} from 'react-scroll'
import React, { useState } from 'react'
import {  Button,Modal } from 'react-bootstrap';
import { FaInstagram, FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./header.css";

const Header = () => {

  const [view,setView]=useState(false);

  const handleOpen=()=>setView(true);
  const handleClose = () => setView(false);

  return (
    <div className="header">
      <div className="header_left">
        <h1>Develop<span>er</span></h1>
      </div>
      <div className="header_right">
       
            <Link to='about' smooth={true} duration={500} offset={-100}>
            <h4>About</h4>
            </Link>
        
            <Link to='skills' smooth={true} duration={500} offset={-100}>
            <h4>Skills</h4>
            </Link>
            <Link to='projects' smooth={true} duration={500} offset={-100}>
            <h4>Projects</h4>
            </Link>
            <Link to='exp' smooth={true} duration={500} offset={-100}>
            <h4>Experience</h4>
            </Link>
            <Link to="contact" smooth={true} duration={500} offset={-100}><h4>Contact Me</h4></Link>
            <h4 onClick={handleOpen} className='header_rightbtn'>Join with me</h4>
            <div>
             <Modal show={view} onHide={handleClose} centered>
              <Modal.Header closeButton >
                <Modal.Title>Connect With Me</Modal.Title>
              </Modal.Header>
              
              <Modal.Body>
              
              <div style={{ display: 'flex', justifyContent: 'space-around', fontSize: '2rem' }}>
    {/* Instagram Link */}
    <a
      href="https://www.instagram.com/spkavi20/" // Replace with your Instagram URL
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: '#E1306C' }} // Instagram pink color
    >
      <FaInstagram />
    </a>
    <a
      href="https://wa.me/9789390835" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: '#25D366' }} // WhatsApp green color
    >
      <FaWhatsapp />
    </a>
    <a
      href="mailto:someone@example.com" // Replace with your email
      target="_blank"
      rel="noopener noreferrer"
      className='text-primary' // Email red color
    >
      <FaEnvelope />
    </a>
    <a
                  href="https://github.com/spKavi1999" // Replace with your GitHub URL
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#24292F' }} // GitHub color
                >
                  <FaGithub />
                </a>
    <a
      href="https://www.linkedin.com/in/kavi-sakkaravarthi-87573b1b6" // Replace with your LinkedIn profile URL
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: '#0A66C2' }} // LinkedIn blue color
    >
      <FaLinkedin />
    </a>
    
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant='outline-primary' onClick={handleClose}>close</Button>
              </Modal.Footer>
             </Modal>
            </div>
        
      </div>
    </div>
  )
}

export default Header
