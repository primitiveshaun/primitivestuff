import React from "react";
import { connect, styled } from "frontity";
import Link from "../pebbles/link";
import { Container, Row, Col, Nav, Navbar, Image } from "react-bootstrap";

const MainNav = ({ state }) => (

  <NavWrap bg="rgba(12,17,43,0.9)" fluid>
    <Container>
      <Row>

        <StyledNavbar
          expand="lg"
          aria-label="Main"
          text={state.theme.colors.primary}
          hover={state.theme.colors.success}
        >

          <Navbar.Brand href="/">
            <Image src={"https://primitive.press/wp-content/uploads/img/punky_logo_smgreen.png"} alt="Primitive Digital - Web Design &amp; Development" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="site-nav" />

          <Navbar.Collapse id="site-nav">
            <Nav className="mr-auto">
              <ul className="navbar-nav mr-auto">
                {state.theme.menu.map(([name, link]) => (
                  <Item className="nav-item" key={name} isSelected={state.router.link === link}>
                    <Link link={link}>{name}</Link>
                  </Item>
                ))}
              </ul>
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

  a {
    color: ${(props) => props.text ? props.text : 'gray'};

    &:hover {
      color: ${(props) => props.hover ? props.hover : 'ivory'};
      text-decoration: none;
      border-bottom: 2px solid ${(props) => props.hover ? props.hover : 'ivory'};
    }
  }
  a.navbar-brand {
    color:transparent;
    border: none;

    img {
      max-height: 5rem;
    }
  }
`;

const NavWrap = styled(Container)`
  border-bottom: 3px solid ${(props) => props.bg ? props.bg : 'rgba(12,17,43,0.9)'};
  .navbar-toggler {
    color: rgba(0,0,0,.5);
    border-color: rgba(0,0,0,.2);
    background-color: #87af4e;
  }
`;

const Item = styled.li`

  font-size: 1rem;
  font-family: 'Hepta Slab', serif;
  font-weight: 600;
  letter-spacing: 1px;


  & > a {
    display: inline-block;
    line-height: 1.8rem;
    border-bottom: 2px solid
      ${({ isSelected }) => (isSelected ? "#fff" : "transparent")};
  }
`;

