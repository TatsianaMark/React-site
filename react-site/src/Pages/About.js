import React from "react";
import { Container } from "react-bootstrap";
import cameraImg from "../assets/img/cameraImg.jpg";
import Carousel from "../Components/CarouselBox";

export default function About() {
    return (
        <Container>
            <h2>Обо мне</h2>
            <img
                className="d-block w-100"
                width={300}
                height={300}
                src={cameraImg}
                alt="photo_Katrin"
            />
            <p>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam architecto debitis
                    doloremque, dolores eius et, fuga fugiat in iusto nam officiis optio placeat quae quibusdam suscipit
                    tenetur vero, voluptatibus.
                </div>
                </p>
        </Container>
    );
}