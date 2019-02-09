(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{122:function(e){e.exports={name:"parliament",homepage:"https://WaSa42.github.io/parliament",repository:"https://github.com/WaSa42/parliament",version:"0.1.0",private:!0,devDependencies:{"eslint-config-airbnb":"^17.1.0","react-scripts":"^2.1.3"},dependencies:{"@fortawesome/fontawesome":"^1.1.8","@fortawesome/fontawesome-svg-core":"^1.2.14","@fortawesome/free-brands-svg-icons":"^5.7.1","@fortawesome/free-regular-svg-icons":"^5.7.1","@fortawesome/free-solid-svg-icons":"^5.7.1","@fortawesome/react-fontawesome":"^0.1.4","animate.css":"^3.7.0",classnames:"^2.2.6","flag-icon-css":"^3.2.1","gh-pages":"^2.0.1",husky:"^0.14.3","i18n-iso-countries":"^3.7.8",i18next:"^11.10.2","i18next-browser-languagedetector":"^2.2.4","i18next-xhr-backend":"^1.5.1","lint-staged":"^7.3.0",lodash:"^4.17.11",moment:"^2.24.0","moment-timezone":"^0.5.23","node-sass":"^3.4.2",normalizr:"^3.3.0","npm-run-all":"^4.1.5",numeral:"^2.0.6",prettier:"^1.16.3","prop-types":"^15.6.2","raven-for-redux":"^1.4.0","raven-js":"^3.27.0",react:"^16.7.0","react-burger-menu":"^2.6.2","react-dom":"^16.7.0","react-helmet":"^5.2.0","react-i18next":"^7.13.0","react-loadable":"^5.5.0","react-redux":"^5.1.1","react-router-dom":"^4.3.1","react-toastify":"^4.5.2",redux:"^4.0.1","redux-burger-menu":"^0.2.8","redux-form":"^7.4.2","redux-logger":"^3.0.6","redux-persist":"^5.10.0","redux-thunk":"^2.3.0","source-map-explorer":"^1.6.0",sweetalert:"^2.1.2"},"lint-staged":{"src/**/*.{json,scss}":["prettier --single-quote --write","git add"]},scripts:{analyze:"source-map-explorer build/static/js/main.*",precommit:"lint-staged","build:sass":"node-sass -r --output-style compressed src/ -o src/","watch:sass":"npm run build:sass && npm run build:sass -- -w","start-js":"react-scripts start",start:"npm-run-all -p watch:sass start-js","build-js":"react-scripts build analyze",build:"npm-run-all build:sass build-js",test:"react-scripts test --env=jsdom",predeploy:"npm run build",deploy:"gh-pages -d build",eject:"react-scripts eject"},browserslist:[">0.2%","not dead","not ie <= 11","not op_mini all"]}},125:function(e,t,a){e.exports=a(301)},246:function(e,t,a){},256:function(e,t,a){},275:function(e,t,a){},277:function(e,t,a){},279:function(e,t,a){},281:function(e,t,a){},285:function(e,t,a){},287:function(e,t,a){},301:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"get",function(){return tt});var r=a(4),c=a(5),o=a(7),i=a(6),l=a(8),s=a(0),u=a.n(s),m=a(24),d=a.n(m),p=a(21),f=a(13),b=a(72),h=a(28),E=a.n(h),v=a(99),g=a(3),O=(a(139),a(101)),j=a(22),y=a(9),N=a(14);function k(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,r=arguments.length>1?arguments[1]:void 0;return function(e,t){return!t||e.scope===t}(r,a)&&t.hasOwnProperty(r.type)?t[r.type](n,r):n}}var I=k({},{}),w=a(102),C=a.n(w),x="RECEIVE_ENTITIES",S="REMOVE_ENTITIES";var T,M={};var P=k(M,(T={},Object(y.a)(T,x,function(e,t){var a=t.entities,n=e;return C()(a,function(t,a){n=Object(N.a)({},n,Object(y.a)({},a,Object(N.a)({},e[a],t)))}),n}),Object(y.a)(T,S,function(e,t){var a=e;return t.entities.map(function(n){return a[t.entityType]=function(e,t){if(!e||!e[t.id])return e;var a=e;return a.splice(t.id,1),a}(e[t.entityType],n),!0}),a}),Object(y.a)(T,"RESET_ENTITIES",function(){return M}),Object(y.a)(T,"UPDATE_ENTITIES",function(e,t){var a=e;return t.entities.map(function(n){return a[t.entityType]=Object(N.a)({},e[t.entityType],function(e,t){var a=e[t.id];return a?Object(y.a)({},t.changes.id||t.id,Object(N.a)({},a,t.changes)):{}}(e[t.entityType],n)),!0}),a}),T)),A=a(306).a.plugin({}),D=a(73),_=a(104),R=a.n(_),L=a(26),F=[new L.c.Entity("feedItems",{})],q="HOME_RESET";var H,W="HOME_FEEDITEMS_ADD";function B(e){return function(t){var a=Object(L.b)(e,F),n=a.result;t(function(e){return{type:x,entities:e}}(a.entities)),t({type:W,ids:n})}}var U={feedItems:[]};var G,V=k(U,(H={},Object(y.a)(H,q,function(){return U}),Object(y.a)(H,W,function(e,t){var a=t.ids;return Object(N.a)({},e,{feedItems:[].concat(Object(D.a)(e.feedItems),[a])})}),Object(y.a)(H,"HOME_FEEDITEMS_REMOVE",function(e,t){var a=t.ids;return Object(N.a)({},e,{feedItems:R()(Object(D.a)(e.feedItems),a)})}),Object(y.a)(H,"HOME_FEEDITEMS_OVERRIDE",function(e,t){var a=t.ids;return Object(N.a)({},e,{feedItems:a})}),Object(y.a)(H,"HOME_FEEDITEMS_RESET",function(e){return Object(N.a)({},e,{feedItems:U.feedItems})}),H)),z=Object(f.c)({home:V}),J=Object(f.c)({burgerMenu:j.reducer,entities:P,form:A,global:I,pages:z}),K=function(e,t){var a=e;return"RESET_APP"===t.type&&(E.a&&E.a.removeItem&&Object.keys(e).forEach(function(e){E.a.removeItem("persist:".concat(e))}),a=void 0),J(a,t)},Y=a(307),Q=a(309),X=a(305),Z=a(105),$=a(16),ee=a.n($),te=(a(239),a(240),a(34)),ae=a.n(te),ne=(a(241),a(242),a(46)),re=a.n(ne),ce=a(29),oe=a(303),ie="/",le="/notAllowed",se=(G={},Object(y.a)(G,ie,"home"),Object(y.a)(G,le,"notAllowed"),G),ue=function(e){var t=!1;return re()(se,function(a,n){return Object(oe.a)(e,{path:n,exact:!0})&&(t=a),t}),t};function me(e){var t=ue(e);return t&&""!==Object(ce.b)("route:".concat(t,".name"))&&"route:".concat(t,".name")}function de(e){var t=ue(e);return t&&""!==Object(ce.b)("route:".concat(t,".description"))&&"route:".concat(t,".description")}var pe={en:"en","en-gb":"en",gb:"en",es:"es",fr:"fr"},fe={en:{i18n:"en",moment:"en-gb",flagIcon:"gb"},es:{i18n:"es",moment:"es",flagIcon:"es"},fr:{i18n:"fr",moment:"fr",flagIcon:"fr"}},be=function(e,t){return e&&t?fe[pe[e]][t]:(console.error('Locale and output are required (localeTo("en", "moment"))'),!1)},he=(a(246),a(107)),Ee=a(308),ve=(a(256),function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),t}(u.a.Component));ve.defaultProps={children:u.a.createElement("span",{className:"scroll-to-top d-none"})};var ge=Object(Ee.a)(ve),Oe=a(304),je=a(108),ye=a(2),Ne=a(30),ke=a(109),Ie=a(110),we=a(111),Ce=a(112),xe=(a(275),a(277),function(e){var t=e.children;return u.a.createElement("div",{className:"drawer-separator nav-item"},t)});function Se(e){e(Object(j.action)(!1))}var Te=Object(g.c)([])(Object(p.connect)(function(){return{}},function(e){return{dispatch:e}})(Object(j.decorator)(function(e){var t=e.dispatch,a=e.isOpen,n=e.t;return u.a.createElement(je.slide,{isOpen:a,pageWrapId:"page",outerContainerId:"app",onStateChange:function(e){!function(e){var t=document.querySelector("body");e.isOpen?t.classList.add("fixed"):t.classList.remove("fixed")}(e),a!==e.isOpen&&t(Object(j.action)(e.isOpen))}},u.a.createElement("nav",{id:"drawer-nav"},u.a.createElement("header",null,u.a.createElement(Oe.a,{to:ie,className:"nav-link",onClick:function(){return Se(t)}},u.a.createElement("h3",null,n("project.title")))),function(){return[u.a.createElement("section",null,u.a.createElement("ul",{className:"fa-ul"},u.a.createElement("li",{className:"nav-item"},u.a.createElement(Oe.a,{className:"nav-link",to:"/noMatch",onClick:function(){return Se(t)}},u.a.createElement(ye.a,{icon:Ne.faCircle,listItem:!0}),"\xa0No match")),u.a.createElement("li",{className:"nav-item"},u.a.createElement(Oe.a,{className:"nav-link",to:le,onClick:function(){return Se(t)}},u.a.createElement(ye.a,{icon:Ne.faCircle,listItem:!0}),"\xa0Not Allowed")))),u.a.createElement("section",null,u.a.createElement(xe,null,"Separator"),u.a.createElement("ul",{className:"fa-ul"},u.a.createElement("li",{className:"nav-item"},u.a.createElement(Oe.a,{className:"nav-link",to:ie,onClick:function(){return Se(t)}},u.a.createElement(ye.a,{icon:Ne.faCircle,listItem:!0}),"\xa0Link")),u.a.createElement("li",{className:"nav-item"},u.a.createElement(Oe.a,{className:"nav-link",to:ie,onClick:function(){return Se(t)}},u.a.createElement(ye.a,{icon:Ne.faCircle,listItem:!0}),"\xa0Link")),u.a.createElement("li",{className:"nav-item"},u.a.createElement(Oe.a,{className:"nav-link",to:ie,onClick:function(){return Se(t)}},u.a.createElement(ye.a,{icon:Ne.faCircle,listItem:!0}),"\xa0Link")))),u.a.createElement("footer",null,u.a.createElement("a",{className:"nav-link",href:"/",target:"_blank"},u.a.createElement(ye.a,{icon:Ie.faFacebook})),u.a.createElement("a",{className:"nav-link",href:"/",target:"_blank"},u.a.createElement(ye.a,{icon:we.faTwitter})),u.a.createElement("a",{className:"nav-link",href:"/",target:"_blank"},u.a.createElement(ye.a,{icon:Ce.faYoutube})),u.a.createElement(Oe.a,{className:"nav-link",to:"/",onClick:function(){return Se(t)}},u.a.createElement(ye.a,{icon:ke.faEnvelope})))]}))}))),Me=a(113),Pe=(a(279),function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.onMount;e&&e()}},{key:"render",value:function(){var e=this.props,t=e.burgerMenu,a=e.dispatch,n=e.t;return u.a.createElement("header",{id:"main-header"},u.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark"},u.a.createElement("div",{className:"container position-relative"},u.a.createElement(Oe.a,{to:ie,className:"navbar-brand mb-0 h1 d-none d-md-inline"},n("project.title")),u.a.createElement("div",{className:"btn-drawer my-2 ml-2 ml-sm-0 mr-2 mr-sm-3 d-none"},u.a.createElement("button",{className:"btn",type:"button","aria-expanded":"false","aria-label":n("accessibility.aria-label.toggleNav"),onClick:function(){return a(Object(j.action)(!t.isOpen))},onKeyPress:function(){return a(Object(j.action)(!t.isOpen))}},u.a.createElement(ye.a,{icon:Me.faBars}))),u.a.createElement("p",{id:"title-dom",className:"navbar-text mr-auto px-3 p-md-0"}),u.a.createElement("div",{id:"side-action-dom"}))))}}]),t}(u.a.Component));Pe.defaultProps={onMount:function(){return!1}};var Ae=Object(g.c)(["common","component","form","route"])(Object(p.connect)(function(e){return{burgerMenu:e.burgerMenu}},function(e){return{dispatch:e}})(Pe)),De=a(48),_e=(a(281),function(){return u.a.createElement("div",{className:"loader"},u.a.createElement(ye.a,{icon:De.faCircleNotch,spin:!0}))}),Re=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(i.a)(t).call(this,e))).state={contentCanBeLoaded:!1},a}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.children,n=t.i18n,r=t.location,c=t.t,o=this.state.contentCanBeLoaded;return u.a.createElement("div",{id:"layout"},u.a.createElement(he.Helmet,null,me(r.pathname)?u.a.createElement("title",null,c(me(r.pathname))," ","|"," ",c("project.title")):u.a.createElement("title",null,c("project.title")),u.a.createElement("meta",{name:"robots",content:"all"}),u.a.createElement("meta",{name:"language",content:n.language}),de(r.pathname)&&u.a.createElement("meta",{name:"description",content:de(r.pathname)})),u.a.createElement(ge,null),u.a.createElement(Te,null),u.a.createElement(Ae,{onMount:function(){return e.setState({contentCanBeLoaded:!0})}}),u.a.createElement("main",{id:"page",className:"content-wrapper"},o?a:u.a.createElement(_e,null)))}}]),t}(u.a.Component),Le=Object(Ee.a)(Object(g.c)(["common","route"])(Re)),Fe=a(49),qe=a(50),He=function(){return document.getElementById("side-action-dom")},We=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(i.a)(t).call(this,e))).el=document.createElement("div"),a}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){He().appendChild(this.el)}},{key:"componentWillUnmount",value:function(){He().removeChild(this.el)}},{key:"render",value:function(){var e=this.props.children;return d.a.createPortal(e,this.el)}}]),t}(u.a.Component),Be=Object(g.c)(["page"])(function(e){var t=e.history,a=e.t;return u.a.createElement("div",{id:"notAllowed"},u.a.createElement(We,null,u.a.createElement("div",{className:"btn-side-action mx-2 mx-sm-3"},u.a.createElement("button",{type:"button",className:"btn",onClick:function(){return t.goBack()}},u.a.createElement(ye.a,{icon:qe.faArrowLeft})))),u.a.createElement("div",{className:"container"},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-lg-5 col-md-6 mx-auto"},u.a.createElement("div",{className:"card border-danger animated shake"},u.a.createElement("div",{className:"card-body"},u.a.createElement("h4",{className:"card-title text-danger"},"403"," ",u.a.createElement("small",null,a("page:NotAllowed.card.title"))),u.a.createElement("p",{className:"card-text text-danger"},a("page:NotAllowed.card.text")),u.a.createElement(Oe.a,{to:ie,className:"btn btn-outline-danger float-right btn-block btn-previous-down"},u.a.createElement(ye.a,{icon:Fe.faHome})," ",a("page:NotAllowed.card.button"))))))))}),Ue=function(e){var t=e.history,a=e.message,n=e.t;return u.a.createElement("div",{id:"noMatch"},t&&u.a.createElement(We,null,u.a.createElement("div",{className:"btn-side-action mx-2 mx-sm-3"},u.a.createElement("button",{type:"button",className:"btn",onClick:function(){return t.goBack()}},u.a.createElement(ye.a,{icon:qe.faArrowLeft})))),u.a.createElement("div",{className:"container"},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-lg-5 col-md-6 mx-auto"},u.a.createElement("div",{className:"card border-primary animated bounceIn"},u.a.createElement("div",{className:"card-body"},u.a.createElement("h4",{className:"card-title text-primary"},"404"," ",u.a.createElement("small",null,n("page:NoMatch.card.title"))),u.a.createElement("p",{className:"card-text text-primary"},a||n("page:NoMatch.card.text")),u.a.createElement(Oe.a,{to:ie,className:"btn btn-outline-primary float-right btn-block btn-previous-down"},u.a.createElement(ye.a,{icon:Fe.faHome})," ",n("page:NoMatch.card.button"))))))))};Ue.defaultProps={history:null,message:null};var Ge=Object(g.c)(["page"])(Ue),Ve=a(114),ze=a.n(Ve),Je=a(1),Ke=a.n(Je),Ye=a(115),Qe=a.n(Ye),Xe=a(116),Ze=a(117),$e=function(){function e(t){Object(r.a)(this,e);var a=t.author,n=t.categories,c=t.description,o=t.id,i=t.link,l=t.pubDate,s=t.title;this.id=o,this.author=a,this.title=s,this.description=c,this.link=i,this.pubDate=Qe()(l).format(),this.categories=n}return Object(c.a)(e,[{key:"getPageLink",value:function(){return"/feed/item/".concat(this.id)}}],[{key:"getShape",value:function(){return{id:Ke.a.string.isRequired,author:Ke.a.oneOf(e.AUTHORS).isRequired,title:Ke.a.string.isRequired,description:Ke.a.string,link:Ke.a.string.isRequired,pubDate:Ke.a.string.isRequired,categories:Ke.a.arrayOf(Ke.a.oneOf(e.CATEGORIES))}}},{key:"parseCategories",value:function(t){return t.map(function(t){var a="other";return re()(e.CATEGORIES_MATCHING,function(e,n){var r=e.includes(t);return r&&(a=n),r}),a})}}]),e}();$e.LAST_ID=-1,$e.AUTHORS=["senate","assembly","constitutionalCouncil","other"],$e.AUTHORS_ICON={senate:Ze.faPlaceOfWorship,assembly:Xe.faLandmark},$e.CATEGORIES=["proposal","project","constitutional","organic","program","resolution","other"],$e.CATEGORIES_MATCHING={proposal:["proposition de loi"],project:["projet de loi"],constitutional:["proposition de loi constitutionnelle"],organic:["projet de loi organique"],program:["projet de loi de programmation"],resolution:["proposition de r\xe9solution"]};var et=$e,tt=function(e,t){var a=e.onError,n=e.onRequest,r=e.onSuccess;n&&n(t);return fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.senat.fr%2Frss%2Ftextes.rss").then(function(e){return e.json()}).then(function(e){r&&r(function(e){return Object(N.a)({},e,{items:e.items.map(function(e){var t=Object(N.a)({},e,{id:e.guid.replace("http://www.senat.fr/","").replace(".html","").replace("/","_"),author:"senate",categories:et.parseCategories(e.categories)}),a={};return Object.keys(et.getShape()).forEach(function(e){a[e]=t[e]}),a})})}(e),t)}).catch(function(e){return a&&a(e)})},at={textes:n},nt=function(){return document.getElementById("title-dom")},rt=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(i.a)(t).call(this,e))).el=document.createElement("span"),a}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){nt().appendChild(this.el)}},{key:"componentWillUnmount",value:function(){nt().removeChild(this.el)}},{key:"render",value:function(){var e=this.props.children;return d.a.createPortal(e,this.el)}}]),t}(u.a.Component),ct=a(118),ot=(a(285),a(119)),it=a(120),lt=function(e){var t=e.author,a=e.categories,n=e.t,r=et.AUTHORS_ICON[t];return u.a.createElement("ul",{className:"feed-badges"},u.a.createElement("li",{className:"badge badge-secondary p-md-2 mr-2 mb-2"},r&&u.a.createElement(ye.a,{icon:r,className:"mr-2"}),n("component:FeedItem.author.".concat(t))),a.map(function(e){return u.a.createElement("li",{className:"badge badge-light p-1 mr-2 mb-2"},n("component:FeedItem.categories.".concat(e)))}))};lt.defaultProps={author:"",categories:[]};var st=Object(g.c)()(lt),ut=Object(g.c)()(function(e){var t=e.item,a=e.t,n=t.title,r=t.pubDate,c=t.description;return u.a.createElement("li",null,u.a.createElement("div",{className:"feed-badge"},u.a.createElement(ye.a,{icon:ot.faPencilAlt})),u.a.createElement("div",{className:"card"},u.a.createElement("div",{className:"card-body"},u.a.createElement(st,t),u.a.createElement("h5",{className:"card-title"},n),u.a.createElement("p",{className:"card-subtitle mb-2 text-muted"},u.a.createElement(ye.a,{icon:it.faClock})," ",ee()(r).format("LLLL")),u.a.createElement("p",{className:"card-text"},c),u.a.createElement("div",{className:"text-right d-none d-sm-block"},u.a.createElement("button",{type:"button",className:"btn btn-link card-link"},a("component:FeedItem.news")),u.a.createElement(Oe.a,{to:new et(t).getPageLink(),className:"card-link"},a("component:FeedItem.link"))))))}),mt=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"renderItems",value:function(){for(var e=[],t=this.props.items,a=0;a<t.length;a+=1){var n=t[a];e.push(u.a.createElement(ut,{item:n,key:"feedItem-".concat(n.id)}));var r=t[a+1];r&&!ee()(r.pubDate).isSame(n.pubDate,"day")&&e.push(u.a.createElement("li",{className:"date-separator"},u.a.createElement(ye.a,{icon:ct.faCalendarAlt,className:"mr-2"}),ee()(r.pubDate).format("LL")))}return e}},{key:"render",value:function(){return u.a.createElement("ul",{className:"feed"},this.renderItems())}}]),t}(u.a.Component);mt.defaultProps={items:[]};var dt=mt,pt=a(121),ft=a(122),bt=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(i.a)(t).call(this,e))).state={isClosed:!1},a}return Object(l.a)(t,e),Object(c.a)(t,[{key:"close",value:function(){this.setState({isClosed:!0})}},{key:"render",value:function(){var e=this.props.t;return!this.state.isClosed&&u.a.createElement("div",{className:"alert alert-warning alert-dismissible fade show",role:"alert"},u.a.createElement("strong",{className:"mr-2"},e("component:WIP.strong")),e("component:WIP.text"),u.a.createElement("a",{href:ft.repository,className:"alert-link ml-2"},u.a.createElement(ye.a,{icon:pt.faGithub,className:"mr-2"}),e("component:WIP.src")),u.a.createElement("button",{type:"button",className:"close","aria-label":"Close",onClick:this.close.bind(this),onKeyPress:this.close.bind(this)},u.a.createElement("span",{"aria-hidden":"true"},"\xd7")))}}]),t}(u.a.Component),ht=Object(g.c)()(bt),Et=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(i.a)(t).call(this,e))).state={isFetching:!1},a}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"fetchData",value:function(){var e=this,t=this.props,a=t.dispatch,n=t.t;this.state.isFetching||at.textes.get({onRequest:function(){return e.setState({isFetching:!0})},onSuccess:function(t){a(B(t.items)),e.setState({isFetching:!1})},onError:function(){e.setState({isFetching:!1}),ze()(n("request:error.title"),n("request:error.notPrecise"),"error")}})}},{key:"render",value:function(){var e=this.props,t=e.feedItems,a=e.t,n=this.state.isFetching;return u.a.createElement("div",{id:"home"},u.a.createElement(rt,null,a("route:home.description_short")),u.a.createElement("div",{className:"container"},u.a.createElement(ht,null),n&&u.a.createElement(_e,null),t&&u.a.createElement(dt,{items:Object.values(t)})))}}]),t}(u.a.Component);Et.defaultProps={feedItems:{}};var vt=Object(g.c)()(Object(p.connect)(function(e){return{feedItems:Object(L.a)(e.entities.feedItems,F,e.pages.home.feedItems)}},function(e){return{dispatch:e}})(Et)),gt=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.i18n;ee.a.locale(be(e.language,"moment")),ae.a.locale(be(e.language,"moment"))}},{key:"componentDidUpdate",value:function(e){var t=this.props.i18n;e.i18n.language!==t.language&&(ee.a.locale(be(t.language,"moment")),ae.a.locale(be(t.language,"moment")))}},{key:"render",value:function(){return u.a.createElement("div",{id:"app"},u.a.createElement(Z.ToastContainer,null),u.a.createElement(Y.a,null,u.a.createElement(Le,null,u.a.createElement(Q.a,null,u.a.createElement(X.a,{exact:!0,path:ie,component:vt}),u.a.createElement(X.a,{path:le,component:Be}),u.a.createElement(X.a,{component:Ge})))))}}]),t}(u.a.Component);gt.defaultProps={i18n:{language:"en"}};var Ot=Object(g.c)()(gt),jt=(a(287),function(e){var t=e.t,a=e.text,n=e.translated,r=e.children;return u.a.createElement("div",{className:"splashScreen"},u.a.createElement("div",{className:"svg-container"},r||u.a.createElement(ye.a,{icon:De.faCircleNotch,spin:!0}),u.a.createElement("p",{className:"mt-2"},a&&(n?a:t(a))||t("splashLoading"))))});jt.defaultProps={text:null,children:null,translated:!1};var yt=Object(g.c)()(jt),Nt=a(123),kt=a.n(Nt),It=a(124),wt=a.n(It);ce.a.use(kt.a).use(wt.a).use(g.b).init({ns:["common","component","route","page","request"],defaultNS:"common",fallbackLng:"fr",whitelist:["fr"],debug:!1,interpolation:{escapeValue:!1},react:{wait:!0,bindI18n:"languageChanged loaded",bindStore:"added removed",nsMode:"default",defaultTransParent:"span"},backend:{loadPath:"".concat("/parliament","/locales/{{lng}}/{{ns}}.json")}});var Ct=ce.a;a.d(t,"default",function(){return Mt});var xt=[O.a,function(){return function(e){return function(t){return t.error&&t.error.message,e(t)}}}];xt.concat([function(e){return function(t){return function(a){return"function"!==typeof a.then?t(a):Promise.resolve(a).then(e.dispatch)}}},function(){return function(e){return function(t){if(!t.promise)return e(t);function a(e,a){var n=Object.assign({},t,{ready:e},a);return delete n.promise,n}return e(a(!1)),t.promise.then(function(t){return e(a(!0,{result:t}))},function(t){return e(a(!0,{error:t}))})}}}]);var St={key:"root",storage:E.a,whitelist:["app"]},Tt=Object(b.a)(St,K),Mt=Object(f.e)(Tt,Object(f.d)(f.a.apply(void 0,xt))),Pt=Object(b.b)(Mt),At=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(o.a)(this,Object(i.a)(t).call(this))).state={splash:!0},e}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){var e=this;setTimeout(function(){e.setState({splash:!1})},1500)}},{key:"render",value:function(){var e=this.state.splash;return u.a.createElement(p.Provider,{store:Mt},u.a.createElement(v.a,{loading:u.a.createElement(yt,null),persistor:Pt},u.a.createElement(g.a,{i18n:Ct},e?u.a.createElement(yt,null):u.a.createElement(Ot,null))))}}]),t}(u.a.Component);d.a.render(u.a.createElement(At,null),document.getElementById("root"))}},[[125,2,1]]]);
//# sourceMappingURL=main.2b1e6b52.chunk.js.map