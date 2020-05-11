import React, {useState} from "react";
import Carousel from 'react-bootstrap/Carousel';
import cameraImg from '../assets/img/cameraImg.jpg';
import cameraTwo from '../assets/img/camera-581126_1920.jpg';
import cameraThree from '../assets/img/camera-711040_1920.jpg';
import courOnePhoto from '../assets/img/courOnePhoto.jpg'
import courTwoPhoto from '../assets/img/courTwoPhoto.jpg'
import courThreePhoto from '../assets/img/courThreePhoto.jpg'


export default function CarouselBox() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                {/*<img*/}
                    {/*className="d-block img-fluid mw-100 h-auto"*/}
                    {/*src={courOne}*/}
                    {/*alt="photo"*/}
                {/*/>*/}
                <img
                    className="img-fluid"
                    // width={810}
                    // height={500}
                    src={courOnePhoto}
                    alt="photo"
                />
                <Carousel.Caption>
                    <h3> Best photographer in the world!</h3>
                    <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut doloremque eveniet, excepturi fuga fugit iusto, nam, necessitatibus non optio quasi sequi veniam vitae voluptate! Esse libero modi quae quas quos</span>
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="img-fluid"
                    // width={810}
                    // height={500}
                    src={courTwoPhoto}
                    alt="photo"
                />
                <Carousel.Caption>
                    <h3> Best photographer in the world!</h3>
                    <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut doloremque eveniet, excepturi fuga fugit iusto, nam, necessitatibus non optio quasi sequi veniam vitae voluptate! Esse libero modi quae quas quos?</span>
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="img-fluid"
                    // width={810}
                    // height={500}
                    src={courThreePhoto}
                    alt="photo"
                />
                <Carousel.Caption>
                    <h3> Best photographer in the world!</h3>
                    <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut doloremque eveniet, excepturi fuga fugit iusto, nam, necessitatibus non optio quasi sequi veniam vitae voluptate! Esse libero modi quae quas quos?</span>
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}