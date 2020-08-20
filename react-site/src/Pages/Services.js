import React from "react";
import in_photo from '../assets/img/in_photo.jpg';
import love_story_photo_s from '../assets/img/love_story_photo_s.jpg';
import fam_photo from '../assets/img/fam_photo.jpg';
import indiv_photo from '../assets/img/indiv_photo.jpg';
import b_photo from '../assets/img/b_photo.jpg';
import photo_wedding from '../assets/img/photo_wedding.jpg';
import {Container, CardDeck, Card, Button, Row, Col} from "react-bootstrap";
import PopupPortret from "../Popups/PopupPortret";
import PopupIndividual from "../Popups/PopupIndividual";
import PopupBuduar from "../Popups/PopupBuduar";
import PopupLove from "../Popups/PopupLove";
import PopupWedding from "../Popups/PopupWedding";
import PopupFam from "../Popups/PopupFam";


export default function Services() {
    const [portretShow, setPortretShow] = React.useState(false);
    const [individShow, setIndividShow] = React.useState(false);
    const [buduarShow, setBuduarShow] = React.useState(false);

    const [famShow, setFamShow] = React.useState(false);
    const [loveShow, setLoveShow] = React.useState(false);
    const [weddingShow, setWeddingShow] = React.useState(false);



    return (
        <Container>
            <div className="container container_line">
            </div>
            <div className="container_services py-md-5">
            <div className="title text-center m-2">
                <h2>Услуги</h2>
            </div>
            <div className="container_cards mt-5">
                <Row>
                    <CardDeck>
                        <Col md={4} lg={4}>
                        <Card>
                            <Card.Img
                                variant="top"
                                src={in_photo}
                            />
                            <Card.Body>
                                <Card.Title>Портретная съёмка</Card.Title>
                                    <Button variant="outline-dark" className="Btn_more" onClick={() => setPortretShow(true)}>
                                        Подробнее...</Button>
                                <PopupPortret
                                    show={portretShow}
                                    onHide={() => setPortretShow(false)}
                                />
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col md={4} lg={4}>
                        <Card>
                            <Card.Img
                                variant="top"
                                src={indiv_photo}
                            />
                            <Card.Body>
                                <Card.Title>Индивидуальная съемка</Card.Title>
                                <Button variant="outline-dark" className="Btn_more" onClick={() => setIndividShow(true)}>
                                    Подробнее...</Button>
                                <PopupIndividual
                                    show={individShow}
                                    onHide={() => setIndividShow(false)}
                                />
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col md={4} lg={4}>
                        <Card>
                            <Card.Img
                                variant="top"
                                src={b_photo}
                            />
                            <Card.Body>
                                <Card.Title className="space-btn">Будуарная съёмка</Card.Title>
                                <Button variant="outline-dark" className="Btn_more" onClick={() => setBuduarShow(true)}>
                                    Подробнее...</Button>
                                <PopupBuduar
                                    show={buduarShow}
                                    onHide={() => setBuduarShow(false)}
                                />
                            </Card.Body>
                        </Card>
                        </Col>
                    </CardDeck>
                </Row>
                <Row>
                    <div className="second_row mt-md-5  mt-md-5 mt-sm-4">
                    <CardDeck>
                        <Col md={4} lg={4}>
                        <Card>
                            <Card.Img
                                variant="top"
                                src={fam_photo}
                            />
                            <Card.Body>
                                <Card.Title>Семейная съёмка</Card.Title>
                                <Button variant="outline-dark" className="Btn_more" onClick={() => setFamShow(true)}>
                                    Подробнее...</Button>
                                <PopupFam
                                    show={famShow}
                                    onHide={() => setFamShow(false)}
                                />
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col md={4} lg={4}>
                        <Card>
                            <Card.Img
                                variant="top"
                                src={love_story_photo_s}
                            />
                            <Card.Body>
                                <Card.Title>Love story</Card.Title>
                                <Button variant="outline-dark" className="Btn_more" onClick={() => setLoveShow(true)}>
                                    Подробнее...</Button>
                                <PopupLove
                                    show={loveShow}
                                    onHide={() => setLoveShow(false)}
                                />
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col md={4} lg={4}>
                        <Card>
                            <Card.Img
                                variant="top"
                                src={photo_wedding}
                            />s
                            <Card.Body>
                                <Card.Title>Свадебная съемка</Card.Title>
                                <Button variant="outline-dark" className="Btn_more" onClick={() => setWeddingShow(true)}>
                                    Подробнее...</Button>
                                <PopupWedding
                                    show={weddingShow}
                                    onHide={() => setWeddingShow(false)}
                                />
                            </Card.Body>
                        </Card>
                        </Col>
                    </CardDeck>
                    </div>
                </Row>
            </div>
            </div>
        </Container>
    );
}





