import React from 'react'
import styled from 'styled-components'

const UserProfileBody = () => {
    return (
        <MainContainer>
            <h1 className='ProfileHeading'>My Account</h1>
        </MainContainer>
    )
}

export default UserProfileBody

const MainContainer = styled.main`
    width: 100%;

    .ProfileHeading{
        font-size: 40px;
        background-color: whitesmoke;
        padding: 10px 30px;
        font-weight: 600;
        margin-bottom: 5px;
    }
`;
