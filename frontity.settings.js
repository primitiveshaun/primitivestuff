const settings = {
  "name": "primitive",
  "state": {
    "frontity": {
      "url": "https://primitivedigital.uk",
      "title": "Want a Website?",
      "description": "WordPress Web Sites and Apps",
      "name": "Primitive Digital"
    }
  },
  "packages": [
    {
      "name": "@frontity/twentytwenty-theme",
      "state": {
        "theme": {
          "menu": [
            ["Home", "/"],
            ["Design", "/web-design"],
            ["Development", "/web-development"],
            ["Data", "/data-insights"],
            ["Marketing", "/marketing"],
            ["A Nice Log", "/blog"]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://primitive.press/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
