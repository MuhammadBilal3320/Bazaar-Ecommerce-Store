import React from "react";
import styled from "styled-components";

const TopBanner = () => {
    return (
        <TopBannerMainContainer>
            <div className="container">
                <h1>EXPLORE ALL PRODUCTS</h1>
                <div className="bannerImage">
                    <img src="/images/productPage/1.png" alt="This is image" />
                </div>
            </div>
        </TopBannerMainContainer>
    );
};

export default TopBanner;

const TopBannerMainContainer = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: aliceblue;

    @media screen and (max-width: 480px) {
        height: 220px;
        }

    .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;

    @media screen and (max-width: 480px) {
        flex-direction: column-reverse;
        width: 100%;
        padding: 10px;
        font-size: 12px;
        }
    }

    .bannerImage {
    height: 200px;

    img {
        width: 100%;
        height: 100%;
        border-radius: 8px;
        object-fit: contain;
        }

        @media screen and (max-width: 480px) {
        height: 180px;
        }
    }
`;
