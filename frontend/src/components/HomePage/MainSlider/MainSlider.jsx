import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './mainSlider.css';


const slideImages = [
    './images/slider/1.jpg',
    './images/slider/2.jpg',
    './images/slider/3.jpg'
];



const MainSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // Changes image every 3 seconds
        pauseOnHover: true,
    };

    return (
        <>
            <div className="mainSliderContainer">
                <div className="subSliderContainer">
                    <Slider {...settings}>
                        {slideImages.map((image, index) => (
                            <div key={index}>
                                <img
                                    className="sliderImage"
                                    src={image}
                                    alt={`Slide ${index + 1}`}
                                    style={{ width: '100%' }}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            
        </>
    );
};

export default MainSlider;
