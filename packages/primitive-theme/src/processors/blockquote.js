import React from 'react'
import { styled } from "frontity";
import { themecolor } from "../components/dust/_colors";

//console.log(themecolor)
const Primary = colors => `

border-left: 4px solid ${hexToRGB('#87af4e', 0.8)};

p {
  box-shadow: 0 -6px 0 ${hexToRGB('#87af4e', 0.2)}; 
  color: ${hexToRGB('#87af4e', 0.8)}; 
}

&::before {

  content: "";
  height: 500px;
  width: 500px;
  
  position: absolute;
  top: -50px;
  left: -50px;
  border-left: 5px solid ${hexToRGB('#87af4e', 0.1)};
  border-radius: 50% 50% 50% 50%;
  z-index: -1;
  overflow:hidden;
}

&::after {
  background: ${hexToRGB('#87af4e', 0.8)};
}
`;

const BlockQuote = styled.blockquote`
    ${Primary}
`;


const Quote = ({ quote, author }) => {
    console.log('Quote')
    console.log({ quote, author })

    const styledNode = {
      p
    }

    return (
        <BlockQuote colors={themecolor}>
            <p>{quote}</p>
            <cite>{author}</cite>
        </BlockQuote>
    )
};

/*
const Quote = ({ quote, author }) => {
    console.log('Quote')
    console.log({ quote, author })

    return (
        <blockquote>
            <p>{quote}</p>
            <cite>{author}</cite>
        </blockquote>
    )
};
*/

const quote = {
    name: 'quote',
    priority: 10,
    test: ({ component, props }) => component === "blockquote" && props.className.includes("q-primary"),
    processor: ({ node }) => {

        console.log('Quote1');

        const quote = node.children[0].children[0].content
        const author = node.children[1].children[0].content
        return {
            component: Quote,
            props: { quote, author },
        }
    },
    

}

export default quote;

// dupe
const hexToRGB = (hex, alpha) => {

    console.log("test" + hex);
    const r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);
  
    if (alpha) {
      return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
      return "rgb(" + r + ", " + g + ", " + b + ")";
    }
  }