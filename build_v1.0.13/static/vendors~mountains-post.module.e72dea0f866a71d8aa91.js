(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[13,8],{136:function(e,t,r){"use strict";var a=r(4),o=(r(1),r(35)),n=r(0);t.a=e=>{var{message:t}=e;return Object(n.jsx)(i,null,Object(n.jsx)("div",null,Object(n.jsx)("p",null,t||"loading...")),Object(n.jsx)("ul",null,Object(n.jsx)("li",null),Object(n.jsx)("li",null),Object(n.jsx)("li",null),Object(n.jsx)("li",null),Object(n.jsx)("li",null),Object(n.jsx)("li",null)))};var i=Object(a.a)("div",{target:"e1srmaui0",label:"StyledDiscoLoader"})("ul{margin:0 auto;padding:0;display:flex;justify-content:center;}ul li{list-style:none;width:30px;height:30px;background:#fff;border-radius:50%;animation:",o.c," 1.6s ease-in-out infinite;}ul li:nth-of-type(1){animation-delay:-1.4s;background:#ffff00;box-shadow:0 0 30px #ffff00;}ul li:nth-of-type(2){animation-delay:-1.2s;background:#76ff03;box-shadow:0 0 30px #76ff03;}ul li:nth-of-type(3){animation-delay:-1s;background:#f06292;box-shadow:0 0 30px #f06292;}ul li:nth-of-type(4){animation-delay:-0.8s;background:#4fc3f7;box-shadow:0 0 30px #4fc3f7;}ul li:nth-of-type(5){animation-delay:-0.6s;background:#ba68c8;box-shadow:0 0 30px #ba68c8;}ul li:nth-of-type(6){animation-delay:-0.4s;background:#f57c00;box-shadow:0 0 30px #f57c00;}")},140:function(e,t,r){"use strict";var a=r(4),o=(r(1),r(2)),n=r(27),i=r(0);t.a=Object(o.connect)(e=>{var{state:t,id:r,className:a}=e,o=t.source.attachment[r];if(!o)return null;var n=Object.values(o.media_details.sizes).map(e=>[e.source_url,e.width]).reduce((e,t,r,a)=>e.concat("".concat(t.join(" "),"w").concat(r!==a.length-1?", ":"")),"")||null;return Object(i.jsx)(l,null,Object(i.jsx)(c,{alt:o.title.rendered,src:o.source_url,srcSet:n}))});var l=Object(a.a)("div",{target:"e5hs01x0",label:"Container"})({name:"1ytm0nf",styles:"margin-top:1rem;height:400px;"}),c=Object(a.a)(n.a,{target:"e5hs01x1",label:"StyledImage"})({name:"g8a75k",styles:"display:block;height:100%;width:100%;object-fit:cover;border:solid 3px rgba(0,44,44,.3);border-radius:150px 15px 150px 15px/15px 150px 15px 150px;box-shadow:0 2px 2.2px rgba(0,0,0,0.034),0 6px 5.3px rgba(0,0,0,0.048),0 12px 10px rgba(0,0,0,0.06),0 24px 15.9px rgba(0,0,0,0.072),0 35.8px 23.4px rgba(0,0,0,0.086),0 40px 30px rgba(0,0,0,0.12);"})},146:function(e,t,r){"use strict";var a=r(2),o=r.n(a);t.a=Object(a.loadable)({resolved:{},chunkName:()=>"list",isReady(e){var t=this.resolve(e);return!0===this.resolved[t]&&!!r.m[t]},importAsync:()=>r.e(1).then(r.bind(null,88)),requireAsync(e){var t=this,r=this.resolve(e);return this.resolved[r]=!1,this.importAsync(e).then((function(e){return t.resolved[r]=!0,e}))},requireSync(e){var t=this.resolve(e);return r(t)},resolve(){return 88}})},96:function(e,t,r){"use strict";r.r(t);var a=r(4),o=r(1),n=r.n(o),i=r(2),l=r(0),c=r(8),s=e=>Object(l.css)(".post{a{color:inherit;border-bottom:2px solid ",e.warning,";background-image:linear-gradient(120deg,",e.warning," 0%,",e.warning," 100%);background-repeat:no-repeat;background-size:100% 0.0em;background-position:0 100%;transition:background-size 0.125s ease-in;&:hover{text-decoration:none;background-size:100% 100%;color:black;}}.intro{font-family:'Hepta Slab';text-align:center;padding:3px 5%;font-size:1.3rem;}.hello{padding:1rem 1.2rem;font-family:'Hepta Slab';font-size:2rem;color:",e.coal,";a{color:",e.secondary,";border-bottom:none;background:none;transition:all 0.125s ease-in;&:hover{text-decoration:none;background:none;color:",e.danger,";}}}.blurb{padding:1rem 1.2rem;font-size:2rem;font-family:'Hepta Slab',Georgia;color:",e.primary,";a{color:",e.primary,";border-bottom:none;background:none;transition:all 0.125s ease-in;&:hover{text-decoration:none;background:none;color:",e.info,";}}}.panache{padding:.5rem 5% .1rem;font-size:1.6rem;font-family:Baskerville,Georgia,serif;color:rgba(",e.rgb.black,",0.7);strong,a{color:",e.primary,";border-bottom:none;background:none;transition:all 0.125s ease-in;}}.fleuron{font-size:3rem;color:rgba(",e.primary,",0.6);a{color:rgba(",e.rgb.warning,",0.6) !important;text-decoration:none;background:transparent !important;border:none !important;&::hover{color:rgba(",e.rgb.danger,",0.6) !important;background:transparent !important;border:none !important;}}}.fleuron.has-text-align-center{margin-top:2.5rem;text-align:center;a{vertical-align:middle;line-height:3rem;}em{display:inline-block;color:",e.coal,";font-size:.5rem;letter-spacing:2px;vertical-align:middle;line-height:3rem;}}.circle{padding:2rem 1rem 2rem 1rem;position:relative;left:-2rem;font-family:'Hepta Slab';font-size:1.3rem;text-shadow:1px 1px 0 rgba(",e.rgb.gray,',0.3);&::before{content:"";display:block;position:absolute;top:-0.3rem;left:-1rem;width:6rem;height:6rem;border-radius:50px;background-color:rgba(',e.rgb.gray,",0.2);}}.circle-primary{text-shadow:1px 1px 0 rgba(",e.rgb.primary,",0.3);&::before{background-color:rgba(",e.rgb.primary,",0.2);}}.circle-secondary{text-shadow:1px 1px 0 rgba(",e.rgb.secondary,",0.3);&::before{background-color:rgba(",e.rgb.secondary,",0.2);}}.circle-warning{text-shadow:1px 1px 0 rgba(",e.rgb.warning,",0.3);&::before{background-color:rgba(",e.rgb.warning,",0.2);}}}.btn{display:block;max-width:300px;margin:2rem auto;a{display:block;padding:.5rem;color:",e.white,";font-size:1.2rem;text-align:center;text-decoration:none;border:none;background:transparent;opacity:.9;&:hover{color:",e.white,";opacity:1;}}&:hover a{color:",e.white,";opacity:1;}}.btn-primary{text-shadow:2px 2px 2px ",e.rgb.black,",0.2);background-color:",e.primary,";border:1px solid ",e.primary,";border-left:5px solid ",e.primary,";transition:all .5s ease-in-out;&:hover,&:active,&:focus{background-color:",e.primary,";border:1px solid ",e.primary,";max-width:360px;}}"),b=e=>Object(l.css)('.has-text-align-left,.wp-block-image .alignleft{width:80%;margin-left:auto;margin-right:auto;}.has-text-align-center,.wp-block-image .aligncenter{width:60%;margin-left:auto;margin-right:auto;text-align:justify;}.overlay-text figure{position:relative;figcaption{padding:1rem;position:absolute;top:45%;left:50%;transform:translate(-50%,-50%);font-family:"Playfair Display";font-size:5rem;color:black;text-align:center;mix-blend-mode:screen;background-color:rgba(244,220,211,.8);}}.equation figure{overflow:hidden;border-radius:150px 15px 150px 15px/15px 150px 15px 150px;box-shadow:0 2px 2.2px rgba(0,0,0,0.034),0 6px 5.3px rgba(0,0,0,0.048),0 12px 10px rgba(0,0,0,0.06);figcaption{padding:.5rem 1.5rem 1.5rem;font-family:"Amatic SC";font-size:2rem;text-align:center;color:black;text-shadow:1px 12px 0 rgba(255,255,255,.8);}}.wp-block-image{margin-bottom:1.5rem;}blockquote.has-text-align-center{position:relative;cite{font-size:.7rem;letter-spacing:3px;a{color:',e.gray,';font-weight:bold;text-decoration:none;}}&::before{content:"";display:block;height:135px;width:240px;position:absolute;left:-243px;top:0;background-image:url("https://media.giphy.com/media/aTGwuEFyg6d8c/giphy.gif");background-size:contain;background-repeat:no-repeat;opacity:.8;}}'),d=e=>Object(l.css)([s(e),b(e)],""),g=r(146),p=r(21),m=r(140),x=r(136);t.default=Object(i.connect)(e=>{var{state:t,actions:r,libraries:a}=e,i=t.source.get(t.router.link),s=t.source[i.type][i.id],b=new Date(s.date),p=i.type,v=i.id,z=t.source.author[s.author];return Object(o.useEffect)(()=>{r.source.fetch("/"),g.a.preload(),t.theme.debug&&console.log("@post: state",t)},[]),i.isReady?i.isReady?Object(l.jsx)(n.a.Fragment,null,Object(l.jsx)(l.Global,{styles:d(t.theme.colors)}),Object(l.jsx)(f,{className:"post "+p,id:p+"-"+v},Object(l.jsx)(c.b,null,Object(l.jsx)(j,{className:"row"},Object(l.jsx)(c.a,null,Object(l.jsx)(y,{dangerouslySetInnerHTML:{__html:s.title.rendered}}))),i.isPost&&Object(l.jsx)(c.c,null,Object(l.jsx)(c.a,null,Object(l.jsx)(h,{link:z.link},Object(l.jsx)(w,null," ",Object(l.jsx)("b",null,z.name)," wrote this!")),Object(l.jsx)(O,null," "," "," on ",Object(l.jsx)("b",null,b.toDateString())))),Object(l.jsx)(c.c,null,Object(l.jsx)(c.a,null,t.theme.featured.showOnPost&&Object(l.jsx)(m.a,{id:s.featured_media}))),Object(l.jsx)(c.c,null,Object(l.jsx)(k,null,Object(l.jsx)(a.html2react.Component,{html:s.content.rendered})))))):null:Object(l.jsx)(u,null,Object(l.jsx)(x.a,null))});var u=Object(a.a)("div",{target:"e18wh13q0",label:"Loading"})({name:"76h8lj",styles:"padding:3rem;font-size:1.5rem;text-align:center;"}),f=Object(a.a)("main",{target:"e18wh13q1",label:"StyledMain"})(""),h=Object(a.a)(p.a,{target:"e18wh13q2",label:"StyledLink"})({name:"5quh7p",styles:"padding:15px 0;color:#87af4e;text-decoration:none;&:hover{color:plum;text-decoration:underline;}"}),j=Object(a.a)("header",{target:"e18wh13q3",label:"PostHead"})({name:"xi606m",styles:"text-align:center;"}),y=Object(a.a)("h1",{target:"e18wh13q4",label:"PostTitle"})({name:"nxrqtd",styles:"padding:2rem 0 1.5rem;margin:0 15% 1rem;font-size:1.5rem;font-weight:300;letter-spacing:1rem;line-height:1.6;text-transform:capitalize;color:rgba(12,17,43,0.7);"}),w=Object(a.a)("p",{target:"e18wh13q5",label:"PostAuthor"})({name:"1l39ege",styles:'margin-bottom:.5rem;color:rgba(12,17,43,0.9);font-size:1.2rem;font-family:"Amatic SC";text-align:center;'}),O=Object(a.a)("p",{target:"e18wh13q6",label:"PostDate"})({name:"1wwjytp",styles:"display:block;margin:0;padding:0;color:rgba(12,17,43,0.7);font-size:1.2rem;font-family:Courier;text-align:center;line-height:1.3rem;"}),k=Object(a.a)(c.a,{target:"e18wh13q7",label:"PostBody"})({name:"2ss87a",styles:"padding-top:3rem;padding-bottom:2rem;font-size:1.1rem;color:rgba(12,17,43,0.8);word-break:break-word;background:transparent;"})}}]);