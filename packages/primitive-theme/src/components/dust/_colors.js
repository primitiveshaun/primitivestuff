// Variables
// COLORS

// refs / reading
// https://convertingcolors.com/blog/article/convert_hex_to_rgb_with_javascript.html
// https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
// like this::: https://css-tricks.com/snippets/javascript/lighten-darken-color/
// https://codepen.io/chriscoyier/pen/EatIr
// https://v5.getbootstrap.com/docs/5.0/customize/color/
// https://v5.getbootstrap.com/docs/5.0/utilities/colors/
// _varaibles.scss

// basic 6charaters only with #
const hexToRGB = (hex) => {
  const r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);
  return (`${r, g, b}`)
};


// Color system

const colors = {
  blue: "#0f52ba",
  indigo: "#6610f2",
  purple: "#6f42c1",
  pink: "#d63384",
  red: "#cd2653",
  orange: "#F05E23",
  yellow: "#ffc107",
  green: "#87af4e",
  teal: "#20c997",
  cyan: "#17a2b8",

  white: "#ffffff",
  black: "#000000",

  grays: {
    base: "#6D6D6D",
    light: "#DCD7CA",
    lighter: "#F5EFE0",
    g100: "#f8f9fa",
    g200: "#e9ecef",
    g300: "#dee2e6",
    g400: "#ced4da",
    g500: "#adb5bd",
    g600: "#6c757d",
    g700: "#495057",
    g800: "#807c7d",
    g900: "#212529"
  }
}

const primitive = {
  redapple: "#E1623F",
  fluff: "#ADD8E6",
  mustard: "#ffdb58",
  greendark: "#6c8c3e",
  mango: "#ffc324",
  lime: "#00FF00",
  pink: "#FFC0CB",
  plum: "#DDA0DD",
  peach: "#eb966c",
  coal: "#0c112b",
  graphite: "#212529",
  midnight: "#0C0B13",
  cardboard: "#87635C",
  pinkish: "#D4AEA6",
  brightlime: "#d7f36d",
  teal: "#008080",
  watermelon: "#fc6c85",
  salmom: "#ff8c69",
  tomato: "#ff6347",
  coral: "#E1623F",
  cyan: "#00a5ba"
}


const themecolor = {
  blue: colors.blue,
  indigo: colors.indigo,
  purple: primitive.plum,
  pink: primitive.pink,
  red: colors.red,
  orange: primitive.mango,
  yellow: primitive.mustard,
  green: primitive.green,
  teal: primitive.teal,
  cyan: primitive.cyan,

  brown: primitive.cardboard,

  white: colors.white,
  black: colors.black,
  light: colors.grays.g100,
  dark: colors.grays.g800,
  gray: colors.grays.g600,

  grays: {
    base: colors.grays.base,
    light: colors.grays.light,
    lighter: colors.grays.lighter
  },

  coal: primitive.coal,
  ivory: "#fffff0",
  cream: "fffdd0",
  peach: primitive.peach,
  fluff: primitive.fluff,
  lime: primitive.lime,
  mustard: primitive.mustard,
  greendark: primitive.greendark,

  primary: colors.green,
  secondary: primitive.peach,
  tertiary: primitive.pinkish,
  success: primitive.brightlime,
  info: primitive.teal,
  warning: primitive.mustard,
  danger: primitive.redapple,

  rgb: {
    primary: hexToRGB(colors.green),
    secondary: hexToRGB(primitive.peach),
    tertiary: hexToRGB(primitive.pinkish),
    success: hexToRGB(primitive.brightlime),
    info: hexToRGB(primitive.teal),
    warning: hexToRGB(primitive.mustard),
    danger: hexToRGB(primitive.redapple),
  },

  disco: {
    cyan: "#00FFFF",
    magenta: "#FF00FF",
    neongreen: "#01FF89",
    purple: "#7A5FFF",
    blue: "#00a8ff"
  },
}

export { themecolor };