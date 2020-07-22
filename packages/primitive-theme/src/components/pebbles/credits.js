
import React from "react";
import { styled, connect, css } from "frontity";
import Link from "./link";
import { Col } from "react-bootstrap";

const Credits = ({ state }) => {
  const currentYear = new Date().getFullYear();
  const { footerBg } = state.theme.colors;

  return (
    <Col className="text-center">
     
     <Copyright>
        Crafted by <a title="Website Design and build by Primitive Digital" href="https://primitivedigital.uk/">Primitive Digital</a> &copy; {currentYear}{" "}
        <Link link={state.frontity.url}>{state.frontity.title}</Link>
      </Copyright>

      <Text>Hosted by <a title="Web Hosting and Domains from Primitive Hosting" href="https://primitivehosting.uk/">Primitive Hosting</a></Text>
    
    </Col>
  );
};

const Copyright = styled.p`
  font-weight: 600;
  letter-spacing:1px;
`;

const Text = styled.p`
  font-weight: 500;
  letter-spacing:1px;
`;

export default connect(Credits);
