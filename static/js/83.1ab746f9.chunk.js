(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{1732:function(e,t,a){"use strict";t.a={sidebar:"_83wtTb1BCQnnURdArrZur",sidebarNavTag:"_3q0FKiXw3tjV2YI3hN3w0p",sidebarButtons:"_4QkIGZ83i8IRb6mEdRXxw",contentWrapper:"_1_zVpFrTUP8ipTyVqpV74I",contentContainer:"_28ZvETZ3W2889Sii32q9ed",header:"_1S_VGzfL5ijS1K4fGDn1Ze",sidebarCollapsed:"_1ZTn2wNaIJI8YfjIEgquMp",sidebarOpen:"_2nnc_V4v3xTCQNn6Xxu3i9",tableContainer:"_2ku-2mH_FOhvs_3lRD_Dg3",noBorder:"v5b_JPuyMFQ369WcQ6kmn",tableContent:"_3SgRNJawta6UBIo_1unPUm",extendCardTableEdges:"_2k79IgNS9vV9bmtzjKc_Ga",sectionContainer:"_2JDpwuXCEVehe9kPfKj0zi",topSectionContainer:"_3RlVc37iGg61hd0nOeYIVO",cellWithIcon:"lvuyW1ZmUL_6dJUl2v1si",cardStyles:"I-57U7h3NEE2ggF5ohvSw",cellText:"_253LZak9ginUO60Mmh2ner",stacked:"_3lyRn1-WcVHGcQJKtYIMVf",time:"_1Aezso1l2Csa5iW9hTFt4V",percentChange:"ViZPqsEZa8PxfF1FvaJgA",linkOut:"Xoa7flB_S-AL-Y7mGgPIm",regularFont:"_3uUJfQ1loZVpQ8m-O0E5fZ",green:"_2IcFB3aw3_oJ8teMu_GM2p",red:"_2yLjAE6yCrbIHQrDPl7x2O",footer:"_1tJhPIje5dq3xgrFAddMVV",banxaSupportLink:"_1fpUWA-VYWe41CEF0xKtPu"}},1776:function(e,t,a){"use strict";a.d(t,"c",(function(){return m})),a.d(t,"a",(function(){return f})),a.d(t,"b",(function(){return L}));var n=a(0),r=a.n(n),o=a(2),i=a.n(o),l=a(10),c=a(9),s=a(15),d=a(111),b=a(372),p=a(17);const WithSidebar=({children:e,sidebar:t})=>{const a=Object(l.e)(),n=Object(l.f)(b.b);return r.a.createElement(u.MasterDetail,{isSidebarOpen:n},r.a.createElement(u.Master,{isSidebarOpen:n},t),r.a.createElement(u.MasterCollapsedDrawer,{isSidebarOpen:n,role:"button",tabIndex:0,onClick:()=>a(Object(d.f)(!0))},r.a.createElement(s.yb,null)),r.a.createElement(u.Detail,null,e))};WithSidebar.propTypes={children:i.a.node,sidebar:i.a.node};var m=WithSidebar;const u={};u.MasterDetail=c.c.div`
  --current-sidebar-width: ${({isSidebarOpen:e})=>e?"var(--sidebar-width)":"var(--collapsed-sidebar-width)"};

  --master-detail-leftover-width: calc(
    100vw - var(--current-sidebar-width) - var(--page-content-max-width)
  );

  display: grid;
  width: 100%;
  height: 100%;

  grid-template:
    'Sidebar Content' 100%
    / auto 1fr;

  @media ${p.a.tablet} {
    grid-template:
      'Content' 100%
      / 1fr;
  }

  background-color: var(--color-layer-base);
`,u.Master=c.c.div`
  grid-area: Sidebar;

  @media ${p.a.tablet} {
    display: none;
  }

  border-right: solid 1px var(--color-border-grey);
  width: var(--current-sidebar-width);
  height: 100%;
  overflow-y: auto;

  &:hover,
  &:hover ~ * {
    will-change: width;
  }

  transition: width 0.2s, opacity 0.2s, transform 0.2s;
  transform: perspective(1000px);
  transform-origin: left;

  ${({isSidebarOpen:e})=>!e&&c.b`
      opacity: 0;
      pointer-events: none;
      transform: perspective(1000px) translateZ(-200px);
    `}
`,u.MasterCollapsedDrawer=c.c.div`
  grid-area: Sidebar;
  z-index: 1;
  transition: opacity 0.2s;

  display: flex;
  border-right: solid 1px var(--color-border-grey);
  cursor: pointer;

  > svg {
    margin: auto;
  }

  &:hover {
    > svg * {
      stroke: var(--color-text-light);
    }
  }

  @media ${p.a.tablet} {
    display: none;
  }

  ${({isSidebarOpen:e})=>e&&c.b`
      opacity: 0;
      pointer-events: none;
    `}
`,u.Detail=c.c.div`
  display: grid;
  grid-template-columns: min(100%, var(--page-content-max-width));
  justify-content: center;
  overflow-y: auto;
`;var g=a(61),y=a(32),E=a(1),O="_32KCJs-A1zdzZU4IIzBgMa",v="_24oYVAe9Tb5EbauY6AEcLx";const SidebarHeader=({title:e,setIsSidebarOpen:t,showHide:a=!0,stringGetter:n})=>r.a.createElement("div",{className:O},r.a.createElement("span",null,e),a&&r.a.createElement("div",{role:"button",tabIndex:0,className:v,onClick:()=>t(!1)},n({key:E.a.HIDE})));SidebarHeader.propTypes={title:i.a.string,setIsSidebarOpen:i.a.func.isRequired,showHide:i.a.bool,stringGetter:i.a.func.isRequired};var f=Object(y.c)(Object(l.c)(null,e=>Object(g.b)({setIsSidebarOpen:d.f},e))(SidebarHeader)),h=a(72),I=a.n(h),_=a(96),k=a(16),j=a.n(k),S="_103NvBb3fIO7afwK3BWeGE",w="_3syQNM8U83a_SGNOLvgsKd",P="_1PKYM8jdHG-_kSMdPVfzHP",T="_7-EFAWv9XDlD1RqRbb9tf",N="_1RWOTXd0cSMI-Kdr_ekTy",C="_1Hbi4Ub-j7VlOoxPggVw7J",R="_2FLo1daTVtbhQqTHo2woLj",D="_38ZFgk2pvGLPCU_FvqtL5w",G="Ld0B8w1SVTsHxx6LfRgoY";const SidebarMenuItem=({className:e,detail:t,icon:a,iconRemoveBackground:n,iconUsesFill:o,iconUsesStroke:i,isTinyIcon:l,isButton:c,isExternalLink:s,label:d,labelClassName:b,linkTo:p,onClick:m=I.a,selected:u})=>{const g=r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:j()(C,b)},r.a.createElement("div",{className:j()(R,{[G]:l,[N]:o,[T]:i,[D]:n})},a),d),t&&r.a.createElement("div",{className:P},t));return c?r.a.createElement("div",{role:"button",tabIndex:0,className:j()(S,e),onClick:m},g):s?r.a.createElement("a",{href:p,target:"_blank",rel:"noopener noreferrer",className:j()(S,e),onClick:m},g):r.a.createElement(_.a,{to:p,className:j()(S,{[w]:u},e),onClick:m},g)};SidebarMenuItem.propTypes={className:i.a.string,detail:i.a.oneOfType([i.a.arrayOf(i.a.node),i.a.node]),icon:i.a.node,iconRemoveBackground:i.a.bool,iconUsesFill:i.a.bool,iconUsesStroke:i.a.bool,isButton:i.a.bool,isExternalLink:i.a.bool,isTinyIcon:i.a.bool,label:i.a.oneOfType([i.a.string,i.a.node,i.a.arrayOf(i.a.node)]).isRequired,labelClassName:i.a.string,linkTo:i.a.string.isRequired,onClick:i.a.func,selected:i.a.bool};var L=SidebarMenuItem},2141:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(2),i=a.n(o),l=a(25),c=a(9),s=a(10),d=a(4),b=a(32),p=a(15),m=a(1776),u=a(190),g=a(127),y=a(112),E=a(244),O=a(37),v=a(115),f=a(1),h=a(19),I=a(30),_=a(228),k=a(1732);function asyncGeneratorStep(e,t,a,n,r,o,i){try{var l=e[o](i),c=l.value}catch(s){return void a(s)}l.done?t(c):Promise.resolve(c).then(n,r)}function _asyncToGenerator(e){return function(){var t=this,a=arguments;return new Promise((function(n,r){var o=e.apply(t,a);function _next(e){asyncGeneratorStep(o,n,r,_next,_throw,"next",e)}function _throw(e){asyncGeneratorStep(o,n,r,_next,_throw,"throw",e)}_next(void 0)}))}}function ownKeys(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(a),!0).forEach((function(t){_defineProperty(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ownKeys(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function _defineProperty(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const j=Object(n.lazy)(()=>a.e(80).then(a.bind(null,2114))),S=Object(n.lazy)(()=>a.e(72).then(a.bind(null,2124))),w=Object(n.lazy)(()=>Promise.all([a.e(9),a.e(19),a.e(21),a.e(27)]).then(a.bind(null,1973))),P=Object(n.lazy)(()=>a.e(86).then(a.bind(null,2125))),T=Object(n.lazy)(()=>a.e(75).then(a.bind(null,2126))),N=Object(n.lazy)(()=>a.e(84).then(a.bind(null,2117))),C=Object(n.lazy)(()=>a.e(85).then(a.bind(null,2118))),R={[h.k.DIAMOND]:{stringKey:f.a.DIAMOND,icon:()=>r.a.createElement(L.BadgeImg,{alt:"",src:Object(_.b)("DIAMOND")}),PageComponent:S,period:d.h.Diamond},[h.k.PLATINUM]:{stringKey:f.a.PLATINUM,icon:()=>r.a.createElement(L.BadgeImg,{alt:"",src:Object(_.b)("PLATINUM")}),PageComponent:S,period:d.h.Platinum},[h.k.GOLD]:{stringKey:f.a.GOLD,icon:()=>r.a.createElement(L.BadgeImg,{alt:"",src:Object(_.b)("GOLD")}),PageComponent:S,period:d.h.Gold},[h.k.SILVER]:{stringKey:f.a.SILVER,icon:()=>r.a.createElement(L.BadgeImg,{alt:"",src:Object(_.b)("SILVER")}),PageComponent:S,period:d.h.Silver},[h.k.BRONZE]:{stringKey:f.a.BRONZE,icon:()=>r.a.createElement(L.BadgeImg,{alt:"",src:Object(_.b)("BRONZE")}),PageComponent:S,period:d.h.Bronze}};let D={[h.o.COMPETITION]:{stringKey:f.a.DAILY,icon:()=>r.a.createElement(L.BadgeImg,{alt:"",src:"/badges/daily.png"}),PageComponent:P}};h.a&&(D=_objectSpread(_objectSpread({},D),{},{[h.a]:{stringKey:f.a.LEGENDS,icon:()=>r.a.createElement(L.BadgeImg,{alt:"",src:"/badges/legends.png"}),PageComponent:T,isHiddenFromSidebar:!0}}));const G={[h.o.PNL_ABSOLUTE]:{stringKey:f.a.PROFIT_AND_LOSS_ABSOLUTE,icon:()=>r.a.createElement(p.Lb,null),PageComponent:N},[h.o.PNL_PERCENT]:{stringKey:f.a.PROFIT_AND_LOSS_PERCENT,icon:()=>r.a.createElement(p.mb,null),PageComponent:C}},RankingsPage=({history:e,location:t,stringGetter:a})=>{var o;const i=null!==(o=Object(s.f)(O.o))&&void 0!==o?o:"",c=Object(s.f)(v.a,s.d),b=Object(s.f)(E.f,s.d),p=null===t||void 0===t?void 0:t.pathname,_=Object(s.e)();Object(n.useEffect)(_asyncToGenerator((function*(){(({leaguesUserInfo:t})=>{[h.l.RANKINGS,h.o.LEAGUES].includes(p)&&(null!==t&&void 0!==t&&t.period||null!==b&&void 0!==b&&b.period?e.replace(h.k[(null===t||void 0===t?void 0:t.period)||(null===b||void 0===b?void 0:b.period)]):p===h.l.RANKINGS?e.replace(h.o.DIAMOND):p===h.o.LEAGUES&&e.replace(h.k.DIAMOND))})({leaguesUserInfo:b})})),[i,c,p]),Object(n.useEffect)(_asyncToGenerator((function*(){try{const e=yield I.c.getCurrentHedgies();_(Object(y.a)(e))}catch(e){}try{const e=yield I.c.getHedgiesHistory({nftRevealType:d.g.Daily,start:0,end:20}),t=yield I.c.getHedgiesHistory({nftRevealType:d.g.Weekly});_(Object(y.d)({daily:(null===e||void 0===e?void 0:e.historicalTokenIds)||[],weekly:(null===t||void 0===t?void 0:t.historicalTokenIds)||[]}))}catch(e){}})),[]);return r.a.createElement(m.c,{sidebar:r.a.createElement("div",{className:k.a.sidebar},r.a.createElement("div",null,r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{title:a({key:f.a.VIEWS})}),r.a.createElement(m.b,{key:h.o.HEDGIES,iconRemoveBackground:!0,iconUsesFill:!0,isTinyIcon:!0,icon:r.a.createElement(L.BadgeImg,{alt:"",src:"/hedgies-logo.png"}),label:"Hedgies",linkTo:h.o.HEDGIES,selected:!!Object(l.f)(t.pathname,{path:h.o.HEDGIES})})),r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{title:a({key:f.a.COMPETITION}),showHide:!1}),Object.entries(D).map(([e,n])=>{var o;return!n.isHiddenFromSidebar&&r.a.createElement(m.b,{key:e,iconRemoveBackground:!0,iconUsesFill:!0,isTinyIcon:!0,icon:n.icon(),detail:null===(o=n.detail)||void 0===o?void 0:o.call(n,a),label:a({key:n.stringKey}),linkTo:e,selected:!!Object(l.f)(t.pathname,{path:e})})})),r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{title:a({key:f.a.LEAGUES}),showHide:!1}),Object.entries(R).map(([e,n])=>r.a.createElement(m.b,{key:e,iconRemoveBackground:!0,iconUsesFill:!0,isTinyIcon:!0,icon:n.icon(),detail:(null===b||void 0===b?void 0:b.period)===n.period&&r.a.createElement(g.a,{usePillStyles:!0},a({key:f.a.YOU})),label:a({key:n.stringKey}),linkTo:e,selected:!!Object(l.f)(t.pathname,{path:e})}))),r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{title:a({key:f.a.METRICS}),showHide:!1}),Object.entries(G).map(([e,n])=>{var o;return r.a.createElement(m.b,{key:e,iconUsesFill:!0,isTinyIcon:!0,icon:n.icon(),detail:null===(o=n.detail)||void 0===o?void 0:o.call(n,a),label:a({key:n.stringKey}),linkTo:e,selected:!!Object(l.f)(t.pathname,{path:e})})}))))},p===h.l.RANKINGS?r.a.createElement(u.a,null):r.a.createElement(n.Suspense,{fallback:r.a.createElement(u.a,null)},r.a.createElement(l.d,null,r.a.createElement(l.b,{key:h.o.HEDGIES,path:h.o.HEDGIES,component:j}),r.a.createElement(l.b,{key:h.o.PROFILE,path:h.o.PROFILE},r.a.createElement(w,{isViewingFromRankings:!0})),Object.entries(G).map(([e,t])=>r.a.createElement(l.b,{key:e,path:e,component:t.PageComponent})),Object.entries(R).map(([e,t])=>r.a.createElement(l.b,{key:e,path:e,component:t.PageComponent})),Object.entries(D).map(([e,t])=>r.a.createElement(l.b,{key:e,path:e,component:t.PageComponent})),r.a.createElement(l.a,{to:h.l.RANKINGS}))))},L={};L.BadgeImg=c.c.img`
  width: 28px;
`,RankingsPage.propTypes={history:i.a.object.isRequired,location:i.a.object.isRequired,stringGetter:i.a.func.isRequired},t.default=Object(b.c)(Object(l.i)(RankingsPage))}}]);