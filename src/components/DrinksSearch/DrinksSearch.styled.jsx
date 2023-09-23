import styled from 'styled-components';

export const SearchWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-top: 40px;


    @media screen and (min-width: 768px) {
        margin-top: 46px;
        flex-direction: row;
        gap: 8px;
    }

    @media screen and (min-width: 1440px) {
       margin-top: 80px;
    }
`;

export const Form = styled.form`
    position: relative;
    display: inline-block
`; 

export const Button = styled.button`
    position: absolute;
    background-color: transparent;
    border:none;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom:18px;
    right:24px;
`;

export const Input = styled.input`
    padding:0 24px;
    width: 335px;
    height:54px;
    border-radius: 200px;
    background-color: transparent;
    border:1px solid rgba(243, 243, 243, 0.20);
    opacity: 0.8;
    font-family: 'Manrope';
    font-size: 17px;
    line-height: 1.56;
    color: #f3f3f3;
    outline: none;
    transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

    @media screen and (max-width: 375px){
        width:100%;
    }

    @media screen and (min-width: 768px) {
        width: 264px;
        height:56px;
    }

    &::placeholder{
        color:#f3f3f3
    }

    &:hover,
    &:focus,
    &:active{
        border: 1px solid rgba(243, 243, 243);
    }
`;

export const SearchIconWrap = styled.svg`
    width: 20px;
    height: 20px;
`;