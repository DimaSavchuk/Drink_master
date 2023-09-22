import styled from "styled-components";


export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PaginationButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 30px;
  margin: 0 48px;
  color: rgba(243, 243, 243, 0.3);
`;

export const PaginationNumber = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  margin: 0 24px;
  color: #f3f3f3;
  ${(props) =>
    props.active &&
    `padding: 7px 11px;
        border-radius: 50%;
    background-color: rgba(64, 112, 205, 0.5);
    `}
`;
