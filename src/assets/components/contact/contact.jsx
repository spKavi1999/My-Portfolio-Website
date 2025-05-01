import React, { useRef, useState } from 'react';
import { Element } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Card, Button, Container } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_brfdiau', 'template_30az663', form.current, 'TOy2yuJdvW6oED6of')
      .then((result) => {
        console.log('Message Sent!', result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log('Error:', error.text);
        alert('Failed to send the message, please try again.');
      });

    e.target.reset(); // Reset the form after sending
  };

  return (
    <Element id="contact" style={{
      backgroundImage: 'url(https://wallpaperaccess.com/full/1567666.png)', 
      minHeight: '100vh',
      padding: '50px 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Container className="d-flex justify-content-center align-items-center">
        <Card style={{
          width: '100%',
          maxWidth: '500px',
          backgroundColor: '#121212', // dark grey
          color: 'white',
          border: '1px solid #333',
          boxShadow: '0 0 25px rgba(0, 123, 255, 0.2)', // soft blue glow
          borderRadius: '15px',
          padding: '20px'
        }}>
          <Card.Header className='text-primary text-center'>
            Contact Me
          </Card.Header>
          <Card.Body>
            <Form ref={form} onSubmit={sendEmail}>
              <Form.Group controlId="name" className="mb-3">
                <Form.Label>Your Name</Form.Label>
                <Form.Control 
                  type="text"
                  value={name}
                  onChange={(e) =>setName(e.target.value)}
                  required
                 className='bg-light border border-secondary'
                />
              </Form.Group>

              <Form.Group controlId="email" className="mb-3">
                <Form.Label>Your Email Address</Form.Label>
                <Form.Control 
                  type="email"
                  value={email}
                  onChange={(e) =>setEmail(e.target.value)}
                  required className='bg-light border border-secondary '
                />
              </Form.Group>

              <Form.Group controlId="message" className="mb-3 ">
                <Form.Label>Write Your Message</Form.Label>
                <Form.Control 
                  as="textarea"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required className='bg-light border border-light'
                  
                    
                />
              </Form.Group>

              <div className="text-center">
                <Button 
                  variant=" primary" 
                  type="submit" className='btn-block'
                  style={{
                    padding: '10px 30px',
                   
                    backgroundColor: '#007bff',
                    border: 'none',
                    fontWeight: 'bold',
                    fontSize: '18px'
                  }}
                >
                  Send Me
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </Element>
  );
};

export default Contact;
