import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Front.css'

const Front = () => {
    return (
        <Container>
            <Carousel className="carousel-img">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://wallpaperaccess.com/full/1884512.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Register To Play PL Dream Eleven</h3>
                        <p>With over 2 million players, Dream Eleven is the biggest Fantasy Football game in the world. It’s FREE to play and you can win great prizes!.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://wallpapercave.com/wp/wp6592753.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Build Your Own Team</h3>
                        <p>Make your choice to pick a squad of 11 players from world wide.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://img.wallpapersafari.com/desktop/1600/900/22/2/PFWS8O.png"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 style={{color: 'rgb(25, 192, 25)'}}>Battle For The Throne</h3>
                        <p style={{color: 'rgb(25, 192, 25)'}}>Fight against the Dream Eleven Manager with your team to be the One</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default Front;