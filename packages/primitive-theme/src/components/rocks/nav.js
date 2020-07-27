import React from "react";
import { connect, styled } from "frontity";
import Link from "../pebbles/link";
import { Container, Row, Nav, Navbar } from "react-bootstrap";
import Image from "@frontity/components/image";

const MainNav = ({ state }) => (

  <NavWrap bg="">
    <Container>
      <Row>

        <StyledNavbar
          collapseOnSelect
          expand="lg"
          aria-label="Main"
          text={state.theme.colors.primary}
          hover={state.theme.colors.success}
        >

          <Navbar.Brand className="p-0" href="/">
            <Image src={"https://primitive.press/wp-content/uploads/img/punky_logo_smgreen.png"} alt="Primitive Digital - Web Design &amp; Development" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="site-nav" />

          <Navbar.Collapse id="site-nav">
            <Nav className="mx-auto">

              {state.theme.menu.map(([name, link]) => (
                <Nav.Link as={StyledLink}
                    key={name}
                    aria-current={link === state.router.link ? "page" : undefined}
                    link={link}
                    href={link}
                    text={state.theme.colors.primary}
                    hover={state.theme.colors.success}
                    className="p-3 mr-2 ml-2 ml-lg-2"
                  >
                  {name}
                </Nav.Link>
              ))}
    
            </Nav>
          </Navbar.Collapse>

        </StyledNavbar>

      </Row>
    </Container>
  </NavWrap>
);

export default connect(MainNav);

const StyledNavbar = styled(Navbar)`
  border-top-left-radius: .5rem;
  border-top-right-radius: .5rem;
  background-color: ${(props) => props.bg ? props.bg : 'rgba(12,17,43,0.9)'};
  position: relative;
  z-index: 3;

  a.navbar-brand {
    color:transparent;
    border: none;
  }
`;

const NavWrap = styled.div`
  .navbar-toggler {
    color: rgba(0,0,0,.5);
    border-color: rgba(0,0,0,.2);
    background-color: #87af4e;
  }
`;

const StyledLink = styled(Link)`
  font-size: 1rem;
  font-family: 'Hepta Slab', serif;
  font-weight: 600;
  letter-spacing: 1px;
  text-decoration: none;

  color: ${(props) => props.text ? props.text : 'ivory'} !important;
  line-height: 1.8rem;
  border-bottom: 2px solid transparent;

  &:hover {
    color: ${(props) => props.hover ? props.hover : 'ivory'} !important;
    border-bottom: 2px solid ${(props) => props.hover ? props.hover : 'ivory'};
  }

  &[aria-current="page"] {
    color: ${(props) => props.hover ? props.hover : 'ivory'} !important;
    border-bottom: 2px solid ${(props) => props.hover ? props.hover : 'ivory'};
  }

`;

