
import React from "react";
import { styled, connect } from "frontity";
import Link from "./link";

const Credits = ({ state }) => {
  const currentYear = new Date().getFullYear();
  const { footerBg } = state.theme.colors;

  return (
    <Credits>
      <Copyright>
        &copy; {currentYear}{" "}
        <Link link={state.frontity.url}>{state.frontity.title}</Link>
      </Copyright>
      <PoweredBy>Powered by Frontity</PoweredBy>
    </Credits>
  );
};

export default Credits;
