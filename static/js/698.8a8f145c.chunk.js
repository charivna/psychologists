"use strict";(self.webpackChunkpsychologists=self.webpackChunkpsychologists||[]).push([[698],{5698:function(n,r,e){e.r(r),e.d(r,{default:function(){return m}});var t,o=e(9439),i=e(2791),a=e(673),c=e(5410),u=e(4972),s=e(168),l=e(2683).ZP.p(t||(t=(0,s.Z)(["\n  max-width: 1440px;\n  margin-top: 50px;\n  font-size: 50px;\n"]))),f=e(804),h=e(3280),p=e(184),d=function(n){var r=n.filterOption,e=(0,i.useState)([]),t=(0,o.Z)(e,2),s=t[0],d=t[1],v=(0,i.useState)(1),g=(0,o.Z)(v,2),m=g[0],x=g[1],j=(0,i.useCallback)((function(){try{var n,r=null===(n=a.I.currentUser)||void 0===n?void 0:n.uid;if(r){var e=JSON.parse(localStorage.getItem("favorites-".concat(r)))||[];d(e)}}catch(t){console.error("Error fetching data:",t)}}),[]);(0,i.useEffect)((function(){var n=(0,u.Aj)(a.I,(function(n){n&&j()}));return function(){return n()}}),[j]);var C=function(n,r){switch(r){case"A to Z":return n.slice().sort((function(n,r){return n.name.localeCompare(r.name)}));case"Z to A":return n.sort((function(n,r){return r.name.localeCompare(n.name)}));case"Less than 10$":return n.filter((function(n){return n.price_per_hour<10}));case"Greater than 10$":return n.filter((function(n){return n.price_per_hour>10}));case"Popular":return n.filter((function(n){return n.rating>4}));case"Non popular":return n.filter((function(n){return n.rating<=4}));default:return n}}(s,r),Z=function(){j()};return(0,p.jsx)("div",{children:0===C.length?(0,p.jsx)(f.HeaderContainer,{children:(0,p.jsx)(l,{children:"No favorites yet. You can choose it in catalog."})}):(0,p.jsxs)("div",{children:[C.slice(0,3*m).map((function(n,r){return(0,p.jsx)(c.Z,{person:n,handleFavorite:Z,sourceComponent:"FavoritePage"},r)})),C.length>3*m&&(0,p.jsx)(h.p$,{onClick:function(){var n=C.length-3*m,r=Math.min(3,n);x((function(n){return n+r}))},children:"Load more"})]})})},v=e(117),g=e(6966),m=function(){var n=(0,i.useState)("Show all"),r=(0,o.Z)(n,2),e=r[0],t=r[1];return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(g.r,{children:[(0,p.jsx)(v.Z,{onFilterChange:function(n){t(n)}}),(0,p.jsx)(d,{filterOption:e})]})})}}}]);
//# sourceMappingURL=698.8a8f145c.chunk.js.map