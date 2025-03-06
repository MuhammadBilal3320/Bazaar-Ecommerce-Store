import React, { useEffect } from 'react'
import { FaUserLarge } from "react-icons/fa6";
import styled from 'styled-components';
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingleProductDetails } from '../../../actions/ProductAction';


const SingleReviewCard = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const { loading, error, product } = useSelector(state => state.singleProduct);

    useEffect(() => {
        dispatch(getSingleProductDetails(id));

    }, [dispatch, id])

    return (
        <SingleReviewCardMainContainer>
            {product?.reviews?.length === 0 ? (
                <div className="noReviews">No Review</div>
            ) : (
                product?.reviews?.map((item, index) => (
                    <div className="container" key={index}>
                        <div className="imageName">
                            <div className="image">
                                <FaUserLarge />
                            </div>
                            <div className="name">{item.name}</div>
                        </div>

                        <div className="customerReview">
                            <ReactStars
                                value={item.rating}
                                size={20}
                                activeColor="#f1c40f"
                                edit={false}
                                isHalf={true}
                            />
                        </div>

                        <div className="customerMessage">{item.comment}</div>
                        <div className="reviewDate">
                            <b>{new Date(item.reviewDateTime).toLocaleString()}</b>
                        </div>
                    </div>
                ))
            )}
        </SingleReviewCardMainContainer>

    )
}

export default SingleReviewCard

const SingleReviewCardMainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    .noReviews{
        font-size: larger;
        font-weight: 600;
    }

    .container{
        margin: 20px 0;
    padding: 15px;
    border-radius: 20px;
    background-color: whitesmoke;
    box-shadow: 0px 0px 4px rgb(141, 141, 141);
    }

    .imageName{
        display: flex;
        gap: 8px;
        align-items: center;
    }

    .image{
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background-color: #ccc;
        box-shadow: 0px 0px 3px black;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .name{
        color: #000000e6;
        font-size: 18px;
        font-weight: 600;
    }

    .customerReview{
        display: flex;
        align-items: center;
        gap: 4px;
        margin: 2px 0px;
        margin-left: 10px;
        font-size: 20px;
        font-weight: 600;
    }

    .reviewDate{
        text-align: end;
        > b{
            text-align: end;
        font-size: small;
        font-weight: 600;
        color: #616161e2;
        }
    }
`;
