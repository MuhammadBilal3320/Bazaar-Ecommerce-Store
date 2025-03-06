import React from 'react'
import styled from 'styled-components'
import SingleReviewCard from './SingleReviewCard'


const CustomerReviews = () => {

    return (
        <CustomerReviewsMainContainer>
            <div className="container">
                <hr />
                <h1>Customer Reviews</h1>

                <div className="ReviewCard">
                    <SingleReviewCard/>
                </div>
            </div>
        </CustomerReviewsMainContainer>
    )
}

export default CustomerReviews

const CustomerReviewsMainContainer = styled.section`

    width: 100%;
    display: flex;
    justify-content: center;
    
    .container{
        margin: 40px 0;
        width: 90%;

        h1{
            font-size: 30px;
            text-align: center;
            margin-top: 20px;
        }  
    }

    .ReviewCard{
        margin-top: 50px;
        padding: 5px;
    }
`
