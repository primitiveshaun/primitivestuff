(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[11],{231:function(e,t,a){"use strict";a.r(t);var n=a(5),s=a(1),r=a(3),l=a(13),i=a(480),c=(a(479),a(64)),o=a(0);var j=Object(r.connect)((function(e){var t=e.state,a=e.actions,n=e.libraries,r=t.source.get(t.router.link).totalPages,l=n.source.parse(t.router.link),i=l.path,j=l.page,u=l.query,p=j<r,x=j>1,g=n.source.stringify({path:i,page:j+1,query:u}),m=n.source.stringify({path:i,page:j-1,query:u});return Object(s.useEffect)((function(){p&&a.source.fetch(g)}),[]),Object(o.jsx)("div",null,p&&Object(o.jsx)(c.a,{link:g},Object(o.jsx)(b,null,"← Older posts")),x&&p&&" - ",x&&Object(o.jsx)(c.a,{link:m},Object(o.jsx)(b,null,"Newer posts →")))})),b=Object(n.a)("em",{target:"exlmt040",label:"Text"})({name:"xhf1f8",styles:"display:inline-block;margin-top:16px;"});t.default=Object(r.connect)((function(e){var t,a=e.state,n=(e.actions,a.source.get(a.router.link));return console.log("@cpt-subtimeline: data",n),Object(o.jsx)("main",null,Object(o.jsx)(u,null,Object(o.jsx)(l.b,null,Object(o.jsx)(l.c,null,Object(o.jsx)(l.a,null,n.isTimelineType?"timelines"===(t=n.taxType)?Object(o.jsx)("h1",null,Object(o.jsx)("span",{className:"scribe"},"Adventures in...")," Time"):(t=t.replace("-"," "),Object(o.jsx)("h1",null,Object(o.jsx)("span",{className:"scribe"},"Evolution of... ")," ",t)):Object(o.jsx)("h1",null,Object(o.jsx)("span",{className:"scribe"},"The Evolution of "),"Digital Stuff and Other Things"))))),Object(o.jsx)(p,null,Object(o.jsx)(l.b,null,Object(o.jsx)(i.a,{items:n.items}))),Object(o.jsx)(j,null))}));var u=Object(n.a)("header",{target:"e1c1k1fs0",label:"PageHeader"})({name:"14zj92v",styles:".container{padding-left:2rem;padding-right:2rem;div{margin-top:1rem;padding:1rem;text-align:center;color:ivory;background:rgba(12,17,43,0.9);border-radius:5rem;h1{font-weight:400;text-transform:capitalize;}h1 span{display:block;color:#f79862;font-weight:300;text-shadow:2px 1px 1px rgba(123,76,49,0.9);}.col{margin-top:0;padding-top:1rem;margin-left:1.2rem;margin-right:1.2rem;border-radius:3rem;border:none;box-shadow:1px 2px 6px #000;}}}"}),p=Object(n.a)("section",{target:"e1c1k1fs1",label:"PageBody"})({name:"148j18p",styles:"max-width:80%;margin:auto;"})}}]);