import React, { useEffect, useState } from 'react';
import playersData from '../../data/data.json';
import './Players.css'
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Player from './Player/Player';
import Hire from './Hire/Hire';


const Players = () => {
    const [players, setPlayers] = useState([]);
    const [hire, setHire] = useState([]);

    useEffect(() => {
        setPlayers(playersData);
        console.log(playersData);
    },[])

    const handleAddPlayers = (player) => {
        const newHire = [...hire, player];
        setHire(newHire);
    }

    return (
        <Container className="main-container">
            <Row>
                <Col md={3} className="hired-player-container">
                    <h2>Selected</h2>
                    <Hire hire = {hire}></Hire>
                </Col>
                <Col md={9} className="players-container">
                    <h2>Players List</h2>
                    {
                        players.map(plr => <Player player={plr} handleAddPlayers={handleAddPlayers} key={plr.id}></Player>)
                    }
                </Col>
            </Row>
        </Container>
    );
};

export default Players;