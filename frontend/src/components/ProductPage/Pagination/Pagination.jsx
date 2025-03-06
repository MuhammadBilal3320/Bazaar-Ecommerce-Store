import React from 'react'
import styled from 'styled-components'
import PaginationController from 'react-js-pagination'


const Pagination = ({perPageProduct, productCount, currentPage, setCurrentPage}) => {
    return (
        <PaginationMainContainer>
            <div className="container">
                
                <PaginationController 
                onChange={(e)=>{setCurrentPage(e);  window.scrollTo(0, 0);}}
                activePage={currentPage}
                itemsCountPerPage={perPageProduct}
                totalItemsCount={productCount}
                nextPageText={"Next >"}
                prevPageText={"< Previous"}
                firstPageText={"First"}
                lastPageText={"Last"}
                itemClass='page-item'
                linkClass='page-link'
                activeClass='page-item-active'
                activeLinkClass='page-link-active'
                />

            </div>
        </PaginationMainContainer>
    )
}

export default Pagination

const PaginationMainContainer = styled.section`
    width: 100%;
    display: flex;
    justify-content: right;
    align-items: center;
    margin: 50px 0;

    @media screen and (max-width: 768px) {
        justify-content: center;
    }

    .container{
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        @media screen and (max-width: 768px) {
        width: 100%;
    }
    }

    .pagination{
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        border-radius: 8px;
        box-shadow: 0px 0px 3px #303030d3;
        
    }

    .page-item{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 15px;
        cursor: pointer;
        @media screen and (max-width: 768px) {
        padding: 5px 8px;
    }
    @media screen and (max-width: 480px) {
        padding: 5px;
    }
    }

    .page-link{
        text-decoration: none;
        color: black;
        font-weight: 500;
        padding: 0 5px;
    }

.page-item-active{
    background-color: #2c2c2cc1;
}

.page-link-active{
    color: white;
}

`
