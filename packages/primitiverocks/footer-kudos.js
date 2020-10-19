import React from "react";
import { connect, styled } from "frontity";
import Image from "@frontity/components/image";
import { Container, Row, Col } from "primitivepebbles/grid";
//import { LabeledIcon, HeartIt, FrontityLogo, WordPress, PrimitiveLogo } from "./icons-footer";


import { heartbeat } from "primitivescenes/glamourmagic";



const KnobblyKnees = ({ state }) => {

  const display = state.theme.config.footer;
  if (!display) { return null }

  return (
    <FooterKudos
      bg={display.color}
      className="pt-5 pb-5 text-center"
      role="contentinfo"
    >
      <Container>

        <Row>
          <Col>
            {/* <LabeledIcon icon={PrimitiveLogo} label="" /> */}
            <Image
              alt={"Primitive Digital - Web Design &amp; Development"}
              src={"https://gist.githubusercontent.com/primitiveshaun/0ed73e662218497565fc4c59464f05db/raw/fa54ac683c60a7576f254daf82225d7c52291b16/pd_primitive.svg"}
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <Image
              className="loveit"
              alt={"Highly Recommends"}
              src={"https://gist.githubusercontent.com/primitiveshaun/58b74f472e0f11d9fe202056322f3a83/raw/5055725c1b0f103c9338a99ef7bacfa1013e99af/pd_heartit.svg"}
            />
          </Col>
        </Row>

        <KissesTo className="pt-5">

          <Col>
            <Image
              alt={"Everything WordPress"}
              src={"https://gist.githubusercontent.com/primitiveshaun/e7370d6c413e04240158e032f8ac06ab/raw/88cbc672a1bcccc1b74007b4dd164bc01844baa7/pd_wordpress.svg"}
            />

            <span className="slab">+</span>

            <a href="https://frontity.org/">
              <Image
                alt={"Plus Frontity the framework for super fast WordPress+React themes"}
                src={"https://gist.githubusercontent.com/primitiveshaun/69d1ac57b037931ea645629fa2bce642/raw/7c36d73c5ce8161a56dfc13deaac5b0e813b4e8a/pd_frontity.svg"}
              />
            </a>
          </Col>

        </KissesTo>

      </Container>
    </FooterKudos>
  );
};

export default connect(KnobblyKnees);

const FooterKudos = styled.div`
  background-color: ${(props) => props.bg ? props.bg : 'bisque'};

  svg, img {
    margin: 10px auto;
    max-height: 130px;
  }

  &:hover .loveit {
    animation: ${heartbeat} 1s infinite;
  }
`;

const KissesTo = styled(Row)`
  
  span {
    padding: 0 2rem;
    height: 90px;
    vertical-align: middle;
    color: #D4AEA6;
    font-weight: bold;
  }

  svg, img {
    display: inline-block;
    margin: 0;
    max-width: 30%;
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
