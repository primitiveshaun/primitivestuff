import { css } from "frontity";
import cssReboot from "./_reboot";
import { Grid } from "./_grid";
import bsStyles from "./_bscss";


//sk-dev: missing css animation now - check safari / mobile
/*
const accessibilitySettings = css`
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0s !important;
      transition-duration: 0s !important;
    }
  }
`;
*/

const typeSetting = colors => css`

html {
  font-size: 100%;
  font-size: calc(3vw);
}

body {
  font-family: Verdana, "Segoe UI", "Helvetica Neue", Arial, system-ui, -apple-system, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5;
  color: ${colors.coal ? colors.coal : '#212529'};
}

h1, h2, h3, h4, h5, h6 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
}
h1, .slab { 
  font-family: 'Hepta Slab', serif;
  font-size: 3.3rem;
  /*font-size: calc(1.375rem + 1.5vw);*/
}
h2, .heading {
  font-family: 'Amatic SC', sans-serif;
  font-size: 3rem;
  font-size: calc(1.325rem + 0.9vw);
}
h3, .news {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 2.8rem;
  /*font-size: calc(1.3rem + 0.6vw);*/
}
h4, .display {
  font-family: 'Hepta Slab', serif;
  font-size: 1.6rem;
  /* font-size: calc(1.275rem + 0.3vw);*/
}
h5, .subslab {
  font-family: 'Slabo 27px', Georgia, serif;
  font-size: 1.3rem;
}
h6, .scribe {
  font-family: 'Pacifico', cursive;
  font-size: 1.2rem;
}
p {
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1rem;
  line-height: 1.8;
}

/* --- RESPONSIVE --- */
/* Small devices (landscape phones, 576px and up) */
/* Medium devices (tablets, 768px and up)  */
/* Large devices (desktops, 992px and up) */
/* Extra large devices (large desktops, 1200px and up) */

@media screen and (min-width: 576px) {
  html { font-size: 14px; }
}
@media screen and (min-width: 768px) {
  html { font-size: 15px; }
}
@media screen and (min-width: 992px) {
  html { font-size: 16px; }
}
@media screen and (min-width: 1200px) {
  html { font-size: 18px; }

}

`;

const globalStyles = colors => css`

  figcaption,
  .wp-caption-text {
    color: ${colors.gray};
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

  .navbar-brand a {
    width: 200px;
  }


`;




const globalStyle = colors =>
  css([
    cssReboot(colors),
    typeSetting(colors),
    bsStyles,
    //accessibilitySettings,
    globalStyles(colors)
  ]);

export default globalStyle;