import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

// Manrope - Bold / Manrope - Bold.eot;

import ManropeBoldEot from '../../assets/fonts/Manrope-Bold/Manrope-Bold.eot';
import ManropeBoldEotIndex from '../../assets/fonts/Manrope-Bold/Manrope-Bold.eot?#iefix';
import ManropeBoldWoff2 from '../../assets/fonts/Manrope-Bold/Manrope-Bold.woff2';
import ManropeBoldWoff from '../../assets/fonts/Manrope-Bold/Manrope-Bold.woff';
import ManropeBoldTtf from '../../assets/fonts/Manrope-Bold/Manrope-Bold.ttf';

import ManropeSemiBoldEot from '../../assets/fonts/Manrope-SemiBold/Manrope-Semibold.eot';
import ManropeSemiBoldEotIndex from '../../assets/fonts/Manrope-SemiBold/Manrope-Semibold.eot?#iefix';
import ManropeSemiBoldWoff2 from '../../assets/fonts/Manrope-SemiBold/Manrope-Semibold.woff2';
import ManropeSemiBoldWoff from '../../assets/fonts/Manrope-SemiBold/Manrope-Semibold.woff';
import ManropeSemiBoldTtf from '../../assets/fonts/Manrope-SemiBold/Manrope-Semibold.ttf';

import ManropeRegularEot from '../../assets/fonts/Manrope-Regular/Manrope-Regular.eot';
import ManropeRegularEotIndex from '../../assets/fonts/Manrope-Regular/Manrope-Regular.eot?#iefix';
import ManropeRegularWoff2 from '../../assets/fonts/Manrope-Regular/Manrope-Regular.woff2';
import ManropeRegularWoff from '../../assets/fonts/Manrope-Regular/Manrope-Regular.woff';
import ManropeRegularTtf from '../../assets/fonts/Manrope-Regular/Manrope-Regular.ttf';

import ManropeMediumEot from '../../assets/fonts/Manrope-Medium/Manrope-Medium.eot';
import ManropeMediumEotIndex from '../../assets/fonts/Manrope-Medium/Manrope-Medium.eot?#iefix';
import ManropeMediumWoff2 from '../../assets/fonts/Manrope-Medium/Manrope-Medium.woff2';
import ManropeMediumWoff from '../../assets/fonts/Manrope-Medium/Manrope-Medium.woff';
import ManropeMediumTtf from '../../assets/fonts/Manrope-Medium/Manrope-Medium.ttf';

export const GlobalStyle = createGlobalStyle`
html {
  /* dark theme */
  &[data-theme='dark'] {
    --background-color: #0A0A11;
    --text-color: #F3F3F3;
    --see-more-link-color: rgba(243, 243, 243, 0.50);
    --border-link-color: rgba(243, 243, 243, 0.2);
    --border-input-color: rgba(243, 243, 243, 0.2);
    --pagination-background-color: rgba(64, 112, 205, 0.5);
    --about-drink-title-color: rgba(243, 243, 243, 0.50);;
    --link-color: #F3F3F3;
    --button-color: #F3F3F3;
    --button-hover-color: #161F37;
    --error-color: rgba(243, 243, 243, 0.1 );
    --select-list-color: #161F37;
    --scroll-color: #434D67;
    --pagination-array-color:rgba(243, 243, 243, 0.30);
  }

  /* light theme */
  &[data-theme='light'] {
    --background-color: #F3F3F3;
    --text-color: #0A0A11;
    --see-more-link-color: rgba(10, 10, 17, 0.50);
    --border-link-color: rgba(22, 31, 55, 0.20);
    --border-input-color: rgba(10, 10, 17, 0.20);
    --pagination-background-color: #4070CD;
    --about-drink-title-color: rgba(22, 31, 55, 0.50);
    --link-color: #161F37;
    --button-color: #161F37;
    --button-hover-color: #F3F3F3;
    --error-color: rgba(64, 112, 205, 0.1);
    --select-list-color: #FFFFFF;
    --scroll-color: : #F3F3F3;
    --pagination-array-color:rgba(10, 10, 17, 0.30);
  }
}

@font-face {
  font-family: 'Manrope';
src: url(${ManropeBoldEot});
    src: local('Manrope Bold'), local('Manrope-Bold'),
        url(${ManropeBoldEotIndex}) format('embedded-opentype'),
        url(${ManropeBoldWoff2}) format('woff2'),
        url(${ManropeBoldWoff}) format('woff'),
        url(${ManropeBoldTtf}) format('truetype');
    font-weight: bold;
    font-style: normal;
}

@font-face {
  font-family: 'Manrope';
    src: url(${ManropeSemiBoldEot});
    src: local('Manrope Semibold'), local('Manrope-Semibold'),
        url(${ManropeSemiBoldEotIndex}) format('embedded-opentype'),
        url(${ManropeSemiBoldWoff2}) format('woff2'),
        url(${ManropeSemiBoldWoff}) format('woff'),
        url(${ManropeSemiBoldTtf}) format('truetype');
    font-weight: 600;
    font-style: normal;
}

@font-face {
    font-family: 'Manrope';
    src: url(${ManropeRegularEot});
    src: local('Manrope Regular'), local('Manrope-Regular'),
        url(${ManropeRegularEotIndex}) format('embedded-opentype'),
        url(${ManropeRegularWoff2}) format('woff2'),
        url(${ManropeRegularWoff}) format('woff'),
        url(${ManropeRegularTtf}) format('truetype');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Manrope';
    src: url(${ManropeMediumEot});
    src: local('Manrope Medium'), local('Manrope-Medium'),
        url(${ManropeMediumEotIndex}) format('embedded-opentype'),
        url(${ManropeMediumWoff2}) format('woff2'),
        url(${ManropeMediumWoff}) format('woff'),
        url(${ManropeMediumTtf}) format('truetype');
    font-weight: 500;
    font-style: normal;
}


*,
*::before,
*::after {
  box-sizing: border-box;
}

 body {
margin: 0;
  font-family: 'Manrope';
  font-weight: 400;
  font-style: normal;
font-size:14px;
  color: #111111;
  width: 100%;
  height: 100vh;
  background-color: var(--background-color);
   scroll-behavior: smooth;

 }

 
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-top: 0;
  margin-bottom: 0;
}
a {
  text-decoration: none;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
img {
  display: block;
    max-width: 100%;
  height: auto;
}
button {
  cursor: pointer;
  color:inherit;
}

.error-message {
  font-size: 14px;
  color:red;
}
`;
