"use strict";(self.webpackChunkgoit_react_hw_05_new_movies=self.webpackChunkgoit_react_hw_05_new_movies||[]).push([[962],{8962:function(t,e,r){r.r(e),r.d(e,{default:function(){return d}});var n=r(5861),a=r(9439),u=r(7757),c=r.n(u),s=r(2791),i=r(7689),o=r(7021),f="ReviewListItem_author__4z7Kh",p=r(184),v=function(t){var e=t.author,r=t.content;return(0,p.jsxs)("li",{children:[(0,p.jsxs)("p",{className:f,children:["Author: ",e]}),(0,p.jsx)("p",{children:r})]})},h="ReviewList_reviewList__YW-0o",d=function(){var t=(0,i.UO)().movieId,e=(0,s.useState)([]),r=(0,a.Z)(e,2),u=r[0],f=r[1];return(0,s.useEffect)((function(){(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.Hx)(t);case 3:r=e.sent,f(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[t]),(0,p.jsx)(p.Fragment,{children:0===u.length?(0,p.jsx)("div",{children:"We don't have any reviews for this movie."}):(0,p.jsx)("ul",{className:h,children:u.map((function(t){var e=t.id,r=t.author,n=t.content;return(0,p.jsx)(v,{author:r,content:n},e)}))})})}},7021:function(t,e,r){r.d(e,{Hx:function(){return f},Y5:function(){return i},mv:function(){return s},uV:function(){return o},wr:function(){return c}});var n=r(5861),a=r(7757),u=r(759);u.Z.defaults.baseURL="https://www.themoviedb.org/3/",u.Z.defaults.params={api_key:"d3ab88c1c4da9baa38cb88803fe963d1"};var c=function(){var t=(0,n.Z)(a.mark((function t(){var e;return a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("trending/movie/day");case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,n.Z)(a.mark((function t(e){var r;return a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("search/movie?query=".concat(e));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(a.mark((function t(e){var r;return a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(a.mark((function t(e){var r;return a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"/credits?"));case 2:return r=t.sent,t.abrupt("return",r.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(a.mark((function t(e){var r;return a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"/reviews?"));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=962.d658075b.chunk.js.map