import React from 'react'
import styled from 'styled-components'

// Import Icons
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoInstagramAlt } from "react-icons/bi";

const Footer = () => {
    return (
        <FooterMainContainer>
            <TopPart>
                <h3>FOLLOW US ON:</h3>
                <div className="socialMedia">
                    <div className="socailItem activeCard"><FaFacebookF /></div>
                    <div className="socailItem activeCard"><FaYoutube /></div>
                    <div className="socailItem activeCard"><FaXTwitter /></div>
                    <div className="socailItem activeCard"><BiLogoInstagramAlt /></div>
                </div>
            </TopPart>

            <MiddlePart>
                <div className="footerLinks">
                    <ul className="columns">
                        <h3>Privacy Policy</h3>
                        <li><a href="#">Return & Exchange</a></li>
                        <li><a href="#">Payment Terms</a></li>
                        <li><a href="#">Delivery Terms</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>

                    <ul className="columns">
                        <h3>Get Involved</h3>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Our Vision</a></li>
                        <li><a href="#">Orders & Shipping</a></li>
                        <li><a href="#">Office Supplies</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Customer Service</a></li>
                    </ul>

                    <ul className="columns">
                        <h3>Quick Links</h3>
                        <li><a href="#">Games</a></li>
                        <li><a href="#">Laptop</a></li>
                        <li><a href="#">Earbuds</a></li>
                        <li><a href="#">Phones</a></li>
                        <li><a href="#">Books</a></li>
                        <li><a href="#">Bags</a></li>
                    </ul>

                    <ul className="columns">
                        <h3>Customer Care</h3>
                        <li><a href="#">My Account</a></li>
                        <li><a href="#">Store Location</a></li>
                        <li><a href="#">Customer Service</a></li>
                        <li><a href="#">Product Support</a></li>
                        <li><a href="#">Return/Exchange</a></li>
                        <li><a href="#">FAQs</a></li>
                    </ul>
                </div>
            </MiddlePart>

            <BottomPart>
                <p>2024 Bazaar. All rights reserved.</p>
            </BottomPart>
        </FooterMainContainer>
    )
}

export default Footer

const FooterMainContainer = styled.footer`
    box-shadow: 0px 0px 10px black;
    background-color: rgb(60, 60, 60);
    color: #fff;
    text-align: center;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const TopPart = styled.div`

    padding: 20px;

    .socialMedia{
        display: flex;
        justify-content: space-around;
    }

    .socailItem{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 25px;
        padding: 10px;
        margin: 0 8px;
        border-radius: 50%;
        &:hover{
            background-color: whitesmoke;
            box-shadow: 0px 0px 10px black;
            color: black;
            cursor: pointer;
        }
    }
`

const MiddlePart = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 60px 0;

    .footerLinks{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 90%;
        @media screen and (max-width:720px) {
            width: 98%;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 20px;
        }
    }

    .columns li a{
        color: whitesmoke;
    }

    .columns h3{
        text-align: left;
    }

    .columns li{
        list-style: none;
        text-align: left;
    }
`

const BottomPart = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: rgb(50, 50, 50);
    box-shadow: 0px 0px 5px black;
    font-size: 14px;
`
