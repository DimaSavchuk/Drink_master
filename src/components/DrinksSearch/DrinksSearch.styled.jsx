import styled from 'styled-components';

export const Select = styled.select`
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;

    padding: 18px 24px;

    font-family: inherit;
    font-size: 17px;
    line-height: 1.56; 
    color: #F3F3F3;

    background-color: #161F37;
    border-radius: 200px;
    border: none;

    cursor: pointer;
`;

export const Form = styled.form`
    margin-top: 80px;
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
    transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

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