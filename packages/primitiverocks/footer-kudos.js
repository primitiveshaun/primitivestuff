import React from "react";
import { connect, styled } from "frontity";
import { Container, Row, Col } from "react-bootstrap";
import { LabeledIcon, HeartIt, FrontityLogo, WordPress, PrimitiveLogo } from "./icons-footer";
//const Page = loadable(() => import("./page"));

import { heartbeat } from "primitivescenes/glamourmagic";

///import SectionContainer from "./styles/section-container";

const KnobblyKnees = ({ state }) => {

  const { footerBg } = state.theme.colors;
  const display = state.theme.config.global.footer;
  if (!display) { return null }

  return (
    <FooterKudos bg={footerBg} role="contentinfo">
      <Container>

        <Row>
          <Col>
              <LabeledIcon icon={PrimitiveLogo} label="Primitive Digital - Web Design &amp; Development" />
          </Col>
        </Row>

        <Row>
          <Col>
            <LabeledIcon icon={HeartIt} label="Highly Recommends" />
          </Col>
        </Row>

        <KissesTo>

          <Col>
            <LabeledIcon icon={WordPress} label="Everything WordPress." />

            <span className="slab">+</span>

            <a href="https://frontity.org/">
              <LabeledIcon icon={FrontityLogo} label="Plus Frontity the open source framework for super fast WordPress+React themes." />
            </a>
          </Col>

        </KissesTo>

      </Container>
    </FooterKudos>
  );
};

export default connect(KnobblyKnees);

const FooterKudos = styled.div`
  padding-top: 3.5rem;
  padding-bottom: 2rem;
  background-color: #87635C;
  text-align: center;

  svg {
    margin: 10px auto;
    max-width: 30%;
    max-height: 140px;
  }

  &:hover .loveit {
    animation: ${heartbeat} 1s infinite;
  }
`;

const KissesTo = styled(Row)`
  padding-top: 2rem;
  
  span {
    padding: 0 2rem;
    height: 90px;
    vertical-align: middle;
    color: #D4AEA6;
    font-weight: bold;
  }

  svg {
    display: inline-block;
    margin: 0;
    max-height: 90px;
    justify-content: center;
    justify-items: center;

    &:first-of-type {
      height: 90px;
    }

    &:last-of-type {
      height: 80px;
    }
  }

`;
