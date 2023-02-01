import React, { useContext, useEffect, useState } from 'react';
import { AccordionContext } from 'react-bootstrap';
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
      <button
        type="button"
        style={{ backgroundColor: isCurrentEventKey ? 'pink' : 'lavender' }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }


const Home = () => {
 const allData = useLoaderData('')
 console.log()
      
   
        return (
        <div>
            {
                allData.map(data=> <Accordion key={data.id} defaultActiveKey="0">
                <Card>
                  <Card.Header  className="d-flex justify-content-end">
                  <div>
                        <h6>{data.name}</h6>
                    
                    </div>
                    <ContextAwareToggle eventKey="0">
                        <h1>Click me!</h1>
                    
                    </ContextAwareToggle>
                   
                 
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm the body</Card.Body>
                  </Accordion.Collapse>
                </Card>
               
              </Accordion>)
            }
        </div>
        );
      
};

export default Home; 