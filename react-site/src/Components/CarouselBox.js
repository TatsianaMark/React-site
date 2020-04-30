import React, {useState} from "react";
import Carousel from 'react-bootstrap/Carousel';
import cameraImg from '../assets/img/cameraImg.jpg';
import cameraTwo from '../assets/img/camera-581126_1920.jpg';
import cameraThree from '../assets/img/camera-711040_1920.jpg';


export default function CarouselBox() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    width={810}
                    height={500}
                    src={cameraImg}
                    alt="photo"
                />
                <Carousel.Caption>
                    <h3> Best photographer in the world!</h3>
                    <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut doloremque eveniet, excepturi fuga fugit iusto, nam, necessitatibus non optio quasi sequi veniam vitae voluptate! Esse libero modi quae quas quos?</span><span>Architecto cum nulla quas. Architecto beatae debitis dolore eligendi, et fuga inventore iusto natus neque non nulla obcaecati optio praesentium quibusdam quisquam sint totam! Dolore illo molestias mollitia porro unde!</span>
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    width={810}
                    height={500}
                    src={cameraTwo}
                    alt="photo"
                />
                <Carousel.Caption>
                    <h3> Best photographer in the world!</h3>
                    <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut doloremque eveniet, excepturi fuga fugit iusto, nam, necessitatibus non optio quasi sequi veniam vitae voluptate! Esse libero modi quae quas quos?</span><span>Architecto cum nulla quas. Architecto beatae debitis dolore eligendi, et fuga inventore iusto natus neque non nulla obcaecati optio praesentium quibusdam quisquam sint totam! Dolore illo molestias mollitia porro unde!</span>
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    width={810}
                    height={500}
                    src={cameraThree}
                    alt="photo"
                />
                <Carousel.Caption>
                    <h3> Best photographer in the world!</h3>
                    <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut doloremque eveniet, excepturi fuga fugit iusto, nam, necessitatibus non optio quasi sequi veniam vitae voluptate! Esse libero modi quae quas quos?</span><span>Architecto cum nulla quas. Architecto beatae debitis dolore eligendi, et fuga inventore iusto natus neque non nulla obcaecati optio praesentium quibusdam quisquam sint totam! Dolore illo molestias mollitia porro unde!</span>
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}