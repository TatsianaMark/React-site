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
                    <h3> Bring your creativity to life!</h3>
                    <p><span>Буду очень рада помочь сохранить ваши самые красивые, нежные, чувственные и радостные моменты вашей жизни!</span>
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="img-fluid"
                    src={courTwoPhoto}
                    alt="photo"
                />
                <Carousel.Caption>
                    <h3>Change your lens, change your story...</h3>
                    <p><span>Буду очень рада помочь сохранить ваши самые красивые, нежные, чувственные и радостные моменты вашей жизни!</span>
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="img-fluid"
                    src={courThreePhoto}
                    alt="photo"
                />
                <Carousel.Caption>
                    <h3>Your Day is a Love Story…Tell it to the Camera.</h3>
                    <p><span>Буду очень рада помочь сохранить ваши самые красивые, нежные, чувственные и радостные моменты вашей жизни!</span>
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}