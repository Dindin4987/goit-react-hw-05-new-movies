"use strict";(self.webpackChunkgoit_react_hw_05_new_movies=self.webpackChunkgoit_react_hw_05_new_movies||[]).push([[680],{9645:function(t,e,r){r.d(e,{e:function(){return f}});var n="MovieList_movieList__uFrOZ",a=r(7689),u=r(1087),c="MovieListItem_movieListItem__B2nuH",s="MovieListItem_link__LGsEq",i=r(184),o=function(t){var e=t.id,r=t.title,n=(0,a.TH)();return(0,i.jsx)("li",{className:c,children:(0,i.jsx)(u.rU,{className:s,to:"/movies/".concat(e),state:{from:n},children:r})})},f=function(t){var e=t.movies;return(0,i.jsx)("ul",{className:n,children:e.map((function(t){var e=t.id,r=t.title;return(0,i.jsx)(o,{id:e,title:r},e)}))})}},680:function(t,e,r){r.r(e);var n=r(5861),a=r(9439),u=r(7757),c=r.n(u),s=r(7021),i=r(5997),o=r(9645),f=r(2791),v=r(184);e.default=function(){var t=(0,f.useState)([]),e=(0,a.Z)(t,2),r=e[0],u=e[1];return(0,f.useEffect)((function(){(0,n.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,s.wr)();case 3:e=t.sent,u(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}),[]),(0,v.jsxs)("div",{children:[(0,v.jsx)("h2",{children:"Trending Movies"}),0===r.length?(0,v.jsx)(i.a,{}):(0,v.jsx)(o.e,{movies:r})]})}},7021:function(t,e,r){r.d(e,{Hx:function(){return f},Y5:function(){return i},mv:function(){return s},uV:function(){return o},wr:function(){return c}});var n=r(5861),a=r(7757),u=r(759);u.Z.defaults.baseURL="https://www.themoviedb.org/3/",u.Z.defaults.params={api_key:"d3ab88c1c4da9baa38cb88803fe963d1"};var c=function(){var t=(0,n.Z)(a.mark((function t(){var e;return a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("trending/movie/day");case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,n.Z)(a.mark((function t(e){var r;return a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("search/movie?query=".concat(e));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(a.mark((function t(e){var r;return a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(a.mark((function t(e){var r;return a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"/credits?"));case 2:return r=t.sent,t.abrupt("return",r.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(a.mark((function t(e){var r;return a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"/reviews?"));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=680.b128c3b1.chunk.js.map