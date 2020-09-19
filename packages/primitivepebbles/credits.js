
import React from "react";
import { styled, connect } from "frontity";
import Link from "@frontity/components/link";
import {Col} from "primitivepebbles/grid";

const Credits = ({ state }) => {
  const currentYear = new Date().getFullYear();
  const display = state.theme.config.global.footer.credit;

  return (
    <Col className="text-center">
     
      <Copyright>
        &copy; {currentYear} <Link link={display.link} alt={`&copy; ${currentYear} `} >{display.legal}</Link>
      </Copyright>

      <Creator>
        {display.label} <Link link={display.backlink} alt={display.label + " " + display.creator}>{display.creator}</Link>
      </Creator>
    
    </Col>
  );
};

const Text = styled.p`font-weight: 700;`;

const Copyright = styled(Text)`
  letter-spacing:2px;
  font-size: .9rem;
`;

const Creator = styled(Text)`
  font-size: .8rem;
  letter-spacing:3px;
`;

export default connect(Credits);
