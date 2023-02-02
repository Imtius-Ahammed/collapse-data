import React, { useContext, useEffect, useState, } from 'react';
import { AccordionContext, Button, Col, Container, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import { useLoaderData } from 'react-router-dom';


function ContextAwareToggle({ children, eventKey, callback }) {
    const { activeEventKey } = useContext(AccordionContext);
  
    const decoratedOnClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey),
    );
  
    const isCurrentEventKey = activeEventKey === eventKey;
  
    return (
      <Button
        
        className='m-5 border-0'
        style={{ backgroundColor: isCurrentEventKey ? 'pink' : 'red' }}
        onClick={decoratedOnClick}
      >
        {children}
      </Button>
    );
  }


const Home = () => {


 const [allData, setAllData]=useState([]);
 useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=>res.json())
  .then(data=>setAllData(data))
 },[])


      
   
        return (
        <div className='container bg-info pt-5'>
          <div className='container'>
            {
                allData.map(data=> <Accordion key={data.id} >
                <Card className='mb-3 '>
                  <Card.Header  className="d-flex flex-wrap gap-2 border-0 justify-content-between align-items-center">
                  <div>
                        <h6>{data.name}</h6>
                    
                  </div>
                  <div className='d-flex flex-column'>
                       <div>
                        <h3>Contact</h3>

                       </div>
                       <div>
                        {data.phone}

                       </div>
                    
                    </div>
                  <div className='d-flex flex-column'>
                       <div>
                        <h3>City</h3>

                       </div>
                       <div>
                        {data.address.city}

                       </div>
                    
                    </div>
                  <div className='d-flex flex-column'>
                       <div>
                        <h3>Street</h3>

                       </div>
                       <div>
                        {data.address.street}

                       </div>
                    
                    </div>
                
                 
                <div>
                <ContextAwareToggle  eventKey="0">
                        <h1 >Click me!</h1>
                    
                    </ContextAwareToggle>
                </div>
                   
                 
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body className='shadow p-3 mb-5 bg-white rounded '>
                      <div>
                        <h2>{data.company.name}</h2>
                        <h3>{data.company.catchPhrase}</h3>
                        <h5>{data.company.bs}</h5>

                      </div>
                      <Container>
                        <Row>
                          <Col>
                          <div className='d-flex flex-column align-items-center mb-2'><h4>Name</h4>{data.name}</div>
                          <div className='d-flex flex-column align-items-center  mb-2'><h4>Username</h4>{data.username}</div> 
                          <div className='d-flex flex-column align-items-center  mb-2'><h4>Email</h4>{data.email}</div>  
                          <div className='d-flex flex-column align-items-center  mb-2'><h4>Phone</h4>{data.phone}</div>  
                          <div className='d-flex flex-column align-items-center  mb-2'><h4>Email</h4>{data.website}</div>  

                          </Col>
                          <Col>
                          <div className='d-flex flex-column align-items-center  mb-2'><h4>City</h4>{data.address.city}</div>
                          <div className='d-flex flex-column align-items-center  mb-2'><h4>Street</h4>{data.address.street}</div>
                          <div className='d-flex flex-column align-items-center  mb-2'><h4>Suite</h4>{data.address.suite}</div>
                          <div className='d-flex flex-column align-items-center  mb-2'><h4>Zipcode</h4>{data.address.zipcode}</div>
                          <div className='d-flex flex-column align-items-center mb-2'><h4>Geo</h4>{data.address.geo.lat}, {data.address.geo.lng}</div>
                          </Col>
                        </Row>
                      </Container>
                  
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
               
              </Accordion>)
            }
        </div>
        </div>
        );
      
};

export default Home; 