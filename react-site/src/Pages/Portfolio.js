import React from "react";
import cameraImg from '../assets/img/cameraImg.jpg';
import {Container, CardDeck, Card,Button , Row, Col, Nav, Tab} from "react-bootstrap";

export default function Portfolio() {
    return (
        <Container>
            <div className="container-portfolio my-5">
            <h2 className="text-center m-4">Портфолио</h2>
            <CardDeck>
                <Card>
                    <Card.Img
                        variant="top"
                        src={cameraImg}
                    />
                    <Card.Body>
                        <Card.Title>Портретная съёмка</Card.Title>
                        <Button variant="outline-dark">See more</Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img
                        variant="top"
                        src={cameraImg}
                    />
                    <Card.Body>
                        <Card.Title>Индивидуальная съемка</Card.Title>
                        <Button variant="outline-dark">See more</Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img
                        variant="top"
                        src={cameraImg}
                    />
                    <Card.Body>
                        <Card.Title>Семейная съёмка</Card.Title>
                        <Button variant="outline-dark">See more</Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img
                        variant="top"
                        src={cameraImg}
                    />
                    <Card.Body>
                        <Card.Title>Семейная съёмка</Card.Title>
                        <Button variant="outline-dark">See more</Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img
                        variant="top"
                        src={cameraImg}
                    />
                    <Card.Body>
                        <Card.Title>Love story</Card.Title>
                        <Button variant="outline-dark">See more</Button>
                    </Card.Body>
                </Card>
            </CardDeck>
            </div>
        </Container>

    );
}