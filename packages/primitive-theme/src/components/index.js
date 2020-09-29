import React from "react";
import { connect, Global, Head, styled, loadable } from "frontity";
import Switch from "@frontity/components/switch";

import Loading from "primitivepebbles/loading";
import MetaTitle from "primitivepebbles/meta-title";
import globalStyles from "./dust/global-styles";
//import FontFaces from "./dust/_font-faces";

const Home = loadable(() => import("./mountains/page-home"));
const Post = loadable(() => import("./mountains/post"));
const Page = loadable(() => import("./mountains/page"));
const PageError = loadable(() => import("./mountains/page-error"));
import Posts from "./mountains/post-list";
import Timelines from "./mountains/timelines";
import Timeline from "./mountains/timeline";
import SubTimeline from "./mountains/subtimeline";

import Header from "primitiverocks/header";
import SkipLink from "primitivepebbles/skip-link";
import GlobalPromo from "primitiverocks/global-promo";
import GlobalSocial from "primitiverocks/social/social-section";

const KnobblyKnees = loadable(() => import("primitiverocks/footer-cta"));
const FurryBoots = loadable(() => import("primitiverocks/footer-kudos"));
const Feet = loadable(() => import("./footer"));

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {

  // get skeletal data for current URL.
  const data = state.source.get(state.router.link);
  const display = state.theme.config;

  if (state.theme.debug) {
    //console.log("@index: data", data);
    //console.log("@index: display", display);
  }

  return (
    <Root>

      <Global styles={globalStyles(state.theme.colors)} /> {/* reboot and styled html elements */}

      { /* <FontFaces /> */}

      <MetaTitle /> {/* Add metatags */}

      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />

        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Abril+Fatface|Amatic+SC|Hepta+Slab|Pacifico|Playfair+Display:700|Slabo+27px&display=swap" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" crossorigin="anonymous" />
        {/*
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.0-alpha1/css/bootstrap-grid.min.css" integrity="sha512-LxlJgXpmW7rJDt1BsGD/MvkFXDAY+t1X5Noou0KaXmmSxY1nduFn+oxhD5kAYnE6vqbkRyWNvucL82xyKOcxlQ==" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.0-alpha1/css/bootstrap-utilities.min.css" integrity="sha512-+0y5BXqNmfKh7Q4pMVjxeY92OFgsRUFnZSCjqTwvqUYJEdculrxQz/UM2jbpysBo0crnNvTTw31SFqk8HbT/iA==" crossorigin="anonymous" />
       */}
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css" integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I" crossorigin="anonymous" />

        <link rel="canonical" href="https://primitivedigital.uk" />

        <link rel="dns-prefetch" SameSite="None" Secure href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" SameSite="None" Secure href="http://doubleclick.net" />
      </Head>

      
      <SkipLink as="a" href="#main">Skip to main content</SkipLink> {/* Accessibility: skip to main content */}

      <Header /> { /* header */}

      {/* Render the appropriate content for the post(s), page, cpt(s) */}
      <Main id="main">
        <Switch>
          <Loading when={data.isFetching} />
          <Home when={data.isHome} />
          <Page when={data.isPage} />
          <Posts when={data.isPostArchive} />
          <Post when={data.isPost} />
          <Timeline when={data.isTemporalEventsArchive} />
          <SubTimeline when={data.isTimelineType} />
          <Timelines when={data.isTimelines} />
          <PageError when={data.isError} />
        </Switch>
      </Main>

      { /* sk-seo: v1. it appears by default google picks up the below content before the Main switch */}

      {display.showPromo && <GlobalPromo />} { /* Promo section: (optional) */}

      {display.showSocial && <GlobalSocial />} { /* Social section: (optional) */}

      <KnobblyKnees /> { /* CTA section: (optional) */}
      <FurryBoots /> { /* Assurance section: brands/reviws/offers (optional) */}
      <Feet /> { /* footer */}
    </Root>
  );
};

export default connect(Theme);

const Root = styled.div`
  overflow-x: hidden;
`;

const Main = styled.div`
  border-top: 3px solid rgba(12,17,43,0.9);

  background-image: linear-gradient(
    180deg,
    rgba(66, 174, 228, 0.1),
    rgba(66, 174, 228, 0)
  );
`;