(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,a){e.exports=a(54)},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n,r=a(0),s=a.n(r),i=a(22),o=a.n(i),c=(a(34),a(1)),l=a(2),m=a(4),u=a(3),h=a(5),g=(a(35),a(36),a(14)),p=a(23);function b(e){return{type:n.ToggleMobileMenu,payload:e}}!function(e){e.ToggleMobileMenu="[LAYOUT] Toggle mobile menu"}(n||(n={}));var d={isMobileMenuOpened:!1,routes:[{path:"/",label:"About me"},{path:"/technologies",label:"Technologies"},{path:"/my-works",label:"My works"},{path:"/contacts",label:"Contacts"}],pens:[{path:"https://romalei.github.io/projects/snake/",label:"Snake"},{path:"https://romalei.github.io/projects/tg-chart/",label:"Charts"}]};var f=a(24),C=a(25),E=Object(g.createStore)(Object(g.combineReducers)({layout:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.ToggleMobileMenu:return Object(p.a)({},e,{isMobileMenuOpened:null!=t.payload?t.payload:!e.isMobileMenuOpened});default:return e}}}),Object(C.composeWithDevTools)(Object(g.applyMiddleware)(f.a))),v=a(11),y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).routes=E.getState().layout.routes||[],a.pens=E.getState().layout.pens||[],E.subscribe(function(){var e=E.getState();a.routes=e.layout.routes||[],a.pens=e.layout.pens||[]}),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"toggleMobileMenu",value:function(e){E.dispatch(b(e))}},{key:"render",value:function(){var e=this;return s.a.createElement("header",{className:"rz-header"},s.a.createElement("nav",{className:"rz-container rz-header__container"},s.a.createElement("ul",{className:"rz-nav"},this.routes.map(function(t){return s.a.createElement("li",{className:"rz-nav__item",key:t.path},s.a.createElement(v.b,{exact:!0,to:t.path,className:"rz-nav__link",activeClassName:"rz-nav__link_active",onClick:function(){return e.toggleMobileMenu(!1)}},t.label))}),s.a.createElement("li",{className:"rz-nav__item"},s.a.createElement("span",null,"Pens"),s.a.createElement("ul",{className:"rz-submenu rz-nav__submenu"},this.pens.map(function(t){return s.a.createElement("li",{key:t.path,className:"rz-submenu__item"},s.a.createElement("a",{href:t.path,target:"_blank",className:"rz-nav__link rz-submenu__link",onClick:function(){return e.toggleMobileMenu(!1)}},t.label))})))),s.a.createElement("button",{className:"rz-menu-btn",onClick:function(){return e.toggleMobileMenu()}},s.a.createElement("span",{className:"rz-menu-btn__ball"}))))}}]),t}(r.Component),_=(a(46),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).isMobileMenuOpened=!1,a.routes=E.getState().layout.routes||[],a.pens=E.getState().layout.pens||[],a.closeMobileMenu=function(){E.dispatch(b(!1))},E.subscribe(function(){var e=E.getState();a.isMobileMenuOpened=e.layout.isMobileMenuOpened,a.routes=e.layout.routes||[],a.pens=e.layout.pens||[],a.forceUpdate()}),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("nav",{className:this.menuWrapperClass},s.a.createElement("ul",{className:this.menuClass},this.routes.map(function(t){return s.a.createElement("li",{className:"rz-mob-menu__item",key:t.path},s.a.createElement(v.b,{exact:!0,to:t.path,className:"rz-mob-menu__link",activeClassName:"rz-mob-menu__link_active",onClick:e.closeMobileMenu},t.label))}),s.a.createElement("li",{className:"rz-mob-menu__item rz-mob-menu__item_header"},"Pens:"),this.pens.map(function(e){return s.a.createElement("li",{key:e.path,className:"rz-mob-menu__item rz-mob-menu__item_small"},s.a.createElement("a",{href:e.path,className:"rz-mob-menu__link rz-mob-menu__link_small"},e.label))})))}},{key:"menuWrapperClass",get:function(){return this.isMobileMenuOpened?"rz-mob-menu-wrapper rz-mob-menu-wrapper_opened":"rz-mob-menu-wrapper"}},{key:"menuClass",get:function(){return this.isMobileMenuOpened?"rz-mob-menu rz-mob-menu_opened":"rz-mob-menu"}}]),t}(r.Component)),k=(a(47),function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("svg",{width:"465",height:"464",viewBox:"0 0 465 464",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("g",{clipPath:"url(#clip0)"},s.a.createElement("path",{d:"M391.863 422.878L391.137 416.342C390.85 413.757 388.521 411.893 385.936 412.18L385.529 412.225L378.502 356.011C376.973 343.783 368.559 333.519 356.868 329.622L317.821 316.606C312.459 314.818 306.577 315.956 302.442 319.48L290.94 315.646C284.406 313.468 280 307.354 280 300.467V274.665L314.461 260.306C332.349 252.855 344 235.378 344 216V208C357.255 208 368 197.255 368 184C368 178.435 366.1 173.316 362.921 169.245C369.876 151.701 385.637 101.46 368 40C368 40 365.137 37.898 359.79 34.74C358.341 16.289 352 8 352 8L322.801 17.733C297.358 8.546 261.586 0 216.001 0C216.001 0 210.751 5.5 200.001 8C200.001 8 172.751 2 144.001 0L128.001 40C128.001 40 88.001 39.667 88.001 88C88.001 105.727 97.884 149.932 102.106 168.013C98.31 172.258 96 177.858 96 184C96 197.255 106.745 208 120 208V216C120 235.377 131.651 252.854 149.538 260.308L184 274.667V300.468C184 307.355 179.593 313.469 173.06 315.647L161.558 319.481C157.423 315.957 151.541 314.819 146.179 316.607L107.132 329.623C95.441 333.52 87.027 343.784 85.498 356.012L78.471 412.226L78.064 412.181C75.478 411.894 73.15 413.757 72.862 416.343L72.136 422.879C71.849 425.464 73.712 427.793 76.297 428.08L88 429.38V448C88 456.836 95.163 464 104 464H360C368.837 464 376 456.836 376 448V429.379L387.702 428.079C390.287 427.792 392.151 425.463 391.863 422.878Z",fill:"#FDC88E"}),s.a.createElement("path",{d:"M280 274H184V300.468C184 306.227 180.814 311.299 175.983 314.127C243.077 325.871 280 274 280 274Z",fill:"#F5B97A"}),s.a.createElement("path",{d:"M344 160V144C344 121.909 326.091 104 304 104H160C137.909 104 120 121.909 120 144V160C106.745 160 96 170.745 96 184C96 197.255 106.745 208 120 208V216C120 235.377 131.651 252.854 149.538 260.308L201.229 281.846C210.98 285.909 221.438 288 232 288C242.562 288 253.019 285.908 262.769 281.846L314.463 260.307C332.349 252.855 344 235.378 344 216V208C357.255 208 368 197.255 368 184C368 170.745 357.255 160 344 160Z",fill:"#FFD7A3"}),s.a.createElement("path",{d:"M320 464.001V424.001H387L378.501 356.012C376.972 343.784 368.558 333.52 356.867 329.623L317.82 316.607C311.02 314.34 303.37 316.761 299.529 322.813C285.349 345.157 260.424 360 232.001 360C203.578 360 178.652 345.156 164.471 322.812C160.63 316.76 152.98 314.339 146.18 316.606L107.133 329.622C95.442 333.519 87.028 343.783 85.499 356.011L77.89 416.883L144.001 417V464.001H320Z",fill:"#FF6473"}),s.a.createElement("path",{d:"M176.001 192C171.601 192 168.001 188.4 168.001 184V176C168.001 171.6 171.601 168 176.001 168C180.401 168 184.001 171.6 184.001 176V184C184.001 188.4 180.4 192 176.001 192Z",fill:"#623F33"}),s.a.createElement("path",{d:"M288 192C283.6 192 280 188.4 280 184V176C280 171.6 283.6 168 288 168C292.4 168 296 171.6 296 176V184C296 188.4 292.4 192 288 192Z",fill:"#623F33"}),s.a.createElement("path",{d:"M232.001 248.219C217.778 248.219 204.474 244.719 195.501 238.614C191.849 236.13 190.899 231.153 193.388 227.501C195.868 223.853 200.849 222.903 204.501 225.388C210.79 229.665 221.071 232.22 232.001 232.22C242.931 232.22 253.212 229.665 259.501 225.388C263.161 222.896 268.13 223.849 270.614 227.501C273.102 231.153 272.153 236.13 268.501 238.614C259.529 244.719 246.224 248.219 232.001 248.219Z",fill:"#E4B07B"}),s.a.createElement("path",{d:"M161.997 243.723C155.515 236.773 152.002 227.602 152.002 218.098V147.492C174.081 135.549 238.601 104 304 104H160C157.246 104 154.579 104.321 152 104.881V104.806C133.743 108.513 120 124.649 120 144V160C106.745 160 96 170.745 96 184C96 197.255 106.745 208 120 208V216C120 235.378 131.651 252.855 149.538 260.308L201.228 281.846C203.758 282.9 206.34 283.808 208.955 284.595C186.111 267.883 170.906 253.274 161.997 243.723Z",fill:"#FDC88E"}),s.a.createElement("path",{d:"M144.001 430.04V411.934C144.001 404.237 141.227 396.799 136.188 390.981L92.169 340.168C88.617 344.665 86.239 350.098 85.5 356.011L77.144 422.858C89.867 423.622 123.711 427.587 144.001 430.04Z",fill:"#F05467"}),s.a.createElement("path",{d:"M144.001 419.507L78.065 412.181C75.479 411.894 73.151 413.757 72.863 416.342L72.137 422.878C71.85 425.463 73.713 427.792 76.298 428.079L144.001 435.602V419.507Z",fill:"#BD445A"}),s.a.createElement("path",{d:"M320 430.04V411.934C320 404.237 322.774 396.799 327.813 390.981L371.832 340.168C375.384 344.665 377.762 350.098 378.501 356.011L386.857 422.858C374.134 423.622 340.289 427.587 320 430.04Z",fill:"#F05467"}),s.a.createElement("path",{d:"M320 419.507L385.936 412.181C388.522 411.894 390.85 413.757 391.138 416.342L391.864 422.878C392.151 425.463 390.288 427.792 387.703 428.079L320 435.602V419.507Z",fill:"#BD445A"}),s.a.createElement("path",{d:"M368 40C368 40 365.137 37.898 359.79 34.74C358.341 16.289 352 8 352 8L322.801 17.733C297.358 8.546 261.586 0 216.001 0C216.001 0 210.751 5.5 200.001 8C200.001 8 172.751 2 144.001 0L128.001 40C128.001 40 88.001 39.667 88.001 88C88.001 105.761 97.922 150.104 102.131 168.12C106.527 163.176 112.865 160 120.001 160V144C120.001 122.107 137.605 104.375 159.422 104.058C153.28 117.382 152.001 128 152.001 128C172.001 114.666 198.001 104 232.001 104H304.001C326.092 104 344.001 121.909 344.001 144V160C351.709 160 358.492 163.698 362.883 169.346C369.817 151.89 385.669 101.572 368 40Z",fill:"#9D6E48"}),s.a.createElement("path",{d:"M352 8L322.801 17.733C297.358 8.546 261.586 0 216.001 0C216.001 0 210.751 5.5 200.001 8C200.001 8 172.751 2 144.001 0L128.001 40C128.001 40 88.001 39.667 88.001 88C88.001 105.761 97.922 150.104 102.131 168.12C106.527 163.176 112.865 160 120.001 160V144C120.001 123.119 136.06 106.171 156.469 104.356C154.324 110.322 152.001 118.823 152.001 128C183.501 88 228.243 73.569 264.001 64C299.501 54.5 304.001 40 304.001 40C304.001 40 339 38 352 8Z",fill:"#8D5F3D"})),s.a.createElement("defs",null,s.a.createElement("clipPath",{id:"clip0"},s.a.createElement("rect",{width:"464.001",height:"464.001",fill:"white"}))))}}]),t}(r.Component)),z=a(7),j=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("section",{className:"rz-about-me rz-page"},s.a.createElement("div",{className:"rz-container rz-page__container"},s.a.createElement("h1",{className:"rz-title"},"Welcome to my website"),s.a.createElement("div",{className:"rz-info"},s.a.createElement("div",{className:"rz-info__block rz-boy"},s.a.createElement(k,null)),s.a.createElement("div",{className:"rz-info__block"},s.a.createElement("div",{className:"rz-faq"},s.a.createElement("p",{className:"rz-faq__subtitle"},"My name is"),s.a.createElement("strong",{className:"rz-faq__name"},"Roman Zherdev"),s.a.createElement("ul",{className:"rz-faq-list"},s.a.createElement("li",{className:"rz-faq-list__item"},"Who am I?"),s.a.createElement("li",{className:"rz-faq-list__item"},"I'm a software engineer."),s.a.createElement("li",{className:"rz-faq-list__item"},"What is my job?"),s.a.createElement("li",{className:"rz-faq-list__item"},"My job is to make websites. Mainly I create SPA using Angular."),s.a.createElement("li",{className:"rz-faq-list__item"},"How many years of experience do I have?"),s.a.createElement("li",{className:"rz-faq-list__item"},"3 years in web development."),s.a.createElement("li",{className:"rz-faq-list__item"},"What\u2019s the difference between me and other developers?"),s.a.createElement("li",{className:"rz-faq-list__item"},"I have a magic cat which helps me to write beautiful code :3")))))),s.a.createElement("div",{className:"rz-next",onClick:function(){return e.goTo("/technologies")}},s.a.createElement("p",{className:"rz-next__text"},"Technologies")))}},{key:"goTo",value:function(e){this.props.history.push(e)}}]),t}(r.Component),w=Object(z.e)(j),N=(a(48),["img/technologies/html.png","img/technologies/sass.png","img/technologies/angular.png","img/technologies/ts.png","img/technologies/js.png","img/technologies/ngrx.png","img/technologies/rxjs.png","img/technologies/nest.png","img/technologies/material.png","img/technologies/bootstrap.png","img/technologies/pagespeed.png","img/technologies/chartjs.png","img/technologies/node.png","img/technologies/mongo.png","img/technologies/mysql.png","img/technologies/react.png","img/technologies/redux.png","img/technologies/vue.png","img/technologies/git.png","img/technologies/webpack.png","img/technologies/gulp.png","img/technologies/jenkins.png","img/technologies/docker.png","img/technologies/trello.png","img/technologies/jira.png","img/technologies/photoshop.png","img/technologies/figma.png","img/technologies/zeplin.png"]),O=function(){function e(t){Object(c.a)(this,e),this.path=t}return Object(l.a)(e,[{key:"alt",get:function(){var e=this.path.match(/\/(.*)\/(.*)\..*/);return e&&e[2]}},{key:"style",get:function(){switch(this.alt.toLocaleLowerCase()){case"angular":return M(46,0);case"bootstrap":return M(60,82);case"chartjs":return M(72,70);case"docker":return M(18,40);case"figma":return M(0,50);case"git":return M(88,65);case"gulp":return M(80,36);case"html":return M(57,30);case"jenkins":return M(33,70);case"jira":return M(80,84);case"js":return M(15,57);case"material":return M(39,87);case"mongo":return M(90,18);case"mysql":return M(74,20);case"nest":return M(9,9);case"node":return M(80,5);case"pagespeed":return M(2,28);case"photoshop":return M(89,42);case"react":return M(30,7);case"redux":return M(47,26);case"ngrx":return M(27,23);case"rxjs":return M(62,10);case"sass":return M(36,40);case"trello":return M(22,84);case"ts":return M(45,65);case"vue":return M(4,78);case"webpack":return M(61,57);case"zeplin":return M(74,54);default:return M(0,0)}}}]),e}();function M(e,t){return{left:"".concat(e,"%"),top:"".concat(t,"%"),animationDelay:"".concat(.75*Math.random(),"s")}}var S;a(49);!function(e){e[e.LG=1280]="LG"}(S||(S={}));var L,x,A=a(12),D=(L={},Object(A.a)(L,"/","About me"),Object(A.a)(L,"/technologies","Technologies"),Object(A.a)(L,"/my-works","My works"),Object(A.a)(L,"/contacts","Contacts"),L),R=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).prevLabel=void 0,a.nextLabel=void 0,a.prevLabel=D[e.prev],a.nextLabel=D[e.next],a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"rz-next",onClick:function(){return e.goNext()}},s.a.createElement("p",{className:"rz-next__back",onClick:function(){return e.goTo(e.props.prev)}},this.prevLabel),s.a.createElement("p",{className:"rz-next__text",onClick:function(){return e.goTo(e.props.next)}},this.nextLabel))}},{key:"goNext",value:function(){window&&window.innerWidth<=S.LG||this.props.history.push(this.props.next)}},{key:"goTo",value:function(e){this.props.history.push(e)}}]),t}(r.Component),T=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).images=N.map(function(e){return new O(e)}),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("section",{className:"rz-technologies rz-page"},s.a.createElement("div",{className:"rz-container rz-page__container"},s.a.createElement("h1",{className:"rz-title"},"Technologies"),s.a.createElement("div",{className:"rz-technologies__inner"},this.images.map(function(e){return s.a.createElement("div",{key:e.path,style:e.style,className:"rz-technologies__image-wrap"},s.a.createElement("img",{src:e.path,alt:e.alt}))}))),s.a.createElement(R,{history:this.props.history,prev:"/",next:"/my-works"}))}}]),t}(r.Component),V=(a(50),[{name:"Biarritz",color:"#DA312A",logo:"img/my-works/biarritz.png",link:"https://bo-pb.com",descr:"Isomorphic website with admin panel for french rugby club.<br><br>Technologies:<br>Angular 6, Node.js, express, Angular Universal, Angular Material, MongoDB, NgRx, RxJS",subtitle:"SPA with SSR + CMS"},{name:"Burger King",color:"#FEBE10",logo:"img/my-works/burger-king.png",descr:"A kiosk application for making purchases<br><br>Technolgoies:<br>HTML, Sass, Angular",subtitle:"Kiosk application"},{name:"Mixort",color:"#4DC223",logo:"img/my-works/mixort.png",link:"https://mixort.com",descr:"Isomorphic website with admin panel.<br><br>Technologies:<br>Angular 7, Node.js, express, Angular Universal, Angular Material, MongoDB, NgRx, RxJS",subtitle:"SPA with SSR + CMS"},{name:"Gaia",color:"#212121",logo:"img/my-works/gaia.png",link:"http://gaia.gml.aisnovations.com",descr:"Users are able to buy courses and pass them. Administrators can to create courses, tests, review them,solve issues which comes from users etc.<br><br>Technologies:<br>Angular 6, Node.js, express, Stripe, Angular Material, MongoDB, NgRx, RxJS",subtitle:"Online learning platform"},{name:"NDAX",color:"#00B8FF",logo:"img/my-works/ndax.png",link:"http://ndax.gml.aisnovations.com",descr:"Buy/sell crypto or national currency. See everything in realtime. Do withdraw from your wallet or make deposits.<br><br>Technologies:<br>Angular 7, Bootstrap, NgRx, RxJS, Angular Universal",subtitle:"Cryptocurrency trading platform"},{name:"Galcon",color:"#00AEEC",logo:"img/my-works/galcon.png",link:"http://galileo.gml.aisnovations.com",descr:"This company is specialised on irrigation systems. The website I've been working on gives you an ability to configure your irrigation system however you want. You can create different programs and make a schedule for them. You can see the status of your system in realtime: which valve is irrigating at the moment, if there is any alert or something like that.",subtitle:"Automated irrigation systems"},{name:"JET Technical",color:"#086090",logo:"img/my-works/jet.png",link:"http://jet.gml.aisnovations.com",descr:"Isomorphic website with admin panel.<br><br>Technologies:<br>Angular 7, Node.js, express, Angular Universal, Angular Material, MongoDB, NgRx, RxJS",subtitle:"SPA with SSR + CMS"},{name:"Via",color:"#778CFD",logo:"img/my-works/via.png",link:"https://viacustomer.com",descr:"You can connect your Google/Facebook account. The website provides you statistics of reviews, it also has SMS messenger. You can send review invites this via messenger, customize the layout of invite, schedule notifications for your clients, like discounts on it's birthday and many other things.",subtitle:"A tool for business"}]),B=(a(51),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).data=void 0,a.data=e.project,a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"rz-project-card",style:{borderBottomColor:this.data.color}},s.a.createElement("img",{className:"rz-project-card__logo",src:this.data.logo,alt:this.data.name}),s.a.createElement("h3",{className:"rz-project-card__title",style:{color:this.data.color}},this.data.name),s.a.createElement("div",{style:{backgroundColor:this.data.color},className:"rz-project-card__overlay rz-description"},s.a.createElement("h3",{className:"rz-description__title"},this.data.name),s.a.createElement("p",{className:"rz-description__subtitle"},this.data.subtitle),s.a.createElement("p",{className:"rz-description__text",dangerouslySetInnerHTML:{__html:this.data.descr}}),this.data.link?s.a.createElement("a",{className:"rz-description__link",href:this.data.link,target:"_blank"},"Check it out"):""))}}]),t}(r.Component)),F=function(e){function t(e){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).call(this,e))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("section",{className:"rz-page rz-my-works"},s.a.createElement("div",{className:"rz-container rz-page__container"},s.a.createElement("h1",{className:"rz-title"},"My works"),s.a.createElement("div",{className:"rz-cards"},V.map(function(e){return s.a.createElement(B,{key:e.name,project:e})}))),s.a.createElement(R,{history:this.props.history,prev:"/technologies",next:"/contacts"}))}}]),t}(r.Component),I=(a(52),a(53),function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("footer",{className:"rz-footer"},s.a.createElement("div",{className:"rz-container rz-footer__container"},s.a.createElement("strong",{className:"rz-name"},"Roman Zherdev 2019"),s.a.createElement("div",null,"Icons made by ",s.a.createElement("a",{href:"https://www.freepik.com/",title:"Freepik"},"Freepik")," from ",s.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com")," is licensed by ",s.a.createElement("a",{href:"http://creativecommons.org/licenses/by/3.0/",title:"Creative Commons BY 3.0",target:"_blank"},"CC 3.0 BY"))))}}]),t}(r.Component)),Z=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("svg",{width:"24",height:"25",viewBox:"0 0 24 25",fill:"none",className:"rz-submit__icon",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("path",{className:"rz-submit__path",d:"M21.6562 2.64575L16.658 21.0481L10.2868 14.8451L16.5651 8.0401L8.14959 14.0136L2.34375 12.5644L21.6562 2.64575ZM9.51525 16.0094V22.0042L12.2686 18.7338L9.51525 16.0094Z",fill:"white"}))}}]),t}(r.Component),U=new(function(){function e(){Object(c.a)(this,e)}return Object(l.a)(e,[{key:"sendEmail",value:function(e){return Email.send({Host:"smtp.gmail.com",Username:"rzherdev6@gmail.com",Password:"MIOC@%Vfjkweriu",To:"romazherdev@gmail.com",From:"rzherdev6@gmail.com",Subject:"From my website",Body:e})}}]),e}());!function(e){e.PENDING="PENDING",e.ERROR="ERROR",e.SUCCESS="SUCCESS"}(x||(x={}));var P=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).form=void 0,a.messageStatus=void 0,a.onKeyDown=function(e){"Enter"===e.key&&(e.ctrlKey?a.setState(function(e){return{message:e.message+"\n"}}):(e.preventDefault(),a.submit()))},a.onMessageChange=function(e){a.setState({message:e.target.value})},a.submit=function(e){e&&e.preventDefault(),a.state.message&&(a.messageStatus=x.PENDING,a.forceUpdate(),U.sendEmail(a.state.message).then(function(e){a.messageStatus=x.ERROR,a.forceUpdate(),"OK"===e&&(a.messageStatus=x.SUCCESS,a.forceUpdate())}))},a.form=s.a.createRef(),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({})}},{key:"render",value:function(){return s.a.createElement("section",{className:"rz-contacts"},s.a.createElement("div",{className:"rz-container rz-page__container rz-contacts__container"},s.a.createElement("h1",{className:"rz-title"},"Contacts"),s.a.createElement("form",{ref:this.form,className:"rz-form",onSubmit:this.submit},s.a.createElement("p",{className:"rz-email"},s.a.createElement("b",{className:"rz-accent"},"Email/skype:"),"\xa0",s.a.createElement("a",{className:"rz-skype",href:"skype:romazherdev@gmail.com"},"romazherdev@gmail.com")),s.a.createElement("textarea",{disabled:this.isDisabled,name:"message",onKeyDown:this.onKeyDown,value:this.state&&this.state.message||"",className:"rz-message",placeholder:"Type your message here . . .",onChange:this.onMessageChange}),s.a.createElement("button",{type:"submit",disabled:this.isDisabled,className:this.btnClass},s.a.createElement("span",{className:"rz-submit__label"},this.btnText),s.a.createElement(Z,null))),s.a.createElement("ul",{className:"rz-links"},s.a.createElement("li",{className:"rz-links__item"},s.a.createElement("a",{style:{backgroundImage:"url(/img/linked-in.svg)"},href:"https://linkedin.com/in/romazherdev/",target:"_blank"})),s.a.createElement("li",{className:"rz-links__item"},s.a.createElement("a",{style:{backgroundImage:"url(/img/github.svg)"},href:"https://github.com/Romalei",target:"_blank"})),s.a.createElement("li",{className:"rz-links__item"},s.a.createElement("a",{style:{backgroundImage:"url(/img/telegram.png)"},href:"tg://resolve?domain=romanzherdev",target:"_blank"})))),s.a.createElement(I,null))}},{key:"btnText",get:function(){switch(this.messageStatus){case x.ERROR:return"Resend";case x.PENDING:return"Sending...";case x.SUCCESS:return"Sent";default:return"Send"}}},{key:"btnClass",get:function(){switch(this.messageStatus){case x.ERROR:return"rz-submit rz-submit_error";case x.PENDING:return"rz-submit rz-submit_sending";case x.SUCCESS:return"rz-submit rz-submit_success";default:return"rz-submit"}}},{key:"isDisabled",get:function(){return this.messageStatus===x.SUCCESS||this.messageStatus===x.PENDING}}]),t}(r.Component),q=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("main",{className:"rz-main"},s.a.createElement(z.c,null,s.a.createElement(z.a,{exact:!0,path:"/",component:w}),s.a.createElement(z.a,{exact:!0,path:"/technologies",component:T}),s.a.createElement(z.a,{exact:!0,path:"/my-works",component:F}),s.a.createElement(z.a,{exact:!0,path:"/contacts",component:P})))}}]),t}(r.Component),G=function(e){function t(e){var a;return Object(c.a)(this,t),a=Object(m.a)(this,Object(u.a)(t).call(this,e)),E.subscribe(function(){var e=E.getState();document&&document.body.classList.toggle("rz-scrollable",!e.layout.isMobileMenuOpened)}),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"rz-app"},s.a.createElement(y,null),s.a.createElement(_,null),s.a.createElement(q,null))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(v.a,{basename:""},s.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[29,1,2]]]);
//# sourceMappingURL=main.b44d33dd.chunk.js.map