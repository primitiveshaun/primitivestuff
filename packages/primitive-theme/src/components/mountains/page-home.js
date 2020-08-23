import React from "react";
import { connect, styled, loadable } from "frontity";

import Hero from 'primitivescenes/jungle';
import Intro from 'primitiverocks/page-home-intro';
import Gold from 'primitiverocks/page-home-tabs';
import Silver from 'primitiverocks/cpt-poststrip/post-strip';
import Page from "./page";
import Bronze from "primitiverocks/page-home-bronze";
// sk-dev: Invariant Violation: loadable: cannot find rocks-page-home-tabs in stats
//const Page = loadable(() => import("./page"));
//const Gold = loadable(() => import('../rocks/page-home-tabs'));
//const Silver = loadable(() => import('../rocks/cpt-poststrip/post-strip'));
//const Bronze = loadable(() => import('../rocks/page-home-bronze'));

const PageHome = ({ state }) => {

  // get the theme config from state
  const display = state.theme.config.homepage;

  if (state.theme.config.devMode) {
    //console.log("@page-home: display", display );
  }

  return (
    <HomePage className="page-home">

      {display.showHero && (
        <Hero props={display.hero} />
      )}

      {display.showIntro && (
        <Intro props={display.intro}/>
      )}

      {display.showGold && (
        <Gold />
      )}

      {display.showSilver && (
        <Silver props={display.silver} />
      )}

      <Page />

      {display.showBronze && (
        <Bronze />
      )}

    </HomePage>
  );
};

export default connect(PageHome);

const HomePage = styled.div`

`;
