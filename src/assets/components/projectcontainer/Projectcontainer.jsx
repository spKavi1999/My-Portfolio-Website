import React, { useState }  from 'react'
import { Element } from 'react-scroll'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col,Card, Modal,Button } from 'react-bootstrap';
import './projectcontainer.css'
import mymini from '../../mymini.png';
import project from '../../project1image.avif'
import calcpic from  '../../calcpic1.png'



const Projectcontainer = () => {

  //const [view,setView]=useState(true);
  const [active,setActive]=useState('my projects');

  const [miniProjects,setMiniProjects]=useState([{
    name:"SignUp&Login",description:"Simple Sign Up and Login authentication system",image:mymini,
    sourcecode:"https://github.com/spKavi1999/Sign_Up-Login",
    viewlink:"https://kavi99-signup-login.netlify.app/"
  },
  {
    name:"Calculator",description:"A simple calculator app for performing basic arithmetic operations with an intuitive and responsive interface.",
    image:calcpic,
    sourcecode:"https://github.com/spKavi1999/Calculator",
    viewlink:"https://kavi-calculator.netlify.app/"
  }
])
  
 



    
  return (
    <div>
      <Element id="projects">

      <div style={{ minHeight: '100vh', paddingTop: '50px', paddingBottom: '50px' ,
      
     backgroundImage: `url(${project})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat' }}> 
      <div className='d-flex justify-content-center gap-2'>
        <div className='flex-1 '>
        <Button style={{backgroundColor:active==='my projects'?'orangered':'transparent',color:active==='my projects'?'white':'orangered',border:'1px solid orangered'}}
        onClick={()=>setActive('my projects')} className='btn-block w-100'>My Projects
        </Button>
        </div>
        <div className='flex-1'>
        <Button style={{backgroundColor:active==='my mini projects'?'orangered':'transparent',color:active==='my mini projects'?'white':'orangered',border:'1px solid orangered'}} 
        onClick={()=>setActive('my mini projects')} className='btn-block w-100'>My Mini Projects
        </Button>
        </div>
      </div>
      <div>
        {active==='my projects' && (
          <div>
          <h2 className='text-light'>My Projects Content</h2>

        </div>
        )}
        {active==='my mini projects'&& (
          <div>
          {/* Your content here */}
          <h2 className='text-light'>My mini Projects Content</h2>
          <Row>
            { miniProjects.map((mini,index)=>(
              <Col key={index} sm={12} md={6} lg={4}>
                <Card>
                  <Card.Img variant='top' src={mini.image}/>
                  <Card.Body className='text-center'>
                     <Card.Title>{mini.name}</Card.Title>
                     <Card.Text>{mini.description}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <div className='d-flex justify-content-center gap-1'>
                    <Button className='bg-success text-white' onClick={()=>window.open(mini.sourcecode,'_blank')}>Source Code</Button>
                    <Button className='bg-primary text-white' onClick={()=>window.open(mini.viewlink,'_blank')}>View Projects</Button>
                    
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
            ))}

          </Row>
        </div>
        )}
      </div>
     
     </div>
      </Element>
    </div>
  )
}

export default Projectcontainer
