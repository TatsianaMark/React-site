import React from "react";
import { Container } from "react-bootstrap";
import photo_about from "../assets/img/photo_about.jpg";


export default function About() {
    return (
        <Container>
            <div className="container container_about py-2 ">
                <div className=" text text_about text-center ">
                    <h2>Обо мне</h2>
                </div>
                <div className="about py-3 d-flex ">
                    <img
                    className="w-50"
                    src={photo_about}
                    alt="photo_Katrin"
                />
                <div className="text-title ml-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam architecto debitis
                        doloremque, dolores eius et, fuga fugiat in iusto nam officiis optio placeat quae quibusdam suscipit
                        tenetur vero, voluptatibus.
                </div>
                </div>
            </div>
        </Container>
    );
}