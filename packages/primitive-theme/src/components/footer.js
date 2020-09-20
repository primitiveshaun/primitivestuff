import React from "react";
import { connect, styled } from "frontity";
import { Container, Row, Col } from "primitivepebbles/grid";
import BackToTop from "primitivepebbles/backtotop";
import Colophon from "primitivepebbles/credits";

const Footer = ({ state }) => {

  const colors = state.theme.colors,
        display = state.theme.config.global.footer;
  /*
  __footer: props
      bg={colors.brown} 
      text={colors.ivory} 
      hyper={colors.secondary}
  */

  return (
    <SiteFooter
      role="contentinfo"
      bg={colors.brown}
      text={colors.ivory}
      hyper={colors.secondary}
    >

      <Container className="p-5">
        <Row>
          <Colophon content={display} />
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
  background-color: ${(props) => props.bg ? props.bg : 'darkslategray'};

  font-family: 'Comfortaa', sans-serif; 
  color: ${(props) => props.text ? props.text : 'beige'};

  a {
    font-weight: 800;
    color: ${(props) => props.text ? props.text : 'ivory'};
    &:hover {
      color: ${(props) => props.hyper ? props.hyper : 'gold'};
      text-decoration: none;
    }
  }
`;