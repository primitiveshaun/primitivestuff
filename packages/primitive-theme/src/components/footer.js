import React from "react";
import { connect, styled, css } from "frontity";
import { Container, Row, Col } from "react-bootstrap";

//import SectionContainer from "./styles/section-container";

import BackToTop from "./pebbles/backtotop";
import Credits from "./pebbles/credits";

const Footer = ({ state }) => {

  const colors = state.theme.colors;
  const display = state.theme.config.global.footer;

  return (
    <SiteFooter
      bg={colors.brown} 
      text={colors.tertiary} 
      role="contentinfo">

        <Container className="p-5">
          <Row>
              <Credits />
          </Row>
          <Row className="pt-4">
            <Col className="text-center">
              <BackToTop />
            </Col>
          </Row>
        </Container>

    </SiteFooter>
  );
};

export default connect(Footer);


const SiteFooter = styled.footer`
  background-color: ${(props) => props.bg ? props.bg : 'white'};
  background: linear-gradient(to bottom, ${(props) => props.bg ? props.bg : 'white'} 60%,#7b5a54 100%);
  font-family: 'Comfortaa', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; 
  color: ${(props) => props.text ? props.text : 'slategray'};

  a {
    color: ${(props) => props.text ? props.text : 'slategray'}
    &:hover {
      color: pink;
      text-decoration: none;
    }
  }
`;

/*
const Colophon = styled(Col)`
  color: ${(props) => props.primary ? 'blue' : 'slategray'}
`;

const primaryStyle = css`
  color: blue;
`;

*/

/*
const Modifiers = css`
  color: ${(props) => props.primary ? 'blue' : 'slategray'}
`;
*/
//const dynamicStyle = (props) => css`color: ${props.color}`

//const dynamicStyle = (props) => css`color: ${props.color}`
//let SomeComponent = styled('div')`${dynamicStyle}`