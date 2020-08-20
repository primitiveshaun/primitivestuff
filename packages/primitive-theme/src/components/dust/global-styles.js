import { css } from "frontity";

import cssReboot from "./_reboot";

import cssGrid from "./_bsgrid";

import cssUtils from "./_bsutils";

import cssBootstrap from "./_bscss";

import themeClasses from "./_theme";

const documentSetup = colors => css`


h1, .slab {  font-family: 'Hepta Slab', serif; font-size: 3.3rem; }
h2, .heading { font-family: 'Amatic SC', sans-serif; font-size: 3rem; }
h3, .news { font-family: 'Playfair Display', Georgia, serif; font-size: 3rem; }
h4, .display { font-family: 'Comfortaa', 'Franklin Gothic Medium', sans-serif; font-size: 1.6rem;}
h5, .subslab { font-family: 'Slabo 27px', Georgia, serif; font-size: 1.3rem; }
h6, .scribe { font-family: 'Pacifico', Georgia, cursive; font-size: 1.3rem; }

  /* --- RESPONSIVE --- */
  /* Small devices (landscape phones, 576px and up) */
  @media screen and (min-width: 576px) {

    html { font-size: 15px; }
    .container { max-width: 540px; }
  }
  
  /* Medium devices (tablets, 768px and up)  */
  @media screen and (min-width: 768px) {
    
    html { font-size: 15px; }
    .container { max-width: 720px; }
  }
  
  /* Large devices (desktops, 992px and up) */
  @media screen and (min-width: 992px) {

    html { font-size: 16px; }

    body {
      &::-webkit-scrollbar {
        width:1.5rem;
      }
    }
    .container { max-width: 960px; }
  }
  
  /* Extra large devices (large desktops, 1200px and up) */
  @media screen and (min-width: 1200px) {
    html { font-size: 16px; }
    .container { max-width: 1140px; }
  }

`;

const accessibilitySettings = css`
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0s !important;
      transition-duration: 0s !important;
    }
  }
`;



const mediaStyle = colors => css`
  figure {
    display: block;
    margin: 0;
  }

  iframe {
    display: block;
    max-width: 100%;
  }

  video {
    display: block;
  }

  svg,
  img,
  embed,
  object {
    display: block;
    height: auto;
    max-width: 100%;
  }

  figcaption,
  .wp-caption-text {
    color: ${colors.grays.base};
    display: block;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.2;
    margin-top: 1.5rem;
  }

  figcaption a,
  .wp-caption-text a {
    color: inherit;
  }
`;

const tableStyles = colors => css`
  table {
    border: 0.1rem solid ${colors.grays.light};
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
    font-size: 1.6rem;
    margin: 4rem 0;
    max-width: 100%;
    overflow: hidden;
    width: 100%;
  }

  .alignleft > table {
    margin: 0;
  }

  .alignright > table {
    margin: 0;
  }

  th,
  td {
    border: 0.1rem solid ${colors.grays.light};
    line-height: 1.4;
    margin: 0;
    overflow: visible;
    padding: 0.5em;
  }

  caption {
    background: ${colors.grays.light};
    font-weight: 600;
    padding: 0.5em;
    text-align: center;
  }

  thead {
    vertical-align: bottom;
    white-space: nowrap;
  }

  th {
    font-weight: 700;
  }
`;


const globalStyle = colors =>
  css([
    cssReboot(colors),
    cssGrid,
    cssUtils(colors), // 50kb
    cssBootstrap,
    documentSetup(colors),
    accessibilitySettings,
    mediaStyle(colors),
    tableStyles(colors),
    themeClasses(colors)
  ]);

export default globalStyle;