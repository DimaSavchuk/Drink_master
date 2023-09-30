import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CommonContainer } from '../GlobalStyles/CommonContainer.styled';

// import startMobile1x from '../../assets/start/start_mobile@1x.jpg';
// import startMobile2x from '../../assets/start/start_mobile@2x.jpg';

// import startTublet1x from '../../assets/start/start_tablet@1x.jpg';
// import startTublet2x from '../../assets/start/start_tablet@2x.jpg';

// import startPC1x from '../../assets/start/start@1x.jpg';
// import startPC2x from '../../assets/start/start@2x.jpg';

import start1 from '../../assets/start/start-1.jpg';
import start2 from '../../assets/start/start-2.jpg';

import starttab1 from '../../assets/start/start-tab-1.jpg';
import starttab2 from '../../assets/start/start-tab-2.jpg';

import startmob1 from '../../assets/start/mob-1.jpg';
import startmob2 from '../../assets/start/mob-2.jpg';
import startEllipseLeft from '../../assets/start/start-ellipse-left.svg';
import startEllipseRight from '../../assets/start/start-ellipse-right.svg';
import startEllipseLeftTab from '../../assets/start/tab-elipse-left.svg';
import startEllipseRightTab from '../../assets/start/tab-elipse-right.svg';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  max-width: 100vw;
  height: 100vh;

  background: url(${startEllipseLeftTab}), url(${startEllipseRightTab}),
    url(${startmob1});
  background-repeat: no-repeat;
  background-size: 100%, 40%, auto;
  background-position:
    top left,
    bottom right,
    center right -280px;
  background-color: #0a090f;

  @media (max-width: 767.98px) and (min-device-pixel-ratio: 2),
    (max-width: 767.98px) and (-webkit-min-device-pixel-ratio: 2),
    (max-width: 767.98px) and (min-resolution: 192dpi),
    (max-width: 767.98px) and (min-resolution: 2dppx) {
    background: url(${startEllipseLeftTab}), url(${startEllipseRightTab}),
      url(${startmob2});
    background-repeat: no-repeat;
    background-size: 100%, 40%, 150%;
    background-position:
      top left,
      bottom right,
      center right 140%;
    background-color: #0a090f;
  }

  @media (min-width: 768px) {
    background: url(${startEllipseLeftTab}), url(${startEllipseRightTab}),
      url(${starttab1});
    background-repeat: no-repeat;
    background-size: 70%, 30%, 80%;
    background-position:
      top left,
      bottom right,
      center right -140%;
    background-color: #0a090f;
  }
  @media (min-width: 768px) and (min-device-pixel-ratio: 2),
    (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 768px) and (min-resolution: 192dpi),
    (min-width: 768px) and (min-resolution: 2dppx) {
    background: url(${startEllipseLeftTab}), url(${startEllipseRightTab}),
      url(${starttab2});
    background-repeat: no-repeat;
    background-size: 70%, 30%, 56%;
    background-position:
      top left,
      bottom right,
      center right;
    background-color: #0a090f;
  }
  @media (min-width: 1440px) {
    background: url(${startEllipseLeft}), url(${startEllipseRight}),
      url(${start1});
    background-repeat: no-repeat;
    background-size: 50%, 30%, 45%;
    background-position:
      top left,
      bottom right,
      right;
    background-color: #07060b;
  }
  @media (min-width: 1440px) and (min-device-pixel-ratio: 2),
    (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 1440px) and (min-resolution: 192dpi),
    (min-width: 1440px) and (min-resolution: 2dppx) {
    background: url(${startEllipseLeft}), url(${startEllipseRight}),
      url(${start2});
    background-repeat: no-repeat;
    background-size: 50%, 30%, 45%;
    background-position:
      top left,
      bottom right,
      center right;
    background-color: #07060b;
  }
`;


export const Container = styled(CommonContainer)`
  @media (min-width: 375px) {
    width: 375px;
    /* margin: 0 auto; */
  }

  @media (min-width: 768px) {
    width: 768px;
  }

  @media (min-width: 1440px) {
    width: 1440px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 400px;
  }
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 500;
  letter-spacing: -0.02;
  line-height: 1.14;
  color: #fafafa;
  margin-bottom: 28px;

  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
  }
`;

export const StyledLink = styled(Link)`
  margin-left: auto;
  margin-right: auto;
  text-decoration: underline;
  color: #f3f3f3;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;

  cursor: pointer;

  &:hover {
    /* color: #161f37; */
  }

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28;
  }
`;