// import React from "react";
// import {Container, Tab, Nav, Row, Col} from "react-bootstrap";
// import cameraImg from '../assets/img/cameraImg.jpg';
//
// export default function Services() {
//     return (
//         <Container >
//             <div className="container container_services">
//                 <div className="title title_services text-center ">
//                     <h2>Услуги</h2>
//                 </div>
//                 <div className="content content_services">
//                 <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
//                 <Row>
//                     <Col sm={3}>
//                         <Nav variant="pills" className="flex-column mt-2 ">
//                             <Nav.Item>
//                                 <Nav.Link eventKey="first">Портретная съёмка</Nav.Link>
//                             </Nav.Item>
//                             <Nav.Item>
//                                 <Nav.Link eventKey="second">Индивидуальная съемка</Nav.Link>
//                             </Nav.Item>
//                             <Nav.Item>
//                                 <Nav.Link eventKey="third">Семейная съёмка</Nav.Link>
//                             </Nav.Item>
//                             <Nav.Item>
//                                 <Nav.Link eventKey="fourth">Свадебная съёмка</Nav.Link>
//                             </Nav.Item>
//                             <Nav.Item>
//                                 <Nav.Link eventKey="fifth">Love story</Nav.Link>
//                             </Nav.Item>
//                         </Nav>
//                     </Col>
//                     <Col sm={9}>
//                         <Tab.Content className="mt-3">
//                             <Tab.Pane eventKey="first">
//                               <img className="d-block w-100" src={cameraImg}/>
//                               <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad amet architecto cum doloribus eligendi et, exercitationem fuga illum in ipsam laborum nesciunt nostrum possimus quo saepe soluta temporibus voluptate!</span><span>Accusamus amet architecto consequatur dolorum et eum id illo ipsum labore necessitatibus nesciunt numquam odio officiis omnis perferendis, provident quae quidem repellendus saepe sapiente, sequi temporibus veniam veritatis vero voluptas.</span><span>Assumenda beatae consequatur cupiditate deserunt dicta dolorem eligendi exercitationem illo in laboriosam minima minus molestias, nihil, nostrum optio perferendis provident quae quasi quis sed similique sit sunt vitae voluptate voluptatibus.</span><span>Ab alias aliquam animi aperiam at, autem beatae cumque distinctio dolores dolorum explicabo iure laboriosam magni maiores, minima natus nisi non officiis quam quod rerum saepe ullam vero voluptas voluptatem?</span></p>
//                             </Tab.Pane>
//                             <Tab.Pane eventKey="second">
//                                 <img className="d-block w-100" src={cameraImg}/>
//                                 <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad amet architecto cum doloribus eligendi et, exercitationem fuga illum in ipsam laborum nesciunt nostrum possimus quo saepe soluta temporibus voluptate!</span><span>Accusamus amet architecto consequatur dolorum et eum id illo ipsum labore necessitatibus nesciunt numquam odio officiis omnis perferendis, provident quae quidem repellendus saepe sapiente, sequi temporibus veniam veritatis vero voluptas.</span><span>Assumenda beatae consequatur cupiditate deserunt dicta dolorem eligendi exercitationem illo in laboriosam minima minus molestias, nihil, nostrum optio perferendis provident quae quasi quis sed similique sit sunt vitae voluptate voluptatibus.</span><span>Ab alias aliquam animi aperiam at, autem beatae cumque distinctio dolores dolorum explicabo iure laboriosam magni maiores, minima natus nisi non officiis quam quod rerum saepe ullam vero voluptas voluptatem?</span></p>
//                             </Tab.Pane>
//                             <Tab.Pane eventKey="third">
//                                 <img className="d-block w-100" src={cameraImg}/>
//                                 <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad amet architecto cum doloribus eligendi et, exercitationem fuga illum in ipsam laborum nesciunt nostrum possimus quo saepe soluta temporibus voluptate!</span><span>Accusamus amet architecto consequatur dolorum et eum id illo ipsum labore necessitatibus nesciunt numquam odio officiis omnis perferendis, provident quae quidem repellendus saepe sapiente, sequi temporibus veniam veritatis vero voluptas.</span><span>Assumenda beatae consequatur cupiditate deserunt dicta dolorem eligendi exercitationem illo in laboriosam minima minus molestias, nihil, nostrum optio perferendis provident quae quasi quis sed similique sit sunt vitae voluptate voluptatibus.</span><span>Ab alias aliquam animi aperiam at, autem beatae cumque distinctio dolores dolorum explicabo iure laboriosam magni maiores, minima natus nisi non officiis quam quod rerum saepe ullam vero voluptas voluptatem?</span></p>
//                             </Tab.Pane>
//                             <Tab.Pane eventKey="fourth">
//                                 <img className="d-block w-100" src={cameraImg}/>
//                                 <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad amet architecto cum doloribus eligendi et, exercitationem fuga illum in ipsam laborum nesciunt nostrum possimus quo saepe soluta temporibus voluptate!</span><span>Accusamus amet architecto consequatur dolorum et eum id illo ipsum labore necessitatibus nesciunt numquam odio officiis omnis perferendis, provident quae quidem repellendus saepe sapiente, sequi temporibus veniam veritatis vero voluptas.</span><span>Assumenda beatae consequatur cupiditate deserunt dicta dolorem eligendi exercitationem illo in laboriosam minima minus molestias, nihil, nostrum optio perferendis provident quae quasi quis sed similique sit sunt vitae voluptate voluptatibus.</span><span>Ab alias aliquam animi aperiam at, autem beatae cumque distinctio dolores dolorum explicabo iure laboriosam magni maiores, minima natus nisi non officiis quam quod rerum saepe ullam vero voluptas voluptatem?</span></p>
//                             </Tab.Pane>
//                             <Tab.Pane eventKey="fifth">
//                                 <img className="d-block w-100" src={cameraImg}/>
//                                 <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad amet architecto cum doloribus eligendi et, exercitationem fuga illum in ipsam laborum nesciunt nostrum possimus quo saepe soluta temporibus voluptate!</span><span>Accusamus amet architecto consequatur dolorum et eum id illo ipsum labore necessitatibus nesciunt numquam odio officiis omnis perferendis, provident quae quidem repellendus saepe sapiente, sequi temporibus veniam veritatis vero voluptas.</span><span>Assumenda beatae consequatur cupiditate deserunt dicta dolorem eligendi exercitationem illo in laboriosam minima minus molestias, nihil, nostrum optio perferendis provident quae quasi quis sed similique sit sunt vitae voluptate voluptatibus.</span><span>Ab alias aliquam animi aperiam at, autem beatae cumque distinctio dolores dolorum explicabo iure laboriosam magni maiores, minima natus nisi non officiis quam quod rerum saepe ullam vero voluptas voluptatem?</span></p>
//                             </Tab.Pane>
//                         </Tab.Content>
//                     </Col>
//                 </Row>
//
//             </Tab.Container>
//             </div>
//             </div>
//         </Container>
//     );
// }