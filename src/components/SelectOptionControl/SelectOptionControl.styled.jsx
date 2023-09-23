import styled from "styled-components";

export const OptionControl = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 24px;
    width: 335px;
    height:54px;
    background-color: #161F37;
    border-radius: 200px;
    cursor: pointer;

    @media screen and (max-width: 375px){
        width:100%;
    }

    @media screen and (min-width: 768px) {
        width: 200px;
        height:56px;
        padding: 14px 24px;
    }
`;

export const OptionControlValue = styled.p`
    color: #F3F3F3;
    font-size: 14px;
    line-height: 1.29;
    text-align: center;

    @media screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 1.56;
    }
`;

