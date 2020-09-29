import React from "react";
import { connect, styled } from "frontity";
import { Container, Row, Col } from "primitivepebbles/grid";
import BackToTop from "primitivepebbles/backtotop";
import Colophon from "primitivepebbles/credits";

const Footer = ({ state }) => {

  const colors = state.theme.colors,
        display = state.theme.config.footer;
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
      color={colors.ivory}
      hover={colors.secondary}
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
  color: ${(props) => props.color ? props.color : 'beige'};

  a {
    color: ${(props) => props.color ? props.color : 'ivory'};
    &:hover {
      color: ${(props) => props.hover ? props.hover : 'gold'};
      text-decoration: none;
    }
  }
`;