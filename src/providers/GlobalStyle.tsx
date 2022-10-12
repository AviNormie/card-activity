import { createGlobalStyle } from 'styled-components';

import { colors } from '../constants/colors';

import KanitLight from '../assets/fonts/Kanit-Light.ttf';
import KanitRegular from '../assets/fonts/Kanit-Regular.ttf';
import KanitMedium from '../assets/fonts/Kanit-Medium.ttf';

export const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'Kanit-Light';
      src: local('Kanit-Light'),
          url(${KanitLight}) format('truetype');
      font-weight: 300;
      font-style: normal;
      font-display: swap;
  }
  @font-face {
      font-family: 'Kanit-Regular';
      src: local('Kanit-Regular'),
          url(${KanitRegular}) format('truetype');
      font-weight: 400;
      font-style: normal;
      font-display: swap;
  }
  @font-face {
      font-family: 'Kanit-Medium';
      src: local('Kanit-Medium'),
          url(${KanitMedium}) format('truetype');
      font-weight: 500;
      font-style: normal;
      font-display: swap;
  }
  *, *:before, *:after {
    box-sizing: border-box;
  }
  body, html {
    margin: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, ${colors.black['900']} 1.77%, ${colors.black['600']} 100%);
    font-family: "Kanit-Light";
    font-size: 14px;
    color: ${colors.gray['500']};
    overscroll-behavior-y: none;
    overflow: hidden;
  }
`;
