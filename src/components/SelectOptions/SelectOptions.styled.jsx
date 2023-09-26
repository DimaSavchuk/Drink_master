import styled from "styled-components";

export const OptionsContainer = styled.ul`
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    width  : 335px;
    max-height: ${({ height }) => height? height : ''};
    overflow-y: ${({ height }) => height ? 'scroll' : 'visible'};
    padding: 18px 24px;
    background-color: #161F37;
    border-radius: 20px;

    &::-webkit-scrollbar {
        width: 24px;
        height: 110px;
    }

    &::-webkit-scrollbar-thumb {
        border: 8px solid transparent;
        background-clip: padding-box;
        border-radius: 20px;
        background-color: #434D67;
    }

    &::-webkit-scrollbar-track {
        margin-block: 8px;   
    }

    @media screen and (max-width: 375px){
        width:100%;
    }

    @media screen and (min-width: 768px) {
        width : 200px;
        padding: 14px 24px;
    }
`;


export const Option = styled.button`
    padding: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    border:none;
    color: #F3F3F3;
    font-family: 'Manrope';
    font-size: 14px;
    line-height: 1.29;
    text-align: start;

    &:hover,
    &:focus,
    &:active{
        border-bottom: 1px solid rgba(243, 243, 243, 0.50);
    }  

    @media screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 1.56;
    }
`;