import { css } from "frontity";

import cssReboot from "./_reboot";

import cssGrid from "./_bsgrid";
//import cssGrid from "bootstrap/dist/css/bootstrap-grid.min.css";

import cssUtils from "./_bsutils";

import cssBootstrap from "./_bscss";

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
    accessibilitySettings,
    //mediaStyle(colors),
    //tableStyles(colors),
    //themeClasses(colors)
  ]);

export default globalStyle;