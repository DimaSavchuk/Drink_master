import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

export const Paginate = styled(ReactPaginate).attrs({activeClassName: 'active', })`
    padding: 14px 0;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:40px;

    @media screen and (min-width: 768px) {
        padding: 14px 24px;
        margin-top:80px;
    }

    li{
        width:27px;
        height:27px;
        &:not(:nth-child(-n+2))
        {
            margin-left:24px;
        }
    }

    li a {
        display:flex;
        justify-content:center;
        align-items:center;
        width:100%;
        height:100%;
        border-radius: 50%;
        font-size: 12px;
        font-weight: 500;
        line-height: 1.33;
        color:#f3f3f3;
        cursor: pointer;
    }

    li.previous{
        margin-right:48px;

        @media screen and (min-width: 768px) {
            margin-right:40px;
        }
    }

    li.next{
        margin-left:48px;

        @media screen and (min-width: 768px) {
            margin-left:40px;
        }
    }

    li.previous a,
    li.next a,
    li.break a {
        display: flex;
        justify-content: center;
        align-items:center;
    }

    li.active a{
        background-color:rgba(64, 112, 205, 0.50);
    }


    li.disabled a {
        color: grey;
    }

    li.disable,
    li.disabled a {
        cursor: default;
    }
`;