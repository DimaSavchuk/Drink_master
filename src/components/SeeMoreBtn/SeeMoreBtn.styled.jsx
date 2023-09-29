import styled from "styled-components";

export const Button = styled.button`
    padding: 14px 40px;
    border: 1px solid var(--border-link-color);
    border-radius: 42px;
    background-color: var(--button-color);

    color: var(--button-hover-color);
    font-size: 14px;
    font-weight: 600;
    line-height: 1.29;
    text-align: center;
    transition:
        color 300ms linear,
        background-color 300ms linear;

    &:hover,
    &:focus {
        color: var(--button-color);
        background-color: var(--button-hover-color);
    }

    @media screen and (max-width: 767px) {
        width: 100%;
    }

    @media (min-width: 768px) {
        padding: 18px 44px;
        font-size: 16px;
        line-height: 1.12;
    }
`;