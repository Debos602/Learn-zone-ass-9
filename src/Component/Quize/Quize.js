import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import './Quize.css'


const Quize = ({quize}) => {
    // console.log(quize.logo);
    const {id,logo, name}=quize;
    return (
         <Col lg="3">
          <Card>
            <Card.Img className='image-size border border-radius p-3' variant="top" src={logo}/>
            <Card.Body className='d-flex justify-content-between'>
              <Card.Title className='m-0 p-2'>{name}</Card.Title>
              <Link to={`/quize/${id}`}><Button variant="primary" size="sm">
                Start Practice
                </Button>{' '}</Link>
            </Card.Body>
          </Card>
        </Col>
    );
};

export default Quize;