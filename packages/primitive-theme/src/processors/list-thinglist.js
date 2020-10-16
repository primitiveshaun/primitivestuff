import React from 'react'
import { styled } from "frontity";
import { discolight } from "primitivescenes/glamourmagic";
import { themecolor } from "../components/dust/_colors";

const PrimaryStyles = () => `

display: flex;
margin: 1rem auto;
padding: 1rem;
flex: 0 0 90%;
flex-wrap: wrap;
list-style-type: none;

background-color: ${themecolor.coal};
background: url(https://api.primitivedigital.uk/wp-content/uploads/stone/grayrock-300x300.png);

box-shadow: 0 0 3px rgba(0,0,0,0.6),
            0 19px 38px rgba(0,0,0,0.30),
            0 15px 12px rgba(0,0,0,0.22),
            inset 0 0 6px rgba(0,0,0,0.3);

  li {
    display: flex;
    margin: 0;
    padding: .2rem .3rem .6rem;
    min-height: 130px;
    flex: 33%;

    font-size: 1.3rem;
    font-family: 'Abril Fatface', Georgia, cursive; 
    font-weight: 700;
    color: ${themecolor.coal};
    text-align: center;
    align-items: center;
    justify-content: center;
    text-shadow: 1px 0 6px #fff,
      1px 1px 0px #fff,
      7px 4px 2px rgba(0,0,0,0.3);

    background-color: #232b2b;
    border: solid 2px ${themecolor.coal};
  }

  li:nth-of-type(odd) {
    /* will-change: background, box-shadow; */
    animation: ${discolight} 5s ease-out infinite;
    animation-direction: alternate;
  }
  li:nth-of-type(even) {
    /* will-change: background, box-shadow; */
    animation: ${discolight} 5s ease-out infinite;
    animation-direction: alternate;
  }

  li:nth-of-type(2) { animation-delay: .2s; }
  li:nth-of-type(3) { animation-delay: .4s; }
  li:nth-of-type(4) { animation-delay: .6s; }
  li:nth-of-type(5) { animation-delay: .8s; }
  li:nth-of-type(6) { animation-delay: 1s; }
  li:nth-of-type(7) { animation-delay: 1.2s; }
  li:nth-of-type(8) { animation-delay: 1.4s; }
  li:nth-of-type(9) { animation-delay: 1.6s; }

  @media screen and (min-width: 768px) {
    .thinglist {
      width: 80%;
    }
  }

`;


const BlockDiscoList = styled.ul`
    ${PrimaryStyles};
`;

const DiscoList = ({ list, author }) => {
  console.log('List');
  console.log({ list, author })

  return (
    <BlockDiscoList>
      <p>{list ? list : 'Silence is golden'}</p>
      <cite>{author ? author : 'Anna a Mouse'}</cite>
    </BlockDiscoList>
  )
};




const list = {
  name: 'list-thinglist',
  priority: 10,
  test: ({ component, props }) => component === "ul" && props.className.includes("thinglist"),
  processor: ({ node, props }) => {

    const list = node.children[0].children[0].content;
    const author = node.children[1].children[0].content;
    const listStyle = DiscoList;

    return {
      component: listStyle,
      props: { list, author },
    }
  },
}

export default list;