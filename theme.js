import future from '@mdx-deck/themes/future'
import highlight from '@mdx-deck/themes/syntax-highlighter-prism'

const primary = "#CB772F";
const secondary = "#6a8759";
const info = '#8888c3';
const muted = "#808080";

export default {
  ...future,
  ...highlight,
  font: '"Avenir Next", system-ui, sans-serif',
  colors: {
    text: muted,
    background: "#111",
    secondary,
    link: secondary,
    pre: secondary,
    preBackground: "#000",
    code: secondary
  },
  blockquote: {
    fontSize: ".8em",
    fontWeight: 400,
    textAlign: "right"
  },
  h1: {
    color: "#fff"
  },
  h2: {
    color: "#fff"
  },
  h3: {
    color: "#fff"
  },
  h4: {
    color: "#fff"
  },
  Slide: {
    width: "80wh",
    textAlign: "left"
  },
  css: {
    span: {
      color: primary
    },
    primary: {
      fontWeight: "inherits",
      fontStyle: "normal",
      color: primary
    },
    secondary: {
      fontWeight: "inherits",
      fontStyle: "normal",
      color: secondary
    },
    muted: {
      fontWeight: "inherits",
      fontStyle: "normal",
      color: muted
    },
    info: {
      fontWeight: "inherits",
      fontStyle: "normal",
      color: info
    }
  },
  heading: {
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    fontWeight: 600
  },
  quote: {
    fontWeight: 600
  }
};
