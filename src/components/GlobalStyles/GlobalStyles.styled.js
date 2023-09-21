import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Manrope';
  src: url(/fonts/Manrope-Regular.ttf) format('truetype');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Manrope';
  src: url(/fonts/Manrope-SemiBold.ttf) format('truetype');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'Manrope';
  src: url(/fonts/Manrope-Medium.ttf) format('truetype');
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'Manrope';
  src: url(/fonts/Manrope-Bold.ttf) format('truetype');
  font-weight: 700;
  font-style: normal;
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
  background-color: #0a0a11;
  background-image: url('src/assets/footer/ellipseleft-footer.png'),url('src/assets/footer/ellipseright-footer.png');
  background-repeat:no-repeat;
  background-position: -140vw 145vh,5vw 140vh ;

  @media (min-width: 768px) {
      background-position: -35vw 162vh,-5vw 172vh ;

  /* background-position: 47% -310%, 20% -265%; */
  }

  @media (min-width: 1440px) {
      background-position: 5vw 86vh,15vw 86vh ;

      /* background-position: 47% -310%, 20% -265%; */

  }

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
