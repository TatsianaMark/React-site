import React from "react";
import {Container, CardDeck, Card,Button , Row, Col, Nav, Tab} from "react-bootstrap";
import horizont_first_s from '../assets/img/for_portfolio/see_more_second/horizont_first(3).jpg';
import vertical_first from '../assets/img/for_portfolio/see_more_seventh/vertical_first (2).jpg';
import winter_pho from '../assets/img/for_portfolio/see_more_fifth/winter_pho (1).jpg';
import grey_ph from '../assets/img/for_portfolio/see_more_first/grey_ph (2).jpg';
import loveImg from '../assets/img/for_portfolio/see_more_third/loveImg (2).jpg';
import lightImg from '../assets/img/for_portfolio/see_more_sixth/lightImg (1).jpg';
import white_pho from '../assets/img/for_portfolio/see_more_fourth/white_pho (2).jpg';




export default function Portfolio() {
    return (
        <Container>
            <div className="container container_line">
            </div>
            <div className="container-portfolio py-md-5">
            <h2 className="text-center pt-2 m-4">Портфолио</h2>
            <CardDeck>
                <div className="portfolio-cards">
                    <div className="main main_two_cards d-flex ">
                    <Card>
                        <Card.Img
                            src={grey_ph}
                        />
                    </Card>
                    <Card>
                        <Card.Img
                            src={winter_pho}
                        />
                    </Card>
                    </div>
                    <div className="smaller_cards d-flex pt-4 pb-5">
                        <Card>
                            <Card.Img
                                src={vertical_first}
                            />
                        </Card>
                <Card>
                    <Card.Img
                        src={horizont_first_s}
                    />
                </Card>
                    <Card>
                        <Card.Img
                           src={lightImg}
                        />
                    </Card>
                        <Card>
                            <Card.Img
                                src={loveImg}
                            />
                        </Card>
                    <Card>
                        <Card.Img
                            src={white_pho}
                        />
                    </Card>
                    </div>
                </div>
            </CardDeck>
            </div>
        </Container>

    );
}