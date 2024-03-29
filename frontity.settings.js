const settings = {
  name: "primitivestuff",
  state: {
    frontity: {
      url: "https://dev.primitivedigital.uk",
      title: "Primitive Digital",
      description: "WordPress + Frontity Stuff"
    }
  },
  packages: [
    {
      name: "primitive-theme",
      state: {
        theme: {
          debug: process.env.NODE_ENV==='development'?true:false,
          canonical: "https://primitivedigital.uk",
          menu: [
            ["Content", "/frontity-tests"],
            ["Pages", "/web-design"],
            ["Post", "/blog/a-decade-of-digital-development"],
            ["Posts", "/blog"],
            ["CPTs", "/evolution-of-digital-stuff"],
            ["CTs", "/timelines"],
            ["Stats/config", "/stats"],
          ],
          menufooter: [
            ["Contact", "/contact"],
            ["Startups", "/darwin-project"],
            ["Adventures in Time", "/timelines"],
            ["The Cave of Wonders", "/cave"],
            ["Primitive Theme for Frontity", "https://www.npmjs.com/package/primitive-theme"],
            ["Privacy Policy", "privacy-policy"]
          ],
          featured: {
            "showOnList": true,
            "showOnPost": true,
            "showOnPage": true,
          },
          // tbc
          archive: {
            "showExcerpt": true
          }
        }
      }
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          //api: "https://api.primitivedigital.uk/wp-json", // required: Your WP REST API EndPoint (no trailing slash)
            
          url: "https://api.primitivedigital.uk/wp-json", // required: Your WP REST API EndPoint (no trailing slash)
          
          homepage: "/home", // optional: set when using a page as the site homepage (wp hp settings ignored)
          postsPage: "/blog", // optional: set when using a page as the site homepage

          // optional: define CPTs
          postTypes: [
            {
              type: "works", // custom post type slug
              endpoint: "works", // WP REST API endpoint
              archive: "/works" // router link: do i want to use this?
            },
            {
              type: "temporal_events", // custom post type slug
              endpoint: "temporal_events", // WP REST API endpoint
              archive: "/evolution-of-digital-stuff" // router link: list view of these custom post types
            },
            {
              type: "things", // further CPTs
              endpoint: "things",
              archive: "/things"
            }
          ],
          taxonomies: [
            {
              taxonomy: "timelines", // custom taxonomy slug
              endpoint: "timelines", // WP REST API endpoint
              postTypeEndpoint: "/temporal_events", // endpoint for (custom) post types to query
            }
          ]
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@frontity/yoast",
    //"frontity-contact-form-7",
    "primitiverocks",
    "primitivepebbles",
    "primitivescenes"
  ]
};

export default settings;
