
# Primitive Theme for Frontity
A Headless WordPress (REST API) Theme for Frontity

![screenshot](../../img/punky.png)

Created with a little Node.js and React magic. 

Built on the awesome, itty bitty, [Frontity, React for WordPress framework](https://frontity.org/) 

With little help from our friends: Bootstrap 5, GSAP and ScrollMagic. 

Live site: [Primitive Digital](https://primitivedigital.co.uk)

GitHub Repo: https://github.com/primitiveshaun/primitivestuff

See [changelog](CHANGELOG.md) for release notes.

## [Created by Primitive Digital](https://primitivedigital.uk)

![screenshot](../../img/webby.png)

Setup
-----

*ignore/needs update*

The following pre-requisites should be in place for the theme to work:

1. WordPress install of version 5.0 or later
2. Optional but highly recommended: register a domain
3. If deploying to Vercel install WordPress to a sub directory e.g. - wp.example.com
4. Posts permalink set set to: Custom Structure e.g. - `/posts/%postname%/`
5. Set homepage to a static page


Installing and beginning development
------------------------------------

*** Follow the Frontity setup outlined in their Docs ***

https://docs.frontity.org/getting-started/quick-start-guide


1. `git clone https://github.com/primitiveshaun/primitiveone`
2. `cd primitiveone`
3. `npm install && npx frontity dev (from the project's root directory)`

** Quick Ref: Commands **

https://docs.frontity.org/frontity-cli

*ignore/needs update*

npx frontity dev  

npx frontity build  


Deployment
------------------------------------

*** Follow the Frontity deployment outlined in their Docs ***

https://docs.frontity.org/deployment




------------------------------------

The code is opensource so play like you mean business.

Enjoy!


#### Need Support
-------

If you find any problems with this theme, please report an issue at:  
https://github.com/primitiveshaun/primitivestuff/issues

#### [Primitive One created by Primitive Digital](https://primitivedigital.uk)


![screenshot](../../img/haveyouseenit.jpg)

#### Ω - *the end*

 > 🐒 - 🐒 - 🐒 - 🐒 - 🐒 - 🐒 - 🐒 - 🐒       
<pre>                      
._ _  _. _| _  |_    ._ _  _ ._ | o _  _  
| | |(_|(_|(/_ |_)\/ | | |(_)| ||<|(/__>  
                  /                      
</pre>
> [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)










# THEME REBASED FROM 2020 july 2020

# `@frontity/twentytwenty-theme`


The WordPress Twenty Twenty starter theme for Frontity

Full info about this theme can be found in the [docs](https://docs.frontity.org/frontity-themes/frontity-twentytwenty-theme)

![](https://raw.githubusercontent.com/frontity/gitbook-docs/master/docs/.gitbook/assets/screenshot-homepage-view-twentytwenty-frontity-theme.png)

## Table of contents

<!-- toc -->

- [Install](#install)
- [Usage](#usage)
- [Feature Discussions](#feature-discussions)
- [Changelog](#changelog)
- [Open Source Community](#open-source-community)
  * [Channels](#channels)
  * [Get involved](#get-involved)

<!-- tocstop -->

## Install

```sh
npm i @frontity/twentytwenty-theme
```

## Usage

Once installed it should be included in your `frontity.settings.js`.
The theme options can be specified in the `state.theme` property.


```jsx
{
  name: "@frontity/twentytwenty-theme",
  state: {
    theme: {
      menu: [
        ["Home", "/"],
        ["Nature", "/category/nature/"],
        ["Travel", "/category/travel/"],
        ["Japan", "/tag/japan/"],
        ["About Us", "/about-us/"]
      ],
      colors: {
        primary: "#E6324B",
        headerBg: "#ffffff",
        footerBg: "#ffffff",
        bodyBg: "#f5efe0"
      },
      showSearchInHeader: true,
      showAllContentOnArchive: false,
      featuredMedia: {
        showOnArchive: true,
        showOnPost: true
      },
      autoPreFetch: "hover",
      fontSets: "us-ascii"
    }
  }
},
```

Full info about this theme can be found in the [docs](https://docs.frontity.org/frontity-themes/frontity-twentytwenty-theme)

## Feature Discussions

[**Feature Discussions**](https://community.frontity.org/c/feature-discussions/33) about Frontity are public. You can join the discussions, vote for those you're interested in or create new ones.

These are the ones related to this package: https://community.frontity.org/tags/c/feature-discussions/33/twentytwenty-theme

## Changelog

Have a look at the latest updates of this package in the [CHANGELOG](https://github.com/frontity/frontity/blob/dev/packages/twentytwenty-theme/CHANGELOG.md)

***

## Open Source Community

### Channels

[![Community Forum Topics](https://img.shields.io/discourse/topics?color=blue&label=community%20forum&server=https%3A%2F%2Fcommunity.frontity.org%2F)](https://community.frontity.org/) [![Twitter: frontity](https://img.shields.io/twitter/follow/frontity.svg?style=social)](https://twitter.com/frontity) ![Frontity Github Stars](https://img.shields.io/github/stars/frontity/frontity?style=social)

Frontity has a number of different channels at your disposal where you can find out more information about the project, join in discussions about it, and also get involved:

- **📖  [Docs](https://docs.frontity.org/):** Frontity's primary documentation resource - this is the place to learn how to build amazing sites with Frontity.
* **👨‍👩‍👧‍👦  [Community forum](https://community.frontity.org/):** join Frontity's forum and ask questions, share your knowledge, give feedback and meet other cool Frontity people. We'd love to know about what you're building with Frontity, so please do swing by the [forum](https://community.frontity.org/) and tell us about your projects.
* **🐞  Contribute:** Frontity uses [GitHub](https://github.com/frontity/frontity) for bugs and pull requests. Check out the [Contributing](../contributing/) section to find out how you can help develop Frontity, or improve this documentation.
* **🗣  Social media**: interact with other Frontity users. Reach out to the Frontity team on [Twitter](https://twitter.com/frontity). Mention us in your tweets about Frontity and what you're building by using **`@frontity`**.
* 💌  **Newsletter:** do you want to receive the latest news about Frontity and find out as soon as there's an update to the framework? Subscribe to our [newsletter](https://frontity.org/#newsletter).

### Get involved

[![GitHub issues by-label](https://img.shields.io/github/issues/frontity/frontity/good%20first%20issue)](https://github.com/frontity/frontity/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)

Got questions or feedback about Frontity? We'd love to hear from you in our [community forum](https://community.frontity.org).

Frontity also welcomes contributions. There are many ways to support the project! If you don't know where to start then this guide might help: [How to contribute?](https://docs.frontity.org/contributing/how-to-contribute).

If you would like to start contributing to the code please open a pull request to address one of our [*good first issues*](https://github.com/frontity/frontity/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22).
