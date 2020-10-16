
# primitive-theme

***The Log of Change***

 🔥️ HOT 🥔 POTATO,  🔥️ HOT 🥔 POTATO,  🔥️ HOT 🥔 POTATO.

To whom it may concern. Some odd comments may be documented here.

Commit messages are loosly following [Conventional Commits](https://conventionalcommits.org).

primitive-theme 1.0.x
add theme-able sections
Separation of config / theme

@primitivedigital/primitiveone 1.1.0: restructured for development of theme-able system. WIP

@primitivedigital/primitiveone 1.0.0: customised theme based on early release of frontity mars theme. published to npm.


## Dev Notes

- frontity.settings seems dominant over package/index (you can overwrite the menu in dev but not prod?)...
- need to review licence

*Hosting tests:* Can this type of site be hosted on our standard WP hosting?
Therchnically 

- [ ] [Embed Mode](https://github.com/frontity/frontity-embedded-proof-of-concept)

*


## WIP

- [ ] Create *shoelace* theme (grid, size, color, breakpoints) + fragments

- [ ] refine: theme BS CSS > Components (grid)
- [ ] BS CSS > CSS-IN-JS (transparency/darken/lighten)
- [ ] BS CSS > CSS-IN-JS (darken/lighten)
- [ ] BS CSS > CSS-IN-JS (classes, --modifiers-size)


- [ ] Optimise for Mobile: Don't serve some animations on mobile, handle click/hover vs pointer events
- [ ] Optimise for Mobile: fix quotes, multi-line padding, disco

- [ ] test: are error page timeout settings higher than vercel timeout?
- [ ] refine: preloaders / postsrips
- [ ] fix: strong formatting and link/reload on header image

- [ ] feat: timelines
- [ ] fix: sort/filters: modify the wp theme funtions.php or use a plugin?
- [ ] fix: sort/filters subtimeline component: custom cpt/taxonomy content (I can't seem to sort if using WP REST Filter plugin)
- [ ] fix: multi/level/urls break if accessed directly

- [ ] feat: poststrip
- [ ] sort/filters poststrip component: post and custom cpt/taxonomy content (recent, random, related)


## P2

- [ ] feat: add post social share
- [ ] feat: Fade in lazy loaded images (is this now working)?
- [ ] feat: switch to ts
- [ ] feat: author list view / profile

- [ ] WebFonts: Tested as per docs. Implementation works but some google fonts don't convert well
- [ ] Research create a UI/cf7 theme builder vs cli
- [ ] Research add comments / cf7 / fe content submission

## History

**v1.0.13 > Theming, Refine Color system (Oct 16, 2020):**
- [x] core updates
- [x] store/get rgb values from state
- [x] refine colour system
- [x] refine post/page/global styles and colour - 1st pass
- [x] remove workaround: isHome / homepage

**v1.0.12 > Refine Styling, Theming, Processors, CPTs (Oct 7, 2020):**
- [x] workaround for missing isHome flag
- [x] remove images from repo
- [x] update theme object
- [x] add blockquote processor(s)
- [x] import iframe processor

**v1.0.11 > Component updates (Sept 21, 2020):**
- [x] remove color-convert
- [x] remove unused svgs / optimise svgs

**v1.0.10 > Component updates (Sept 20, 2020):**
- [x] remove datamap code
- [x] test heading pebble
- [x] add some theming to tabs
- [x] extracted bootrap Grid to pebbles

**v1.0.9 > Address performance issues (Sept 17, 2020):**
- [x] core updates
- [x] fix for 'no index' / yoast
- [x] refine _reboot

**v1.0.8 > Address performance issues (Sept 9, 2020):**
- [x] Review dependencies
- [x] Test asset bundle size 
- [x] Restore BS CDN for now

**v1.0.7 > Create packages (Aug 23, 2020):**
- [x] Split primitiverocks package
- [x] Split primitivescenes package
- [x] Split primitivepebbles package
- [x] Split theme / dev staging

**v1.0.6 > Refine, optimisation (Aug 22, 2020):**
- [x] investigating vercel timeouts
- [x] tested / fixed vercel deployment - hopefully!
- [x] codesplit - halfed entry point size
- [x] theme / endpoint tests and optimisation
- [x] update wp url
- [x] fixed ssl cert chaining error on wp rest api.

**v1.0.5 > Refine / add theme props (Aug 11, 2020):**
- [x] fixed failing vercel deployment
- [x] fixed redirect/mapped domain ssl issues
- [x] installed ssl cert for api. works in browser - cert chaining error occurs in node

**v1.0.4 > Updates (July 29, 2020):**
- [x] updates and tests

**v1.0.3 > Refine / add theme props (July 28, 2020):**
- [x] docs

**v1.0.2 > Refine / add theme props (July 27, 2020):**
- [x] add theme-able modifiers to header
- [x] feat: use bootrap collapseOnSelect with Link
- [x] FIX: menu collapse / routing

**v1.0.1 > Refine / add theme props (July 23, 2020):**
- [x] add theme-able props and defaults to footer and lower sections
- [x] bootstrap cdn removed, implemented bs5 layout
- [x] move layout control to BS classes

**1.0.0 > Split code to public Frontity Theme repo (July 21, 2020):**
- [x] resolve dependency errors, depreciation errors
- [x] resolve BS emotion warnings
- [x] edited version of bootstrap css imported as CSS-IN-JS (needed for nav/tabs)
- [x] complied bootstrap css for grid, utils imported as CSS-IN-JS
- [x] custom theme merged
- [x] Rebased @ CHANGELOG 1.2.1 see @frontity/twentytwenty-theme
- [x] Publish to npm


####  @primitivedigital/primitiveone

**1.1.7 > Frontity updated (July 12, 2020):**
- [x] Check search console after domain migration /home/ is the main error url?

**1.1.6 > Update (June 28, 2020):**
- [x] Created bedrock wp twentytwenty child theme 
- [x] Setup wp theme repo
- [x] Researched modify functions.php (addFilters), add options.php or expose settings cpt
- [x] Updated primary domain

**1.1.5 > Update (June 22, 2020):**
- [x] New backend WP server setup

**1.1.4 > Update (June 21, 2020):**
- [x] Define CORS, SSL and sitemap issues
- [x] Apply updates / test styles
- [x] Plan new congig / re-deployment
- [x] Tested Vercel/DNS/WP config and plugins (Yoast/Redirect).

**1.1.3 > Update (May 22, 2020):**
- [x] Update gsap to v3
- [x] Add dev mode only logging

**1.1.2 > Update (May 19, 2020):**
- [x] Update Frontity / packages
- [x] Added Google Analytics package (May 10th): [@frontity/google-analytics](https://www.npmjs.com/package/@frontity/google-analytics)

**1.1.1 > Update (April 29, 2020):**
- [x] Develop base theming and config
- [x] Minimise Bootrap use / create shoelace implementation
- [x] Apply custom styling/theme to CF7 components

**1.1.0 > MAJOR Update (April 01, 2020):**
- [x] Fixed full URI redirects
- [x] Server clean up
- [x] Deployed new CDN and Edge Cache system

#### - [x] Update project structure;
- [x] New templating/config (views/blocks/elements)
- [x] Reduced CSS classes and global styles
- [x] Split post / page styles
- [x] New views / mountains
- [x] New content block components / rocks
- [x] New animated content block / scenes
- [x] New cpt/taxonomy components 
- [x] New social components
- [x] instagram: post(s)
- [x] facebook: like, page
- [x] Refine use of Bootstrap/CSS Frameworks and global/component CSS-IN-JS (emotion)

#### - [x] Intergrate New Frontity Features;
- [x] Custom Post Types and Taxonomies
- [x] Added some custom post types / taxonomies content to wp
- [x] Added CPT views and content blocks
- [x] Done via plugins ACF+CPT UI (I've not modified functions.php at all yet)
- [x] Switch/router plus hi-jacked some code updates from the twentytwenty theme
- [x] Added cf7 package and /contact page

**1.0.11 > Update (January 15, 2020):**
- Plan: CPT/Taxonomies, 
- Housekeeping!!!: tidy up frontity.settings.js
- Update: Frontity and all dependencies updated.

**1.0.10 > Update (December 15, 2019):** 
- Confirmed ["Query strings break routing / 404s" as resolved](https://github.com/frontity/frontity/issues/229)
- Refine: replace :nth-child with :nth-of-type in datamap css
- Update: Frontity and all dependencies updated.

**Update (October 27, 2019):** 
- Resolved: [React-bootstrap Tabs aria issue](https://github.com/react-bootstrap/react-bootstrap/pull/4331)
- Test: Images URLs modified for auto responsive sizing in mock-widget block
- Installed redirect plugin to prevent access to WP (rest server) frontend
- Config files updated
- Previous now deployment failed, adding mars-theme config/files back resolved this

**Update (October 09, 2019):**
- Footer updated
- Clean install performed
- Published [@primitivedigital/primitiveone as npm package](https://www.npmjs.com/package/primitiveone)
- Test, [preload/preconnect](https://developers.google.com/web/fundamentals/performance/resource-prioritization?utm_source=lighthouse&utm_medium=devtools#preconnect)

**Update (October 06, 2019):**
- Frontity core and package updated
- Clean wp install done to new subdomain
- Settings, readme and project structure updated, unused modules removed
- Began CSS code splitting

**1st Release/RC (October 01, 2019):**
- Performance enhancements and docs update  
- Moved static images to cloudinary and set format to auto

**1st Working Draft Release (September 16, 2019):**
- Deployed to Zeit Now with basic Google analytics snippet  
  
#### Ω - *the end*

```     
ooh, ooh. aah, aah! - 🐒 - 🐒 - 🐒 - 🐒 - 🐒 - 🐒 - 🐒 - 🐒 
```     
```                                                                              
 _____       _        _                        _               
|     |___ _| |___   | |_ _ _    _____ ___ ___| |_ ___ _ _ ___ 
| | | | .'| . | -_|  | . | | |  |     | . |   | '_| -_| | |_ -|
|_|_|_|__,|___|___|  |___|_  |  |_|_|_|___|_|_|_,_|___|_  |___|
                         |___|                        |___|    
```
> [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)

