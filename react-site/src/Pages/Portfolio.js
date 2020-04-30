import React from "react";
import cameraImg from '../assets/img/cameraImg.jpg';
import {Container, CardDeck, Card,Button , Row, Col, Nav, Tab} from "react-bootstrap";

export default function Portfolio() {
    return (
        <Container>
            {/*<Tab.Container id="ledt-tabs-example" defaultActiveKey="first">*/}
                {/*<Row>*/}
                    {/*<Col sm={3}>*/}
                        {/*<Nav variant="pills" className="flex-column mt-2 ">*/}
                            {/*<Nav.Item>*/}
                                {/*<Nav.Link eventKey="first">Портретная съёмка</Nav.Link>*/}
                            {/*</Nav.Item>*/}
                            {/*<Nav.Item>*/}
                                {/*<Nav.Link eventKey="second">Индивидуальная съемка</Nav.Link>*/}
                            {/*</Nav.Item>*/}
                            {/*<Nav.Item>*/}
                                {/*<Nav.Link eventKey="third">Семейная съёмка</Nav.Link>*/}
                            {/*</Nav.Item>*/}
                            {/*<Nav.Item>*/}
                                {/*<Nav.Link eventKey="fourth">Семейная съёмка</Nav.Link>*/}
                            {/*</Nav.Item>*/}
                            {/*<Nav.Item>*/}
                                {/*<Nav.Link eventKey="fifth">Love story</Nav.Link>*/}
                            {/*</Nav.Item>*/}
                        {/*</Nav>*/}
                    {/*</Col>*/}
                    {/*<Col sm={9}>*/}
                        {/*<Tab.Content className="mt-3">*/}
                            {/*<Tab.Pane eventKey="first">*/}
                            {/*</Tab.Pane>*/}
                            {/*<Tab.Pane eventKey="second">*/}
                            {/*</Tab.Pane>*/}
                            {/*<Tab.Pane eventKey="third">*/}
                            {/*</Tab.Pane>*/}
                            {/*<Tab.Pane eventKey="fourth">*/}
                            {/*</Tab.Pane>*/}
                            {/*<Tab.Pane eventKey="fifth">*/}
                            {/*</Tab.Pane>*/}
                        {/*</Tab.Content>*/}
                    {/*</Col>*/}
                {/*</Row>*/}

            {/*</Tab.Container>*/}
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
        </Container>
    );
}