(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[3],{207:function(e,t,a){"use strict";a.r(t);var r=a(4),n=a(1),i=a(5),o=a(448),s=a(449),l=a(450),c=a(452),b=(a(451),a(453)),d=a(70),j=a(0);t.default=Object(i.connect)((function(e){var t=e.state,a=e.actions,r=t.source.get(t.router.link);return Object(n.useEffect)((function(){a.source.fetch(t.router.link)}),[]),console.log("@cpt-subtimeline: data",r),r.items.sort(Object(d.d)("year")),Object(j.jsx)(u,{className:"container-fluid"},Object(j.jsx)(m,null,Object(j.jsx)(o.a,null,Object(j.jsx)(s.a,null,Object(j.jsx)(l.a,null,r.isTimelineType?Object(d.b)(r.taxType):Object(j.jsx)("h1",null,Object(j.jsx)("span",{className:"scribe"},"The Evolution of "),"Digital Stuff and Other Things"))))),Object(j.jsx)(g,null,Object(j.jsx)(o.a,null,r.items.map((function(e){var a=e.type,r=e.id,n=t.source[a][r];return Object(j.jsx)(c.a,{key:n.id,item:n})})))),Object(j.jsx)(b.a,null))}));var u=Object(r.a)("main",{target:"efqztim0",label:"StyledList"})({name:"joz4tw",styles:"background-color:transparent;border-top:3px solid rgba(12,17,43,0.9);"}),m=Object(r.a)("header",{target:"efqztim1",label:"PageHeader"})({name:"14zj92v",styles:".container{padding-left:2rem;padding-right:2rem;div{margin-top:1rem;padding:1rem;text-align:center;color:ivory;background:rgba(12,17,43,0.9);border-radius:5rem;h1{font-weight:400;text-transform:capitalize;}h1 span{display:block;color:#f79862;font-weight:300;text-shadow:2px 1px 1px rgba(123,76,49,0.9);}.col{margin-top:0;padding-top:1rem;margin-left:1.2rem;margin-right:1.2rem;border-radius:3rem;border:none;box-shadow:1px 2px 6px #000;}}}"}),g=Object(r.a)("section",{target:"efqztim2",label:"PageBody"})({name:"148j18p",styles:"max-width:80%;margin:auto;"})}}]);