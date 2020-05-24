import React from "react";
import { Container } from "react-bootstrap";
import photo_about_me from "../assets/img/photo_about_me.jpg";



export default function About() {
    return (
        <Container>
            <div className="container container_about pt-4 ">
                <div className="title title_about text-center">
                    <h2>Обо мне</h2>
                </div>
                <div className="name name_photogrepher text-center text-dark pt-4">
                    <span>
                        <strong>ЕКАТЕРИНА ДОРОГУШ - ФОТОГРАФ</strong>
                    </span>
                </div>
                <div className="about_img py-md-5 d-flex">
                    <img
                    className="photo_about img-fluid"
                    src={photo_about_me}
                    alt="photo_Katrin"
                />
                <div className="text-title pl-md-5 pt-sm-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam architecto debitis
                        doloremque, dolores eius et, fuga fugiat in iusto nam officiis optio placeat quae quibusdam suscipit
                        tenetur vero, voluptatibus.LoremLorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam architecto debitis
                    doloremque, dolores eius et, fuga fugiat in iusto nam officiis optio placeat quae quibusdam suscipit
                    tenetur vero, voluptatibus.LoremLorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam architecto debitis
                    doloremque, dolores eius et, fuga fugiat in iusto nam officiis optio placeat quae quibusdam suscipit
                    tenetur vero, voluptatibus.Lorem
                </div>
                </div>
            </div>
        </Container>
    );
}