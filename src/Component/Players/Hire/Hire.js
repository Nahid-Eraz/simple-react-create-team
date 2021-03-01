import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Hire = (props) => {
    const hire = props.hire;
    console.log(hire);

    let totalExpense = 0;
    for (let i = 0; i < hire.length; i++) {
        const player = hire[i];
        totalExpense += player.bid_price;
    }

    return (
        <div>
            <Card style={{ width: '16rem' }}>
                <Card.Body>
                    <Card.Title>Total Transfer In <br /> {hire.length}</Card.Title>
                    <Card.Text>
                        Team Value <br /> € {totalExpense} Millions
                    </Card.Text>
                </Card.Body>
            </Card>
            <br/>
            <h4 style={{color:'white'}}>Selected Players</h4>
            <br/>
            {
                hire.map(singlePlayer =>
                    <Card style={{ width: '16rem' }}>
                        <Card.Img variant="top" src={singlePlayer.img} />
                        <Card.Body>
                            <Card.Title>{singlePlayer.name}</Card.Title>
                            <Card.Text>
                                <h5>Value: € {singlePlayer.bid_price} Millions</h5>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )
            }
        </div>
    );
};

export default Hire;