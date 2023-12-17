import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';


export const Special = () => {
    return (
        <div className="hero-section">
            <div className="hero-content">
                <h1>Frequently asked questions</h1>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Payment methods</Accordion.Header>
                        <Accordion.Body>
                            You can pay either with credit card or Google Pay.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Shipping</Accordion.Header>
                        <Accordion.Body>
                            Every package is sent with care from our storage to you by our partners.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>What does Christmas mean to you?</Accordion.Header>
                        <Accordion.Body>
                            Thank you for asking that. Christmas is all about giving and that's why 
                            we have our shop. With our help you can begin giving too. 
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Shipping</Accordion.Header>
                        <Accordion.Body>
                            I think we handled this quoestion earlier. 
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>I want my money back</Accordion.Header>
                        <Accordion.Body>
                            And you shall. First let's talk and figure out the solution for you to become
                            a happy customer again. Send us an email to testingfor@tests.com.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
  };
  
  export default Special;
