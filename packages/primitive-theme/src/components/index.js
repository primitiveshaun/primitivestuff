import { connect, Global, Head, styled, loadable } from "frontity";
import Switch from "@frontity/components/switch";
import React from "react";

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

  // get skeletal data model / information about the current URL.
  const data = state.source.get(state.router.link);

  // get the theme config from state
  const display = state.theme.config;

  // sk-dev: to improve
  if (state.theme.config.devMode) {
   //console.log("@index: data", data);
   //console.log("@index: display", display);
  }

  return (
    <>
      {
        /*
          Pass theme colors to the reboot

          Ideally you shouldn't add classes here just elements.

          sk-dev:TESTING. I'm also adding some classes as I want the wp user to be able to apply a pre-defined set of styles to content.
          - may split this to be post/page specific. that may cause duplicates - not sure of lesser evil.
          - these will be made availble via the wysiwyg ui by the wp theme
        */
      }
      <Global styles={globalStyles(state.theme.colors)} />

      { /* <FontFaces /> */}

      {/* Add some metatags to the <head> of the HTML. */}
      <MetaTitle />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />

        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Abril+Fatface|Amatic+SC|Comfortaa|Hepta+Slab|Pacifico|Playfair+Display:700|Slabo+27px&display=swap" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" crossorigin="anonymous"/>
       {/*
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.0-alpha1/css/bootstrap-grid.min.css" integrity="sha512-LxlJgXpmW7rJDt1BsGD/MvkFXDAY+t1X5Noou0KaXmmSxY1nduFn+oxhD5kAYnE6vqbkRyWNvucL82xyKOcxlQ==" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.0-alpha1/css/bootstrap-utilities.min.css" integrity="sha512-+0y5BXqNmfKh7Q4pMVjxeY92OFgsRUFnZSCjqTwvqUYJEdculrxQz/UM2jbpysBo0crnNvTTw31SFqk8HbT/iA==" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.0-alpha1/css/bootstrap.min.css" integrity="sha512-weZatQD41YXNCVn3Bvl2y1iAZqtH/Y+MlAQUwovog1iwj8cbSEpQMeErMnDp9CBlqIo0oxOcOF8GUEoOZYD4Zg==" crossorigin="anonymous" />

       */}
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css" integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I" crossorigin="anonymous" />

        <link rel="canonical" href="https://primitivedigital.uk" />
        <link rel="dns-prefetch" SameSite="None" Secure href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" SameSite="None" Secure href="http://doubleclick.net" />
      </Head>

      {/* Accessibility: Provides ability to skip to main content */}
      <SkipLink as="a" href="#main">
        Skip to main content
      </SkipLink>

        {/* Add the header of the site. */}
        <Header />

        {/* Add the main section. It renders a different component depending
        on the type of URL we are in. */}
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

      { /* SEO note, the below seems to get picked up by google before Main by default : 15kb */ }

      {display.global.showPromo && <GlobalPromo />}

      {display.global.showSocial && <GlobalSocial />}

      <KnobblyKnees />
      <FurryBoots />
      <Feet />
    </>
  );
};

export default connect(Theme);

const Main = styled.div`
  background-image: linear-gradient(
    180deg,
    rgba(66, 174, 228, 0.1),
    rgba(66, 174, 228, 0)
  );
`;