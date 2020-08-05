const settings = {
  "name": "primitivestuff",
  "state": {
    "frontity": {
      "url": "https://primitivedigital.uk",
      "title": "Makin' a Website?",
      "description": "WordPress + Frontity Stuff",
      "name": "Primitive Digital"
    }
  },
  "packages": [
    {
      "name": "primitive-theme",
      "state": {
        "theme": {
          "menu": [
            ["Testing", "/stats"],
            ["Pages", "/web-design"],
            ["Development", "/frontity-tests"],
            ["Timelines", "/timelines"],
            ["Content", "/blog/a-decade-of-digital-development/"],
            ["Blog", "/blog"]
          ], // add menu or pull from api...
          "featured": {
            "showOnList": true,
            "showOnPost": true,
            "showOnPage": true,
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "http://api.primitivedigital.uk/wp-json", // required: Your WP REST API EndPoint (no trailing slash)
          "homepage": "/home/", // optional: set when using a page as the site homepage
          "postsPage": "/blog/", // optional: set when using a page as the site homepage

          "postTypes": [
            {
              "type": "works", // custom post type slug
              "endpoint": "works", // REST API endpoint
              "archive": "/works" // DO I NEED THIS???
            },
            {
              "type": "temporal_events", // custom post type slug
              "endpoint": "temporal_events", // REST API endpoint
              "archive": "/evolution-of-digital-stuff" // link where this custom posts are listed
            },
            {
              "type": "things", // custom post type slug
              "endpoint": "things", // REST API endpoint
              "archive": "/things" // link where this custom posts are listed
            }
          ],
          "taxonomies": [
            {
              "taxonomy": "timelines", // custom taxonomy slug
              "endpoint": "timelines", // REST API endpoint
              "postTypeEndpoint": "/temporal_events", // endpoint from which posts from this taxonomy are fetched
            }
          ]
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@frontity/head-tags",
    "frontity-contact-form-7"
  ]
};

export default settings;
