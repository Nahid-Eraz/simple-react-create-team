import React from 'react';
import './Player.css'
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'


const Player = (props) => {
    const {img, name,nationality,current_club,position,bid_price } = props.player;
    
    const handleAddPlayers = props.handleAddPlayers;

    return (
        <div className="card-style">
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <h6>{nationality}</h6>
                        <p>Present Club: {current_club}</p>
                        <h5>Position: {position}</h5>
                        <h4>€ {bid_price} Million</h4>
                    </Card.Text>
                    <Button onClick={() => handleAddPlayers(props.player)} variant="success"><FontAwesomeIcon icon={faUserPlus} /> Transfer In</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Player;