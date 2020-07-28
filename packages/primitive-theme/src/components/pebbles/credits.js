
import React from "react";
import { styled, connect, css } from "frontity";
import Link from "@frontity/components/link";
import { Col } from "react-bootstrap";

const Credits = ({ state }) => {
  const currentYear = new Date().getFullYear();

  return (
    <Col className="text-center">
     
     <Copyright>
        Crafted by <a title="Digitally re-mastered by Primitive Digital" href="https://primitivedigital.uk/">Primitive Digital</a> &copy; {currentYear}{" "}
      </Copyright>

      <Text>
        Jus' <Link link={state.frontity.url}>{state.frontity.title}</Link>
      </Text>

      <Text>
        Hosted by <a title="Web Hosting by Primitive" href="https://primitivehosting.uk/">Primitive Hosting</a>
      </Text>
    
    </Col>
  );
};

const Copyright = styled.p`
  font-weight: 700;
  letter-spacing:2px;
`;

const Text = styled.p`
  font-weight: 600;
  letter-spacing:2px;
`;

export default connect(Credits);
