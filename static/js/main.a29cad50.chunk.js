(this.webpackJsonplevfestapi=this.webpackJsonplevfestapi||[]).push([[0],Array(26).concat([function(e,t,n){},function(e,t,n){},function(e,t,n){},,,function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(20),i=n.n(c),r=(n(26),n(27),n(28),n(13)),l=n(2),u=n(6);function d(e,t){var n,a,s=(n="id",a=t,e.map((function(e){return e[n]})).indexOf(a)),c=[];return c.push(e[s]),c}function o(e){var t=!1,n=new Date;return Date.parse(n)>Date.parse(e)&&(t=!0),t}function j(e,t,n){return e.some((function(e){return e[t]===n}))}function v(e,t){for(var n=-1,a=0;a<e.length;a++){0===Object.keys(e[a]).indexOf(t)&&(n=a)}return n}function _(e){var t=e.split(" "),n={};n.dayofweek=t[0].slice(0,-1),n.day=t[2].slice(0,-1),n.month=t[1],n.year=t[3],n.hour=t[5].slice(0,2),n.mins=t[5].slice(3,5);var a=n.mins;a="00"===a?"":":"+a;var s=parseInt(n.hour);return s<12&&(n.ampm=n.hour+a+"am"),12===s&&(n.ampm=n.hour+a+"pm"),s>12&&(n.ampm=s-12+a+"pm"),"1"===n.day?n.daysuffix="1st":"2"===n.day?n.daysuffix="2nd":"3"===n.day?n.daysuffix="3rd":"21"===n.day?n.daysuffix="21st":"22"===n.day?n.daysuffix="22nd":"23"===n.day?n.daysuffix="23rd":n.daysuffix=n.day+"th",n}var b=n(11),h=n.n(b),O=n(14);function x(e,t,n){return m.apply(this,arguments)}function m(){return(m=Object(O.a)(h.a.mark((function e(t,n,a){var s,c,i,r,l,u;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=n[t],c=t.split(/(?=[A-Z])/).join("_"),i="ADD_"+c.toUpperCase()+"_DATA",r=c.toUpperCase()+"_DATA_LOADED",e.prev=4,e.next=7,fetch(s);case 7:if(!(l=e.sent).ok){e.next=16;break}return e.next=11,l.json();case 11:u=e.sent,a({type:i,value:u}),a({type:r}),e.next=17;break;case 16:throw new Error("Something went wrong");case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(4),console.error(e.t0);case 22:case"end":return e.stop()}}),e,null,[[4,19]])})))).apply(this,arguments)}function f(e){return p.apply(this,arguments)}function p(){return(p=Object(O.a)(h.a.mark((function e(t){var n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t.url);case 3:if(!(n=e.sent).ok){e.next=12;break}return e.next=7,n.json();case 7:a=e.sent,t.dispatchFunction({type:t.dispatchName,value:a[0]}),t.setState({displayData:a}),e.next=13;break;case 12:throw new Error("Something went wrong");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})))).apply(this,arguments)}function g(){return(g=Object(O.a)(h.a.mark((function e(t){var n,a,s,c,i,r,l;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.baseurl+t.year,a="ADD_"+t.dataName.toUpperCase()+"_DATA",s=t.dataName.toUpperCase()+"_DATA_LOADED",e.prev=3,e.next=6,fetch(n);case 6:if(!(c=e.sent).ok){e.next=14;break}return e.next=10,c.json();case 10:(i=e.sent).length>0?(t.dispatch({type:"SET_YEAR",value:t.year}),t.dispatch({type:a,value:i}),t.dispatch({type:s}),t.setTheState({displayData:i})):(t.dispatch({type:"SET_YEAR",value:t.year}),r=[],l={event_year:t.year},r.push(l),t.dispatch({type:a,value:r}),t.setTheState({displayData:i})),e.next=15;break;case 14:throw new Error("Something went wrong");case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(3),console.error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[3,17]])})))).apply(this,arguments)}var w=n(0),D=Object(a.createContext)(),y=(new Date).getFullYear(),N={festival:"http://www.levenshulmecommunityfestival.co.uk/api_levfest_basic_data",venuesList:"http://www.levenshulmecommunityfestival.co.uk/api_levfest_venues_list ",eventsList:"http://www.levenshulmecommunityfestival.co.uk/api_levfest_events_list/"+y,newsList:"http://www.levenshulmecommunityfestival.co.uk/api_levfest_news_list"};var T=function(e){var t={festivalLoaded:!1,venuesListLoaded:!1,eventsListLoaded:!1,newsListLoaded:!1,feedsCount:0,loadCount:0,festivalData:[],venuesListData:[],venuesLongData:[],eventsListData:[],eventsListDataOld:[],eventsLongData:[],newsListData:[],newsLongData:[],year:y},n=Object(a.useReducer)((function(e,t){switch(t.type){case"FEEDS_COUNTED":return Object(l.a)(Object(l.a)({},e),{},{feedsCount:t.value});case"SET_YEAR":return Object(l.a)(Object(l.a)({},e),{},{year:t.value});case"FESTIVAL_DATA_LOADED":return Object(l.a)(Object(l.a)({},e),{},{festivalLoaded:!0,loadCount:e.loadCount+1});case"VENUES_LIST_DATA_LOADED":return Object(l.a)(Object(l.a)({},e),{},{venuesListLoaded:!0,loadCount:e.loadCount+1});case"EVENTS_LIST_DATA_LOADED":return Object(l.a)(Object(l.a)({},e),{},{eventsListLoaded:!0,loadCount:e.loadCount+1});case"NEWS_LIST_DATA_LOADED":return Object(l.a)(Object(l.a)({},e),{},{newsListLoaded:!0,loadCount:e.loadCount+1});case"ADD_FESTIVAL_DATA":return Object(l.a)(Object(l.a)({},e),{},{festivalData:t.value[0]});case"ADD_NEWS_LIST_DATA":return Object(l.a)(Object(l.a)({},e),{},{newsListData:t.value});case"ADD_VENUES_LIST_DATA":return Object(l.a)(Object(l.a)({},e),{},{venuesListData:t.value});case"ADD_EVENTS_LIST_DATA":return Object(l.a)(Object(l.a)({},e),{},{eventsListData:t.value});case"ADD_NEWS_DATA":var n=e.newsLongData,a=t.value;return n.some((function(e){return e.id===a.id}))?Object(l.a)({},e):(n.push(t.value),Object(l.a)(Object(l.a)({},e),{},{newsLongData:n}));case"ADD_VENUE_DATA":var s=e.venuesLongData,c=t.value;return s.some((function(e){return e.id===c.id}))?Object(l.a)({},e):(s.push(t.value),Object(l.a)(Object(l.a)({},e),{},{venuesLongData:s}));case"ADD_EVENT_DATA":var i=e.eventsLongData,u=t.value;return i.some((function(e){return e.id===u.id}))?Object(l.a)({},e):(i.push(t.value),Object(l.a)(Object(l.a)({},e),{},{eventsLongData:i}));case"ADD_EVENTS_LIST_OLD_DATA":var d=e.year;console.log("year in reducer",d);var o="year"+d,j=e.eventsListDataOld;if(j.length>0){if(v(j,o)>=0)return Object(l.a)({},e);var _=Object(r.a)({},o,t.value);return j.push(_),Object(l.a)(Object(l.a)({},e),{},{eventsListDataOld:j})}var b=Object(r.a)({},o,t.value);return j.push(b),Object(l.a)(Object(l.a)({},e),{},{eventsListDataOld:j});default:return Object(l.a)({},e)}}),t),s=Object(u.a)(n,2),c=s[0],i=s[1];return Object(a.useEffect)((function(){!function(e,t){t({type:"FEEDS_COUNTED",value:function(e){var t=0;for(var n in e)e.hasOwnProperty(n)&&++t;return t}(e)})}(N,i)}),[]),Object(a.useEffect)((function(){x("festival",N,i)}),[]),Object(a.useEffect)((function(){x("venuesList",N,i)}),[]),Object(a.useEffect)((function(){x("eventsList",N,i)}),[]),Object(a.useEffect)((function(){x("newsList",N,i)}),[]),Object(w.jsx)(D.Provider,{value:{mainState:c,dispatch:i},children:e.children})},L=n(3),A=n(4);n(31),n(32);var S=function(e){return Object(w.jsx)(L.b,{to:"/",children:Object(w.jsx)("div",{className:"header_logo",children:Object(w.jsx)("img",{src:e.logosource,alt:"festival logo"})})})};var E=function(){var e=Object(a.useContext)(D).mainState.festivalData;return Object(w.jsxs)("header",{children:[Object(w.jsx)(S,{logosource:e?e.festival_logo:null}),Object(w.jsxs)("div",{className:"header_text",children:[Object(w.jsxs)("h3",{children:[" ",e?e.festival_title:null]}),Object(w.jsx)("p",{children:e?e.festival_dates:null})]})]})};n(38),n(39);var k=function(){return Object(w.jsx)("nav",{className:"header-links",children:Object(w.jsxs)("ul",{children:[Object(w.jsx)("li",{children:Object(w.jsx)(L.b,{to:"/",children:"Home"})}),Object(w.jsx)("li",{children:Object(w.jsx)(L.b,{to:"/events",children:"What's On"})}),Object(w.jsx)("li",{children:Object(w.jsx)(L.b,{to:"/venues",children:"Venues"})})]})})};var C=function(){return Object(w.jsx)("footer",{className:"footer",children:Object(w.jsx)(k,{})})},I=n.p+"static/media/hero1.a502dca4.jpg";n(40),n(41);var F=function(e){return Object(w.jsxs)("div",{className:"hero_container",children:[Object(w.jsxs)("div",{className:"hero_container__text",children:[Object(w.jsx)("h2",{children:e.title}),Object(w.jsx)("h3",{children:e.dates}),Object(w.jsx)("p",{children:e.text})," "]}),Object(w.jsx)("div",{className:"hero_container__logo",children:Object(w.jsx)("img",{src:e.logosource,alt:"festival logo"})})]})};n(42),n(43);var q=function(e){return Object(w.jsx)("div",{className:e.type,children:Object(w.jsx)("img",{src:e.source,alt:e.altText})})};var V=function(e){return Object(w.jsxs)("div",{className:"front_page_big_card box_drop_shadow",children:[Object(w.jsx)("div",{className:"front_page_big_card__text_top",children:Object(w.jsx)("h2",{children:e.title})}),Object(w.jsx)("div",{className:"front_page_big_card__text_middle",children:Object(w.jsx)("p",{children:e.text})}),Object(w.jsx)("div",{className:"front_page_big_card__text_bottom",children:Object(w.jsx)("p",{children:e.bottomText})}),Object(w.jsx)(L.b,{to:e.link,children:Object(w.jsx)(q,{source:e.IMGsource,altText:e.IMGaltText,type:e.IMGtype})})]})};n(44),n(45);var W=function(e){if(e.date){var t=_(e.date);return Object(w.jsxs)("h3",{className:"date_time",children:[t.dayofweek," ",t.daysuffix," of ",t.month," at ",t.ampm]})}return null};n(46);var M=function(e){return Object(w.jsx)(L.b,{to:"/".concat(e.link,"/").concat(e.id),children:Object(w.jsxs)("div",{className:"front_page_data_card_block",children:[Object(w.jsx)("div",{className:"front_page_data_card_block_image box_drop_shadow",children:Object(w.jsx)(q,{type:"square",source:e.image,altText:e.title})}),Object(w.jsxs)("div",{className:"front_page_data_card_block_text",children:[Object(w.jsx)("h3",{children:e.title}),e.date?Object(w.jsx)(W,{date:e.date}):null,e.venue?Object(w.jsxs)("p",{children:["At ",e.venue]}):null,e.newsintro?Object(w.jsx)("p",{children:e.newsintro}):null]})]})})};var G=function(){var e=Object(a.useContext)(D).mainState.eventsListData;if(e){var t=e.filter((function(e){return"highlight"===e.event_highlight}));return Object(w.jsx)("div",{className:"front_page_event_data_cards",children:t.map((function(e){return Object(w.jsx)(M,{id:e.id,link:"events",title:e.event_title,date:e.event_date_time,venue:e.event_venue,introduction:e.event_introduction,image:e.event_image_1},e.id)}))})}return null};n(47);var U=function(){var e=Object(a.useContext)(D).mainState.newsListData;if(e){var t=e.slice(0,4);return Object(w.jsx)("div",{className:"front_page_event_data_cards",children:t.map((function(e){return Object(w.jsx)(M,{id:e.id,link:"news",title:e.news_title,image:e.news_image_1,newsintro:e.news_introduction},e.id)}))})}return null};n(48);var Y=function(){var e=Object(a.useContext)(D).mainState.venuesListData;if(e){var t=e.filter((function(e){return"highlight"===e.venue_highlight}));return Object(w.jsx)("div",{className:"front_page_venue_data_cards",children:t.map((function(e){return Object(w.jsx)(M,{id:e.id,link:"venues",title:e.venue_title,image:e.venue_image_1,introduction:e.venue_introduction},e.id)}))})}return null};var R=function(){var e=Object(a.useContext)(D).mainState.festivalData,t=Object(a.useState)({itemOne:!1,itemTwo:!1,itemThree:!1}),n=Object(u.a)(t,2),s=n[0],c=n[1],i=Object(a.useRef)(null),r=Object(a.useRef)(null),d=Object(a.useRef)(null);return Object(a.useLayoutEffect)((function(){var e=window.innerHeight/2,t=function(e){return e.getBoundingClientRect().top},n=t(i.current),a=t(r.current),s=t(d.current),u=function(){var t=window.scrollY;s<t+e&&c((function(e){return Object(l.a)(Object(l.a)({},e),{},{itemThree:!0})})),a<t+e&&c((function(e){return Object(l.a)(Object(l.a)({},e),{},{itemTwo:!0})})),n<t+e&&c((function(e){return Object(l.a)(Object(l.a)({},e),{},{itemOne:!0})}))};return window.addEventListener("scroll",u),function(){return window.removeEventListener("scroll",u)}}),[]),Object(w.jsxs)("div",{className:"front_page",children:[Object(w.jsx)(F,{logosource:e?e.festival_logo:null,text:e?e.festival_intro:null,IMGsource:I}),Object(w.jsxs)("div",{className:"front_page__cards",children:[Object(w.jsxs)("div",{ref:i,className:"card_wrapper animatestart".concat(s.itemOne?" triggered":""),children:[Object(w.jsx)(V,{title:"Whats On This Year",text:"What is On This Year then",bottomText:"events",link:"/events",IMGsource:e?e.event_header_bg_image:null,IMGaltText:"alt text is - What's On This Year",IMGtype:"coverSpace"}),Object(w.jsx)(G,{})]}),Object(w.jsxs)("div",{ref:r,className:"card_wrapper animatestart".concat(s.itemTwo?" triggered":""),children:[Object(w.jsx)(V,{title:"What's Happening",text:" What's going on now",bottomText:"news",link:"/news",IMGsource:e?e.news_header_bg_image:null,IMGaltText:"alt text is - What's going on now",IMGtype:"coverSpace"}),Object(w.jsx)(U,{})]}),Object(w.jsxs)("div",{ref:d,className:"card_wrapper animatestart".concat(s.itemThree?" triggered":""),children:[Object(w.jsx)(V,{title:"Where is it happening",text:" What's On Where",bottomText:"venues",link:"/venues",IMGsource:e?e.venue_header_bg_image:null,IMGaltText:"alt text is - What's On Where",IMGtype:"coverSpace"}),Object(w.jsx)(Y,{})]})]})]})};var H=function(){return Object(a.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),[]),null};var J=function(){var e=(new Date).getFullYear();return Object(w.jsxs)("div",{className:"content",children:[Object(w.jsx)(H,{}),Object(w.jsxs)("h1",{className:"page_h1",children:["The Levenshulme Festival ",e]}),Object(w.jsx)(R,{})]})};n(49),n(50);var z=function(e){return Object(w.jsxs)("div",{className:"event_card",children:[Object(w.jsxs)(L.b,{to:"/".concat(e.link,"/").concat(e.id),children:[Object(w.jsx)("div",{className:e.old?"event_card__text_top event_old":"event_card__text_top",children:Object(w.jsxs)("h2",{children:[" ",e.title]})})," "]}),Object(w.jsx)("div",{className:"event_card__text_middle",children:e.old?Object(w.jsx)("p",{className:"an_old_event",children:"This is an OLD event"}):Object(w.jsx)(W,{date:e.date})}),Object(w.jsxs)("div",{className:"event_card__text_bottom",children:[Object(w.jsxs)("p",{children:[" ",e.venue]}),Object(w.jsxs)("p",{children:[" ",e.introduction]})]}),Object(w.jsx)(q,{type:"square",source:e.image_1,altText:e.title})]})};var B=function(){var e=Object(a.useContext)(D).mainState.eventsListData;return e?Object(w.jsx)("div",{className:"events",children:e.map((function(e){return Object(w.jsx)(z,{old:o(e.event_date_time),id:e.id,link:"events",title:e.event_title,name:e.event_name,date:e.event_date_time,venue:e.event_venue,venue_id:e.event_venue_id,introduction:e.event_introduction,time:e.event_time_text,image_1:e.event_image_1},e.id)}))}):null};var P=function(){return Object(w.jsxs)("div",{className:"content",children:[Object(w.jsx)(H,{}),Object(w.jsx)("h1",{className:"page_h1",children:"Levenshulme Festival Events "}),Object(w.jsx)(B,{})]})};n(51),n(52);n(53);var Z=function(e){return Object(w.jsx)(L.b,{to:"/venues/".concat(e.venue_id),children:Object(w.jsxs)("h3",{className:"venue_link",children:[" at ",e.venue_name]})})};n(54);var K=function(e){if(e.date){var t=_(e.date);return Object(w.jsx)(w.Fragment,{children:t.year})}return null};var Q=function(e){if(e.date){var t=_(e.date);return Object(w.jsx)(w.Fragment,{children:t.month})}return null};var X=function(e){return Object(w.jsx)("div",{className:"old_event",children:Object(w.jsxs)("p",{children:[" ","This is an OLD event from ",Object(w.jsx)(Q,{date:e.date})," ",Object(w.jsx)(K,{date:e.date})]})})};var $=function(e){var t=e.data;return t?Object(w.jsxs)("div",{className:"event_detail",children:[Object(w.jsxs)("div",{className:"event_detail_text",children:[Object(w.jsx)("h2",{children:t.event_title}),Object(w.jsx)(W,{date:t.event_date_time}),Object(w.jsx)(Z,{venue_name:t.event_venue,venue_id:t.event_venue_id}),t.event_admission?Object(w.jsxs)("p",{className:"admission",children:["Admission: ",t.event_admission," "]}):null,e.old?Object(w.jsx)(X,{date:t.event_date_time}):null,Object(w.jsx)("p",{children:t.event_introduction}),Object(w.jsx)("div",{className:"event_body",dangerouslySetInnerHTML:{__html:t.event_body}})]}),Object(w.jsxs)("div",{className:"event_detail_images",children:[t.event_poster_original?Object(w.jsx)(q,{type:"square",source:t.event_poster_original,altText:t.name}):null,t.event_image_1?Object(w.jsx)(q,{type:"square",source:t.event_image_1,altText:t.name}):null,t.event_image_2?Object(w.jsx)(q,{type:"square",source:t.event_image_2,altText:t.name}):null,t.event_image_3?Object(w.jsx)(q,{type:"square",source:t.event_image_3,altText:t.name}):null]})]}):null};var ee=function(e){var t=Object(a.useState)({displayData:[]}),n=Object(u.a)(t,2),s=n[0],c=n[1],i=Object(a.useContext)(D).mainState.eventsLongData,r=Object(a.useContext)(D).dispatch,l=Object(A.f)().id;Object(a.useEffect)((function(){if(j(i,"id",l)){var e=d(i,l);c({displayData:e})}else{f({url:"http://www.levenshulmecommunityfestival.co.uk//api_events_long?event_id="+l,setState:c,dispatchFunction:r,dispatchName:"ADD_EVENT_DATA"})}}),[l]);var v=s.displayData;if(v.length>0){var _=o(v[0].event_date_time);return Object(w.jsx)($,{old:_,data:v[0]})}return"loading"};var te=function(){return Object(w.jsxs)("div",{className:"content",children:[Object(w.jsx)(H,{}),Object(w.jsx)("h1",{className:"page_h1",children:"A Levenshulme Festival Event "}),Object(w.jsx)(ee,{})]})};var ne=function(e){var t=e.events;return t?Object(w.jsx)("div",{className:"events",children:t.map((function(e){return Object(w.jsx)(z,{id:e.id,link:"events",title:e.event_title,name:e.event_name,date:e.event_date_time,venue:e.event_venue,venue_id:e.event_venue_id,introduction:e.event_introduction,time:e.event_time_text,image_1:e.event_image_1},e.id)}))}):null};var ae=function(){var e=Object(a.useState)({year:"2020"}),t=Object(u.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)({displayData:[]}),i=Object(u.a)(c,2),r=i[0],l=i[1],d="year"+n.year,o=Object(a.useContext)(D).mainState.eventsListDataOld,j=Object(a.useContext)(D).dispatch;return Object(a.useEffect)((function(){var e=v(o,d);if(e>=0){var t=o[e][d];console.log("savedDisplayData",t),t[0].id?l({displayData:t}):l({displayData:[]})}else{!function(e){g.apply(this,arguments)}({dataName:"EVENTS_LIST_OLD",baseurl:"http://www.levenshulmecommunityfestival.co.uk/api_levfest_events_list/",year:n.year,dispatch:j,setTheState:l})}}),[n.year]),Object(w.jsxs)("div",{children:[Object(w.jsxs)("select",{name:"year",id:"year-select",onChange:function(e){s({year:e.target.value})},children:[Object(w.jsx)("option",{value:"2020",children:"2020"}),Object(w.jsx)("option",{value:"2019",children:"2019"})]}),"old events list from ",n.year,Object(w.jsx)(ne,{events:r.displayData})]})};var se=function(){return Object(w.jsxs)("div",{className:"content",children:[Object(w.jsx)(H,{}),Object(w.jsx)("h1",{className:"page_h1",children:"Old Levenshulme Festival Events "}),Object(w.jsx)(ae,{})]})};n(55);var ce=function(e){return Object(w.jsxs)("div",{className:"venue_card",children:[Object(w.jsx)(L.b,{to:"/".concat(e.link,"/").concat(e.id),children:Object(w.jsx)("div",{className:"venue_card__text_top",children:Object(w.jsxs)("h2",{children:[" ",e.title]})})}),Object(w.jsx)("div",{className:"venue_card__text_bottom",children:Object(w.jsxs)("p",{children:[" ",e.introduction]})}),Object(w.jsx)(q,{type:"square",source:e.image_1,altText:e.title})]})};n(56);var ie=function(){var e=Object(a.useContext)(D).mainState.venuesListData;return 0===e.length?null:Object(w.jsx)("div",{className:"venues",children:e.map((function(e){return Object(w.jsx)(ce,{id:e.id,link:"venues",title:e.venue_title,introduction:e.venue_introduction,image_1:e.venue_image_1},e.id)}))})};var re=function(){return Object(w.jsxs)("div",{className:"content",children:[Object(w.jsx)(H,{}),Object(w.jsx)("h1",{className:"page_h1",children:"Levenshulme Festival Venues"}),Object(w.jsx)(ie,{})]})};n(57);var le=function(e){return Object(w.jsx)("p",{className:"website_link",children:Object(w.jsxs)("a",{href:e.source,target:"_blank",rel:"noopener noreferrer",children:["WebSite: ",e.linkText]})})};n(58);var ue=function(e){var t="mailto:"+e.source,n=e.linkText;return Object(w.jsx)("div",{className:"email_link",children:Object(w.jsxs)("a",{href:t,children:["Email: ",n]})})};n(59);var de=function(e){var t="&center=".concat(e.latitude,",").concat(e.longitude),n="https://www.google.com/maps/embed/v1/place?key=AIzaSyAUplwoF60k0_6w55l-v7JDcG7dSNibq6I"+"&q=".concat(e.querytext)+t+"&zoom=18";return Object(w.jsx)("div",{className:"gmap",children:Object(w.jsx)("iframe",{title:"map",width:"100%",height:"100%",src:n})})};n(60);var oe=function(e){var t="https://www.google.com/maps/embed/v1/streetview?key=AIzaSyAUplwoF60k0_6w55l-v7JDcG7dSNibq6I"+"&location=\n  ".concat(e.latitude,",\n  ").concat(e.longitude)+"&heading=".concat(e.heading)+"&pitch=".concat(e.pitch);return Object(w.jsx)("div",{className:"gstreetview",children:Object(w.jsx)("iframe",{title:"streetview",width:"100%",height:"100%",src:t})})};n(61);var je=function(e){var t=Object(a.useContext)(D).mainState.eventsListData;if(t){var n=t.filter((function(t){return t.event_venue_id===e.venue_id}));return Object(w.jsx)("div",{className:"eventsInVenue",children:n.map((function(e){return Object(w.jsx)(z,{id:e.id,link:"events",title:e.event_title,name:e.event_name,date:e.event_date_time,introduction:e.event_introduction,time:e.event_time_text,image_1:e.event_image_1},e.id)}))})}return null};n(62);var ve=function(e){var t=e.data;return console.log("vs in more detail",t),t?Object(w.jsxs)("div",{className:"venue",children:[Object(w.jsxs)("div",{className:"venue_text",children:[Object(w.jsx)("div",{className:"venue_small_image",children:t.venue_image_1?Object(w.jsx)(q,{source:t.venue_image_1,altText:t.venue_title}):null}),Object(w.jsxs)("h3",{className:"venue_name",children:[t.venue_title,"\u200b"]}),Object(w.jsxs)("address",{children:[t.venue_address_1?Object(w.jsx)("p",{children:t.venue_address_1}):null,t.venue_address_2?Object(w.jsx)("p",{children:t.venue_address_2}):null,t.venue_address_3?Object(w.jsx)("p",{children:t.venue_address_3}):null,t.venue_address_4?Object(w.jsx)("p",{children:t.venue_address_4}):null,Object(w.jsx)("hr",{}),t.venue_telephone?Object(w.jsx)("p",{children:t.venue_telephone}):null,t.venue_website?Object(w.jsx)(ue,{source:t.venue_email,linkText:t.venue_title}):null,t.venue_website?Object(w.jsx)(le,{source:t.venue_website,linkText:t.venue_title}):null]}),t.venue_introduction?Object(w.jsx)("p",{children:t.venue_introduction}):null]}),Object(w.jsx)("div",{className:"venue_events",children:Object(w.jsx)(je,{venue_id:t.id})}),Object(w.jsxs)("div",{className:"venue_images",children:[t.venue_image_1?Object(w.jsx)(q,{source:t.venue_image_1,altText:t.venue_title}):null,t.venue_image_2?Object(w.jsx)(q,{source:t.venue_image_2,altText:t.venue_title}):null,t.venue_gmap_latitude?Object(w.jsx)(de,{latitude:t.venue_gmap_latitude,longitude:t.venue_gmap_longitude,querytext:t.venue_gmap_query_text}):null,t.venue_gstreet_latitude?Object(w.jsx)(oe,{latitude:t.venue_gstreet_latitude,longitude:t.venue_gstreet_longitude,heading:t.venue_gstreet_heading,pitch:t.venue_gstreet_pitch}):null]})]}):null};var _e=function(e){var t=Object(a.useState)({displayData:[]}),n=Object(u.a)(t,2),s=n[0],c=n[1],i=Object(a.useContext)(D).mainState.venuesLongData,r=Object(a.useContext)(D).dispatch,l=Object(A.f)().id;Object(a.useEffect)((function(){if(j(i,"id",l)){var e=d(i,l);c({displayData:e})}else{f({url:"http://www.levenshulmecommunityfestival.co.uk/api_venues_long?venue_id="+l,setState:c,dispatchFunction:r,dispatchName:"ADD_VENUE_DATA"})}}),[l]);var o=s.displayData;return o.length>0?Object(w.jsx)(ve,{data:o[0]}):"loading"};var be=function(){return Object(w.jsxs)("div",{className:"content",children:[Object(w.jsxs)("div",{className:"container",children:[Object(w.jsx)(H,{}),Object(w.jsx)("h1",{className:"page_h1",children:"A Levenshulme Festival Venue"}),Object(w.jsx)(_e,{})]}),Object(w.jsxs)("aside",{children:[Object(w.jsx)("h4",{children:"Other Venues"}),"add a list of other venues for quick switching?"]})]})};n(63),n(64);var he=function(e){return Object(w.jsx)("div",{className:"venue_card",children:Object(w.jsxs)(L.b,{to:"/".concat(e.link,"/").concat(e.id),children:[Object(w.jsx)("div",{className:"news_card__text_top",children:Object(w.jsx)("h2",{children:e.title})}),Object(w.jsx)("div",{className:"news_card__text_bottom",children:Object(w.jsxs)("p",{children:[" ",e.introduction]})}),Object(w.jsx)(q,{type:"square",source:e.image_1,altText:e.title}),Object(w.jsxs)("p",{children:[" ",e.id]})]})})};var Oe=function(){var e=Object(a.useContext)(D).mainState.newsListData;return Object(w.jsx)("div",{className:"news",children:e.map((function(e){return Object(w.jsx)(he,{id:e.id,link:"news",title:e.news_title,introduction:e.news_introduction,image_1:e.news_image_1},e.id)}))})};var xe=function(){return Object(w.jsxs)("div",{className:"content",children:[Object(w.jsx)(H,{}),Object(w.jsx)("h1",{className:"page_h1",children:"Latest News about the Levenshulme Festival"}),Object(w.jsx)(Oe,{})]})};n(65);var me=function(e){var t=e.data;return console.log("ns",t),t?Object(w.jsxs)("div",{className:"news_detail",children:[Object(w.jsxs)("div",{className:"news_detail_text",children:[Object(w.jsx)("h3",{children:t.news_title}),Object(w.jsx)("div",{className:"news_body",dangerouslySetInnerHTML:{__html:t.news_body}})]}),Object(w.jsxs)("div",{className:"news_detail_images",children:[t.news_image_1?Object(w.jsx)(q,{type:"square",source:t.news_image_1,altText:t.news_title}):null,t.news_image_2?Object(w.jsx)(q,{type:"square",source:t.news_image_2,altText:t.news_title}):null,t.news_image_3?Object(w.jsx)(q,{type:"square",source:t.news_image_3,altText:t.news_title}):null,t.news_image_4?Object(w.jsx)(q,{type:"square",source:t.news_image_4,altText:t.news_title}):null]})]}):null};var fe=function(e){var t=Object(a.useState)({displayData:[]}),n=Object(u.a)(t,2),s=n[0],c=n[1],i=Object(a.useContext)(D).mainState.newsLongData,r=Object(a.useContext)(D).dispatch,l=Object(A.f)().id;Object(a.useEffect)((function(){if(j(i,"id",l)){var e=d(i,l);c({displayData:e})}else{f({url:"http://www.levenshulmecommunityfestival.co.uk/api_news_long?news_id="+l,setState:c,dispatchFunction:r,dispatchName:"ADD_NEWS_DATA"})}}),[l]);var o=s.displayData;return o.length>0?Object(w.jsx)(me,{data:o[0]}):"loading"};var pe=function(){return Object(w.jsxs)("div",{className:"content",children:[Object(w.jsx)(H,{}),Object(w.jsx)("h1",{className:"page_h1",children:"Levenshulme Festival News"}),Object(w.jsx)(fe,{})]})};var ge=function(){return Object(w.jsx)("div",{className:"App",children:Object(w.jsx)(T,{children:Object(w.jsxs)(L.a,{children:[Object(w.jsx)(E,{}),Object(w.jsxs)(A.c,{children:[Object(w.jsx)(A.a,{path:"/",exact:!0,children:Object(w.jsx)(J,{})}),Object(w.jsx)(A.a,{path:"/events",exact:!0,children:Object(w.jsx)(P,{})}),Object(w.jsx)(A.a,{path:"/events/:id",children:Object(w.jsx)(te,{})}),Object(w.jsx)(A.a,{path:"/events_old",exact:!0,children:Object(w.jsx)(se,{})}),Object(w.jsx)(A.a,{path:"/news",exact:!0,children:Object(w.jsx)(xe,{})}),Object(w.jsx)(A.a,{path:"/news/:id",children:Object(w.jsx)(pe,{})}),Object(w.jsx)(A.a,{path:"/venues",exact:!0,children:Object(w.jsx)(re,{})}),Object(w.jsx)(A.a,{path:"/venues/:id",exact:!0,children:Object(w.jsx)(be,{})})]}),Object(w.jsx)(C,{})]})})})};i.a.render(Object(w.jsx)(s.a.StrictMode,{children:Object(w.jsx)(ge,{})}),document.getElementById("root"))}]),[[66,1,2]]]);
//# sourceMappingURL=main.a29cad50.chunk.js.map