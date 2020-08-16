import React, {useState} from "react";
import Carousel from 'react-bootstrap/Carousel';
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
                <img
                    className="img-fluid"
                    src={courOnePhoto}
                    alt="photo"
                />
                <Carousel.Caption>
                    <div className="main_slogan"> Bring your creativity to life!</div>
                    <div className="slogan">Сохраню ваши самые красивые, нежные, чувственные и радостные моменты вашей жизни!</div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="img-fluid"
                    src={courTwoPhoto}
                    alt="photo"
                />
                <Carousel.Caption>
                    <div className="main_slogan">Change your lens, change your story...</div>
                    <div className="slogan">Сохраню ваши самые красивые, нежные, чувственные и радостные моменты вашей жизни!</div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="img-fluid"
                    src={courThreePhoto}
                    alt="photo"
                />
                <Carousel.Caption>
                    <div className="main_slogan">Your Day is a Love Story…Tell it to the Camera.</div>
                    <div className="slogan">Сохраню ваши самые красивые, нежные, чувственные и радостные моменты вашей жизни!</div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}