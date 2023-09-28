import { styled } from 'styled-components';

export const PopDrinksWrapper = styled.div`
  margin-bottom: 28px;

  h3 {
    margin-bottom: 28px;
  }

  h6 {
    margin-bottom: 8px;

    font-size: 16px;
    font-weight: 500;
    line-height: calc(22 / 16);
    color: #f3f3f3;
  }

  ul {
    display: flex;
    flex-direction: column;
  }

  ul > li:not(:last-of-type) {
    margin-bottom: 24px;
  }

  li {
    display: flex;
  }

  li > img {
    margin-right: 14px;
  }

  p {
    max-height: 62px;
    color: #f3f3f380;

    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;
