import React from 'react'
import styled from 'styled-components'

const SmartProduct = () => {
    return (
        <>
            <SmartMainContainer>
                <div className="blockContainerTitle">
                    <h1 className='blockTitle'>SMART PRODUCTS</h1>
                    <p>Explore Our Smart Products.</p>
                </div>

                <div className="blockContainer">
                    <div className="rightContainer">
                        <div className="full activeCard cursorPointer">
                            <img src="./images/rightBanners/1.png" alt="Laptop" />
                            </div>

                        <div className="threeHalf">
                            <div className="firstHalf activeButton cursorPointer"><img src="./images/rightBanners/2.png" alt="Laptop" /></div>
                            <div className="twoHalf">
                                <div className="secondHalf half perfectCenter activeButton cursorPointer"><img src="./images/rightBanners/4.png" alt="Image" /></div>
                                <div className="secondHalf perfectCenter activeButton cursorPointer"><img src="./images/rightBanners/3.png" alt="Image" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </SmartMainContainer>

        </>
    )
}

export default SmartProduct

const SmartMainContainer = styled.div`
    /* .mainBlockContainer{
    background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
    box-shadow: 0 0 6px black;
} */

.blockContainerTitle{
    width: 69%;
    padding: 15px;
    border-radius: 15px;
    margin: 20px auto;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    p{  
        font-size: 20px;
        color: rgb(66, 66, 66);
        margin-left: 20px;
        @media screen and (max-width: 480px) {
            font-size: 15px;
        }
    }
    @media screen and (max-width: 768px) {
        width: 90%;
        margin: 0;
    }
}

.blockContainer {
    display: flex;
    justify-content: center;
    align-items: center;
}

.rightContainer {
    width: 69%;
    height: 400px;
    display: flex;
    gap: 20px;

    @media screen and (max-width: 1400px) {
        height: 300px;
    }

    @media screen and (max-width: 768px) {
        width: 88%;
    }

    @media screen and (max-width: 480px) {
        height: 100%;
        width: 98%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }

}

.full {
    position: relative;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: #fa1924e7;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0px 0px 3px black;

    /* Ensures that any overflowing part of the image is hidden */
    @media screen and (max-width: 480px) {
        height: 200px;
        width: 98%;
    }
}


.full img {
    width: 100%;
    height: 95%;
    object-fit: contain;
    border-radius: 15px;
    
}

.threeHalf {
    height: 100%;
    width: 50%;

    @media screen and (max-width: 480px) {
        display: flex;
        gap: 10px;
        width: 98%;
    }
}

.firstHalf {
    width: 100%;
    height: 48%;
    background-image: linear-gradient(120deg, #bbf337e5 0%, #58eb6ce0 100%);
    background-blend-mode: multiply,multiply;
    border-radius: 20px;
    box-shadow: 0px 0px 3px black;

}

.firstHalf img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.twoHalf {
    margin-top: 20px;
    height: 48%;
    width: 100%;
    display: flex;
    gap: 20px;

    @media screen and (max-width: 480px) {
        margin-top: 0;
        flex-direction: column;
        gap: 5px;
        width: 98%;
    }
}

.twoHalf img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 15px;

    @media screen and (max-width: 480px) {
        width: 53%;
    }
}



.half {
    background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
    box-shadow: 0px 0px 3px black;

}

.secondHalf {
    width: 50%;
    background-color: #f0bf2be7;
    border-radius: 20px;
    box-shadow: 0px 0px 3px black;

    @media screen and (max-width: 480px) {
        width: 98%;
    }
}


`
