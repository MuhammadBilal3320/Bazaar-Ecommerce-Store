import React from 'react'
import styled from 'styled-components'


const ContactMain = () => {
    return (
        <>
            <MainContainer>

                <div className="container">
                    
                    <div className="leftContainer">
                        <h1>Contact Us</h1>
                        <div className="contactParagraph">
                            <h3>Get in touch with us</h3>
                            <p>Have questions or need assistance? We're here to help! Reach out to us, and we'll get back to you as soon as possible.</p>
                        </div>
                    </div>

                    <div className="rightContainer">
                        <form>
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email" />
                            <input type="text" placeholder="Subject" />
                            <textarea placeholder="Message" rows={5}></textarea>
                            <button>Send</button>
                        </form>
                    </div>
                </div>
            </MainContainer>

        </>
    )
}

export default ContactMain

const MainContainer = styled.main`
height: 88vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;


.container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    @media screen and (max-width: 1200px) {
        width: 90%;
    }
    @media screen and (max-width: 700px) {
        width: 98%;
    }
    @media screen and (max-width: 550px) {
        flex-direction: column;
    }
}

.leftContainer{
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    @media screen and (max-width: 550px) {
        width: 100%;
        align-items: center;   
        text-align: center;
    }
}

h1{
    font-size: 3rem;
    color: #333;
}

.contactParagraph{
    margin-top: 50px;
}

h3{
    font-size: 1rem;
    color: #333;
}

p{
    font-size: 1rem;
    color: #333;
}

.rightContainer{
    width: 50%;
    display: flex;
    justify-content: end;
    align-items: center;
    height: 100%;
    @media screen and (max-width: 550px) {
        width: 100%;
        justify-content: center;
    }
}

form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
    box-shadow: 0px 0px 2px #333;
    padding: 30px 15px;
    border-radius: 10px;
    @media screen and (max-width: 1300px) {
        justify-content: end;
        width: 90%;
    }
    @media screen and (max-width: 1500px) {
        justify-content: end;
        width: 80%;
    }
}

input{
    padding: 10px;
    margin: 10px 0;
    width: 100%;
    background-color: rgb(238, 238, 238);
    border: none;
    border-radius: 5px;
}

textarea{
    padding: 10px;
    margin: 10px 0;
    width: 100%;
    background-color: rgb(238, 238, 238);
    border: none;
    border-radius: 5px;
    resize: none;
}

button{
    padding: 8px;
    margin: 10px 0;
    width: 100%;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s;
    font-size: medium;
}

button:hover{
    background-color: #555;
}

button:focus{
    transform: scale(0.98);
    transition: all 0.3s;
}



`;