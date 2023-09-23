import styled from "styled-components";

export const ArrowWrapper = styled.svg`
    width: 20px;
    height: 20px;
    transition: all .2s ease;
    transform: ${({ open }) => open ? 'rotate(0deg)' : 'rotate(180deg)'};
`;