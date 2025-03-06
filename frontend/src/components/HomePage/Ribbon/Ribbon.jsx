import React from 'react'
import { MdLocalShipping } from "react-icons/md";
import { FaRegHandshake } from "react-icons/fa";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { IoChatbubblesSharp } from "react-icons/io5";
import styled from 'styled-components';

const ribbonItems = [
    {
        icon: <MdLocalShipping />,
        title: "Free Shipping",
        description: "on orders over $99"
    },
    {
        icon: <FaRegHandshake />,
        title: "Secure Payment",
        description: "We Ensure Secure Payment"
    },
    {
        icon: <FaHandHoldingDollar />,
        title: "100% Money Back",
        description: "30 Days Return Policy"
    },
    {
        icon: <IoChatbubblesSharp />,
        title: "Online Support",
        description: "24/7 Support"
    }
]

const Ribbon = () => {
    return (
        <RibbonContainer>
            <div className="ribbon">
                {
                    ribbonItems.map((item, index) => (
                        <div key={index} className="ribbonItem perfectCenter">
                            <div className="ribbonIcon perfectCenter">{item.icon}</div>
                            <div className="title-Description">
                                <div className="ribbonTitle">{item.title}</div>
                                <div className="ribbonDescription">{item.description}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </RibbonContainer>
    )
}

export default Ribbon

const RibbonContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 50px 0;
    padding: 10px 0;
    background-color: whitesmoke;
    box-shadow: 0 0 3px black;
    flex-wrap: wrap;


    .ribbon {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    flex-wrap: wrap;
}

.ribbonItem {
    display: flex;
    align-items: center;
    margin: 0px 15px; /* Adjust margin for better spacing */
    gap: 10px;
    text-align: center;
}

.ribbonIcon {
    font-size: 40px;
    margin-bottom: 5px;
}

.ribbonTitle {
    font-size: medium;
    font-weight: 700;
    text-align: left;
}

.ribbonDescription {
    font-size: small;
    text-align: left;
    color: gray;
}

/* Media Queries */
@media (max-width: 768px) {
    .ribbon {
        width: 90%;
        flex-direction: column;
    }

    .ribbonIcon {
        font-size: 35px;
    }

    .ribbonTitle {
        font-size: large;
    }

    .ribbonDescription {
        font-size: small;
    }
}

@media (max-width: 480px) {
    .ribbonContainer {
        padding: 20px;
        margin-top: 30px;
    }

    .ribbonItem {
        margin: 8px 10px;
    }

    .ribbonIcon {
        font-size: 30px;
    }

    .ribbonTitle {
        font-size: medium;
    }

    .ribbonDescription {
        font-size: x-small;
    }
}


`
