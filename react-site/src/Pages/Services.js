import React from "react";
import {Container, Tab, Nav, Row, Col} from "react-bootstrap";
import cameraImg from '../assets/img/cameraImg.jpg';

export default function Services() {
    return (
        <Container >
            <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column mt-2 ">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Портретная съёмка</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Индивидуальная съемка</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Семейная съёмка</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fourth">Свадебная съёмка</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fifth">Love story</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content className="mt-3">
                            <Tab.Pane eventKey="first">
                              <img className="d-block w-100" src={cameraImg}/>
                              <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad amet architecto cum doloribus eligendi et, exercitationem fuga illum in ipsam laborum nesciunt nostrum possimus quo saepe soluta temporibus voluptate!</span><span>Accusamus amet architecto consequatur dolorum et eum id illo ipsum labore necessitatibus nesciunt numquam odio officiis omnis perferendis, provident quae quidem repellendus saepe sapiente, sequi temporibus veniam veritatis vero voluptas.</span><span>Assumenda beatae consequatur cupiditate deserunt dicta dolorem eligendi exercitationem illo in laboriosam minima minus molestias, nihil, nostrum optio perferendis provident quae quasi quis sed similique sit sunt vitae voluptate voluptatibus.</span><span>Ab alias aliquam animi aperiam at, autem beatae cumque distinctio dolores dolorum explicabo iure laboriosam magni maiores, minima natus nisi non officiis quam quod rerum saepe ullam vero voluptas voluptatem?</span></p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <img className="d-block w-100" src={cameraImg}/>
                                <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad amet architecto cum doloribus eligendi et, exercitationem fuga illum in ipsam laborum nesciunt nostrum possimus quo saepe soluta temporibus voluptate!</span><span>Accusamus amet architecto consequatur dolorum et eum id illo ipsum labore necessitatibus nesciunt numquam odio officiis omnis perferendis, provident quae quidem repellendus saepe sapiente, sequi temporibus veniam veritatis vero voluptas.</span><span>Assumenda beatae consequatur cupiditate deserunt dicta dolorem eligendi exercitationem illo in laboriosam minima minus molestias, nihil, nostrum optio perferendis provident quae quasi quis sed similique sit sunt vitae voluptate voluptatibus.</span><span>Ab alias aliquam animi aperiam at, autem beatae cumque distinctio dolores dolorum explicabo iure laboriosam magni maiores, minima natus nisi non officiis quam quod rerum saepe ullam vero voluptas voluptatem?</span></p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <img className="d-block w-100" src={cameraImg}/>
                                <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad amet architecto cum doloribus eligendi et, exercitationem fuga illum in ipsam laborum nesciunt nostrum possimus quo saepe soluta temporibus voluptate!</span><span>Accusamus amet architecto consequatur dolorum et eum id illo ipsum labore necessitatibus nesciunt numquam odio officiis omnis perferendis, provident quae quidem repellendus saepe sapiente, sequi temporibus veniam veritatis vero voluptas.</span><span>Assumenda beatae consequatur cupiditate deserunt dicta dolorem eligendi exercitationem illo in laboriosam minima minus molestias, nihil, nostrum optio perferendis provident quae quasi quis sed similique sit sunt vitae voluptate voluptatibus.</span><span>Ab alias aliquam animi aperiam at, autem beatae cumque distinctio dolores dolorum explicabo iure laboriosam magni maiores, minima natus nisi non officiis quam quod rerum saepe ullam vero voluptas voluptatem?</span></p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                                <img className="d-block w-100" src={cameraImg}/>
                                <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad amet architecto cum doloribus eligendi et, exercitationem fuga illum in ipsam laborum nesciunt nostrum possimus quo saepe soluta temporibus voluptate!</span><span>Accusamus amet architecto consequatur dolorum et eum id illo ipsum labore necessitatibus nesciunt numquam odio officiis omnis perferendis, provident quae quidem repellendus saepe sapiente, sequi temporibus veniam veritatis vero voluptas.</span><span>Assumenda beatae consequatur cupiditate deserunt dicta dolorem eligendi exercitationem illo in laboriosam minima minus molestias, nihil, nostrum optio perferendis provident quae quasi quis sed similique sit sunt vitae voluptate voluptatibus.</span><span>Ab alias aliquam animi aperiam at, autem beatae cumque distinctio dolores dolorum explicabo iure laboriosam magni maiores, minima natus nisi non officiis quam quod rerum saepe ullam vero voluptas voluptatem?</span></p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fifth">
                                <img className="d-block w-100" src={cameraImg}/>
                                <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad amet architecto cum doloribus eligendi et, exercitationem fuga illum in ipsam laborum nesciunt nostrum possimus quo saepe soluta temporibus voluptate!</span><span>Accusamus amet architecto consequatur dolorum et eum id illo ipsum labore necessitatibus nesciunt numquam odio officiis omnis perferendis, provident quae quidem repellendus saepe sapiente, sequi temporibus veniam veritatis vero voluptas.</span><span>Assumenda beatae consequatur cupiditate deserunt dicta dolorem eligendi exercitationem illo in laboriosam minima minus molestias, nihil, nostrum optio perferendis provident quae quasi quis sed similique sit sunt vitae voluptate voluptatibus.</span><span>Ab alias aliquam animi aperiam at, autem beatae cumque distinctio dolores dolorum explicabo iure laboriosam magni maiores, minima natus nisi non officiis quam quod rerum saepe ullam vero voluptas voluptatem?</span></p>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>

            </Tab.Container>
        </Container>
    );
}