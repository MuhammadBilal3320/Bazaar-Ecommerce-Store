import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleRight } from "react-icons/fa";

const modemItem = [
    {
        image: "images/blockImage/5.png",
        title: "Black Quality Jacket - Men ",
        price: 2000
    },
    {
        image: "images/blockImage/5.png",
        title: "Black Quality Jacket - Men ",
        price: 2000
    },
    {
        image: "images/blockImage/5.png",
        title: "Black Quality Jacket - Men ",
        price: 2000
    },
    {
        image: "images/blockImage/5.png",
        title: "Black Quality Jacket - Men ",
        price: 2000
    },
    {
        image: "images/blockImage/5.png",
        title: "Black Quality Jacket - Men ",
        price: 2000
    },
    {
        image: "images/blockImage/5.png",
        title: "Black Quality Jacket - Men ",
        price: 2000
    },
];

const Modem = () => {
    // Slider settings
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <div className="mainContainer perfectCenter">
            <div className="container">
                <div className="containerTop">
                    <h1 className='blockTitle'>MODEMS</h1>
                    <div className="viewAll perfectCenter activeButton cursorPointer">View All <FaAngleRight /></div>
                </div>

                <Slider {...settings}>
                    {
                        modemItem.map((item, key) => (
                            <div key={key} className="cardContainer">
                                <div className="card activeCard cursorPointer">
                                    <img src={item.image} alt={item.title} />
                                    <div className="cardDetails">
                                        <div className="cardTitle">{item.title}</div>
                                        <div className="cardPrice">Rs.{item.price}</div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    );
}

export default Modem;
