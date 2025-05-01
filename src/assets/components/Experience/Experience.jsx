import React from 'react';
import { Element } from 'react-scroll';
import { Card, Row, Col } from 'react-bootstrap';
//import project from '../../project1image.avif'; // Ensure the path is correct
import expimage from '../../expimage.webp';

const Experience = () => {
  return (
    <Element id="exp">
      <div
        style={{
          minHeight: '100vh',
          padding: '50px 20px',
          backgroundImage: `url(${expimage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <h1 className='text-light'>Experience</h1>

        <Row className="justify-content-center" style={{ width: '100%' }}>
          
          {/* IT Support Engineer */}
          <Col xs={12} md={6} lg={6}>
            <Card className="mb-4 shadow" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', color: 'white', height: '100%' }}>
              <Card.Body>
                <h4>IT Support Engineer</h4>
                <h6  style={{color:'orangered'}}>Walmart & Tyson Inc. Projects via Infosys</h6>
                <p><strong>Duration:</strong> July 2021 - March 2024 | Chennai, Tamil Nadu</p>
                <ul style={{ textAlign: 'left' }}>
                  <li>Supported Retail Link Applications for Walmart, ensuring seamless store-supplier integration.</li>
                  <li>Configured application properties (CCM), performed deployments, and assisted application installations.</li>
                  <li>Monitored Splunk alerts proactively to prevent application downtime and issues.</li>
                  <li>Managed incidents and service requests through Jira and ServiceNow, meeting SLA targets.</li>
                  <li>Collaborated with development teams for troubleshooting, patching, and performance improvements.</li>
                  <li>Handled end-of-day batch jobs and client reporting for the Tyson project.</li>
                </ul>
                <p><strong>Skills:</strong> Application Support, Monitoring (Splunk), ServiceNow, Jira, Client Communication</p>
              </Card.Body>
            </Card>
          </Col>

          {/* Front-End Developer */}
          <Col xs={12} md={6} lg={6}>
            <Card className="mb-4 shadow" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', color: 'white', height: '100%' }}>
              <Card.Body>
                <h4>Front-End Developer</h4>
                <h6 style={{color:'orangered'}}>Self-Learning & Freelance Projects</h6>
                <p><strong>Duration:</strong> 2024 - Present</p>
                <ul style={{ textAlign: 'left' }}>
                  <li>Built a personal portfolio website using React.js and Bootstrap, focused on mobile-first responsive design.</li>
                  <li>Developed multiple mini-projects such as To-Do List, E-commerce Cart, Weather App, Calculator, and Login & Signup forms.</li>
                  <li>Integrated third-party REST APIs and implemented real-time data fetching.</li>
                  <li>Applied best practices in form validation, API handling, and component-based architecture.</li>
                </ul>
                <p><strong>Skills:</strong> React.js, JavaScript (ES6+), HTML5, CSS3, Bootstrap, API Integration</p>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </div>
    </Element>
  );
};

export default Experience;
