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
                        <strong>KATERINA DOROGUSH</strong>
                    </span>
                </div>
                <div className="about_img py-md-5 d-flex">
                    <img
                    className="photo_about img-fluid"
                    src={photo_about_me}
                    alt="photo_Katerina"
                />
                <div className="text-title pl-md-5 pt-sm-4">
                    <p className='indent'>Я профессиональный фотограф. Фотография - это не просто хобби для меня. Она была в моей жизни всегда, запечатление момента помогает мне раскрыть самые искренние эмоции человека, а также обратить внимание на индивидуальные черты.
                    Я работаю с широким спектром направлений: портретная фотосъёмка, индивидуальная фотосъёмка, будуарная фотосъёмка, семейная фотосъёмка, love story и свадебная съёмка. Использую топовую технику Canon.
                    </p>
                    <p className='indent'>Всегда стремлюсь улучшать свои навыки, обучаюсь, посещаю мастер-классы, ищу новые приёмы.
                        На съёмках стараюсь создать непринуждённую атмосферу, чтобы вы чувствовали себя естественно перед камерой и получали удовольствие от съёмки.
                        Что касается организацией фотосъёмки, принимаю во внимание личные пожелания и помогаю выбрать вам место проведения фотосъёмки, стиль фотосессии и подобрать красивые образы.
                    </p>
                </div>
                </div>
            </div>
        </Container>
    );
}