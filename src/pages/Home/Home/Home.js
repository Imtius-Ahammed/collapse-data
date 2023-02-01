import React, { useContext, } from 'react';
import { AccordionContext, Button } from 'react-bootstrap';
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
 const allData = useLoaderData('')


      
   
        return (
        <div className='container bg-info pt-5'>
          <div className='container'>
            {
                allData.map(data=> <Accordion key={data.id} >
                <Card className='mb-3 '>
                  <Card.Header  className="d-flex border-0 justify-content-between align-items-center">
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
                        <h6>{data.name}</h6>
                    
                    </div>
                <div>
                <ContextAwareToggle  eventKey="0">
                        <h1 >Click me!</h1>
                    
                    </ContextAwareToggle>
                </div>
                   
                 
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm the body</Card.Body>
                  </Accordion.Collapse>
                </Card>
               
              </Accordion>)
            }
        </div>
        </div>
        );
      
};

export default Home; 