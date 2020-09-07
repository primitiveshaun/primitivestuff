import Theme from "./components";
import image from "@frontity/html2react/processors/image";

import CustomPageHandlers from "./components/sand/handlers";

import { themecolor } from "./components/dust/_colors";
import { themeconfig } from "./components/dust/_config";

//import grid from "./components/dust/_grid.js";


const primitiveTheme = {
  name: "primitive-theme",
  roots: {
    /**
     *  In Frontity, any package can add React components to the site.
     *  We use roots for that, scoped to the `theme` namespace.
     */
    theme: Theme,
  },
  state: {
    /**
     * State is where the packages store their default settings and other
     * relevant state. It is scoped to the `theme` namespace.
     */
    theme: {
      colors: themecolor,
      config: themeconfig,
      
      
      // Whether to auto-fetch links on a page. Values can be "no" | "all" | "in-view" | "hover"
      autoPreFetch: "no",
      /**
       * At the moment, we only include the ascii characters of Inter font.
       * Values can be "us-ascii" | "latin" | "all"
       */
      fontSets: "us-ascii",
    },
  },
  /**
   * Actions are functions that modify the state or deal with other parts of
   * Frontity like libraries.
   */
  actions: {
    theme: {
      //openMobileMenu: ({ state }) => { state.theme.isMobileMenuOpen = true; },
      //closeMobileMenu: ({ state }) => { state.theme.isMobileMenuOpen = false; }

      //beforeSSR: async ({ actions }) => {
      //  await actions.source.fetch(`/temporal_events/`)
      //}
    },
  },
  libraries: {
    html2react: {
      /**
       * Add a processor to `html2react` so it processes the `<img>` tags
       * inside the content HTML. You can add your own processors too
       * sk-dev: not sure how best to use these in the elment.class css styling context
       * do this for `<code>` tags, not sure about quotes/modifiers
       */
      processors: [image],
    },
    source: {
      handlers: CustomPageHandlers
    }
  },
};

export default primitiveTheme;
