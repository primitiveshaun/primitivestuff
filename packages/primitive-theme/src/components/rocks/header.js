import React from "react";
import { connect, styled, css } from "frontity";
import { Container, Row, Col } from "react-bootstrap";
import Link from "../pebbles/link";
import Nav from "./nav";
import {mq} from "../dust/_grid";
//import Nav from "../navigation/navigation";

import { randomWord } from "../sand/utils";
// sk-dev: random content: Warning: Text content did not match. Server: "Fruity" Client: "Fast"
//import RandomWord from "../pebbles/random-word";

const Header = ({ state }) => (
  <HeadWrapper variant={state.theme.config.global.header}>
    <div className="mast">
      <Container>
        <Row className="justify-content-sm-end">
          <Col className="col-11 col-md-7">
            <StyledLink link="/web-design/" className="pl-4">
              <Title className="mb-1">{state.frontity.title}</Title>
              <Intro className="subslab"><span className="slab">We Make </span>{randomWord()}</Intro>
              <Description>{state.frontity.description}</Description>
            </StyledLink>
          </Col>
        </Row>
      </Container>
      <Nav />
    </div>
  </HeadWrapper>
);

export default connect(Header);


const ResponsiveLight = css(
  mq({
    transform: ['scaleX(-1)', 'none', 'none', 'none'],
    "backgroundSize": ['cover', 'cover', 'cover', 'contain'],
    "backgroundImage": ['url(https://primitive.press/wp-content/uploads/header/light.jpg)','url(https://primitive.press/wp-content/uploads/header/light.jpg)','url(https://primitive.press/wp-content/uploads/header/light.jpg)','url(https://primitive.press/wp-content/uploads/header/light.jpg)'],
    "backgroundPositionY": ['4rem', '4rem', '4rem', '4rem'],
    "backgroundPositionX": ['calc(50% - 5rem)', 'center', 'center', 'center']
  })
);

const HeadLight = css`
  color: darkslategray;
  background-color: #e1dfda;
  border-bottom: 3px solid rgba(12,17,43,1);
  
  .mast {
    &::before {
      content: "";
      position: absolute;
      width: 150%;
      height: 200%;
      top: -50%;
      left: -50%;
      background-image: url(https://primitive.press/wp-content/uploads/header/light@2x-scaled.jpg);
      background-position-x: calc(50% - 5rem);
      background-position-y: 4.5rem;
      background-repeat: no-repeat;
      background-size: cover;
      transform: scaleX(-1);

      ${ResponsiveLight};
    }
  }
`;


const ResponsiveDark = css(
  mq({
    transform: ['scaleX(-1)', 'none', 'none', 'none'],
    "backgroundSize": ['cover', 'cover', 'cover', 'contain'],
    "backgroundImage": ['url(https://primitive.press/wp-content/uploads/header/dark.jpg)','url(https://primitive.press/wp-content/uploads/header/dark.jpg)','url(https://primitive.press/wp-content/uploads/header/dark.jpg)','url(https://primitive.press/wp-content/uploads/header/dark.jpg)'],
    "backgroundPositionY": ['4rem', '4rem', '4rem', '4rem'],
    "backgroundPositionX": ['calc(50% + 5rem)', 'calc(50% + 10rem)', 'calc(50% + 12rem)', 'calc(50% + 12rem)']
  })
);

const HeadDark = css`
  background-color: black;
  color: ivory;
  border-bottom: 3px solid rgba(12,17,43,1);

  .mast {
    &::before {
      content: "";
      position: absolute;
      width: 150%;
      height: 200%;
      top: -50%;
      left: -50%;
      background-image: url(https://primitive.press/wp-content/uploads/header/dark@2x-scaled.jpg);
      background-position-x: calc(50% + 5rem);
      background-position-y: 4rem;
      background-repeat: no-repeat;
      background-size: cover;
      transform: scaleX(-1);

      ${ResponsiveDark};
    }
  }
`;



const ResponsiveDefault = css(
  mq({
    transform: ['scaleX(-1)', 'none', 'none', 'none'],
    "backgroundSize": ['cover', 'cover', 'revert', 'revert'],
    "backgroundImage": ['url(https://primitive.press/wp-content/uploads/header/website_header@2x.jpg)','url(https://primitive.press/wp-content/uploads/header/website_header@2x.jpg)','url(https://primitive.press/wp-content/uploads/header/website_header@2x.jpg)','url(https://primitive.press/wp-content/uploads/header/website_header@2x.jpg)'],
    "backgroundPositionY": ['6rem', '6rem', '6rem', '6rem'],
    "backgroundPositionX": ['calc(50% + 5rem)', '60vw', 'center', 'center']
  })
);

const Default = css`
  color: ivory;
  background-color: #87af4e;
  border-bottom: 3px solid 'rgba(12,17,43,0.9)';

  .mast {
    &::before {
      content: "";
      position: absolute;
      width: 150%;
      height: 200%;
      top: -50%;
      left: -50%;
      background-image: url(https://primitive.press/wp-content/uploads/header/website_header@2x.jpg);
      background-position-x: calc(50% + 5rem);
      background-position-y: 6rem;
      background-repeat: no-repeat;
      background-size: cover;
      transform: scaleX(-1);

      ${ResponsiveDefault};
    }
  }

`;

// Header variants / modifiers
const headStyle = {
  light: HeadLight,
  dark: HeadDark,
  default: Default
};


const HeadWrapper = styled.header`
  overflow: hidden;
  .mast {
    position: relative;
    z-index: 1;
  }
  a {
    text-decoration: none;

    &:hover {
      text-decoration: none;
    }
  }

  ${(props) => headStyle[props.variant] || headStyle["default"]}

`;

const Title = styled.h2`
  color: #fff;
  font-size: 5rem;
  letter-spacing: 0;
  text-shadow: 1px 1px 2px #477C16;
  position: relative;
  z-index: 2;
`;

const Intro = styled.p`
  color: #fff;
  font-size: 1.8rem;
  font-style: italic;
  letter-spacing: 1px;
  text-shadow: 1px 1px 2px #477C16;
  position: relative;
  z-index: 2;

  span {
    color: #fff;
    font-size: 1.5rem;
    font-style: normal;
    letter-spacing: 1px;
    text-transform: uppercase;
 }
`;

const Description = styled.h4`
  color: #fff;
  font-size: 1.5rem;
  letter-spacing: 1px;
  text-shadow: 1px 1px 2px #477C16;
  position: relative;
  z-index: 2;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  position: relative;
  z-index: 2;
`;